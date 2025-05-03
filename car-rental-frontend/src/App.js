import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import CarRentalJSON from './build/contracts/CarRental.json';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AvailableCars from './components/AvailableCars';
import ListCarForm from './components/ListCarForm';

const App = () => {
  const [account, setAccount] = useState('');
  const [carRental, setCarRental] = useState(null);
  const [carList, setCarList] = useState([]);
  const [carModel, setCarModel] = useState('');
  const [carPrice, setCarPrice] = useState('');
  const [web3, setWeb3] = useState(null);
  const [network, setNetwork] = useState(''); // Add this line

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        try {
          const web3 = new Web3(window.ethereum);
          setWeb3(web3);

          await window.ethereum.request({ method: 'eth_requestAccounts' });

          const accounts = await web3.eth.getAccounts();
          setAccount(accounts[0]);

          const networkId = await web3.eth.net.getId();
          const networkIdString = networkId.toString();

          if (networkId.toString() !== "11155111") {
            alert('Please connect to the Sepolia test network');
            return;
          }

          const deployedNetwork = CarRentalJSON.networks[networkIdString];
          if (!deployedNetwork) {
            alert('CarRental contract not deployed on this network');
            return;
          }

          const contractAddress = deployedNetwork.address;
          const carRentalInstance = new web3.eth.Contract(
            CarRentalJSON.abi,
            contractAddress
          );
          setCarRental(carRentalInstance);

          const carCount = await carRentalInstance.methods.carCount().call();
          const cars = [];
          for (let i = 1; i <= carCount; i++) {
            const car = await carRentalInstance.methods.cars(i).call();
            cars.push(car);
          }
          setCarList(cars);
        } catch (error) {
          console.error('Error initializing web3:', error);
        }
      } else {
        alert('Please install MetaMask to use this app.');
      }
    };

    init();

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', async (accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          alert('Please connect to MetaMask.');
        }
      });
    } else {
      alert('Please install MetaMask to use this app.');
    }
  }, []);

  // Add this useEffect to fetch the network name
  useEffect(() => {
    const fetchNetwork = async () => {
      if (web3) {
        const networkId = await web3.eth.net.getId();
        const networkName = networkId === 1 ? 'Mainnet' : networkId === 11155111 ? 'Sepolia' : 'Unknown';
        setNetwork(networkName);
      }
    };
    fetchNetwork();
  }, [web3]);

  const handleListCar = async (e) => {
    e.preventDefault();
    if (carRental && carModel && carPrice) {
      try {
        await carRental.methods
          .listCar(carModel, carPrice)
          .send({ from: account });
        window.location.reload();
      } catch (error) {
        console.error('Error listing car:', error);
      }
    }
  };

  return (
    <div className="app-container">
      <Navbar account={account} network={network} /> {/* Pass the network prop */}
      <main>
        <ListCarForm
          carModel={carModel}
          setCarModel={setCarModel}
          carPrice={carPrice}
          setCarPrice={setCarPrice}
          handleListCar={handleListCar}
        />
        <AvailableCars carList={carList} />
      </main>
      <Footer />
    </div>
  );
};

export default App;