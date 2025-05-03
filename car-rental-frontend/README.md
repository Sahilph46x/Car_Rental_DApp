# **Car Rental DApp**

A decentralized application (DApp) for renting cars, built on the Ethereum blockchain. This project allows car owners to list their cars for rent and users to browse available cars and rent them securely using blockchain technology.

---

## **Features**

- **List Cars**: Car owners can list their cars for rent by providing details like the car model and price per day.

- **Browse Available Cars**: Users can view all available cars for rent.

- **Blockchain Integration**: All transactions are securely recorded on the Ethereum blockchain.

- **MetaMask Integration**: Users can connect their MetaMask wallet to interact with the DApp.

- **Network Support**: Currently supports the Sepolia test network.

---

## **Technologies Used**

- **Frontend**: React.js
- **Blockchain**: Ethereum
- **Smart Contracts**: Solidity
- **Web3.js**: For blockchain interaction
- **MetaMask**: Wallet integration
- **CSS**: For styling

---

## **Project Structure**
```
car-rental-dapp/
├── public/                     # Public assets
│   └── index.html              # Main HTML file
├── src/                        # Source code
│   ├── assets/                 # Images and static assets
│   │   └── logo.png
│   ├── components/             # Reusable components
│   │   ├── Navbar.js           # Navigation bar
│   │   ├── Footer.js           # Footer
│   │   ├── CarCard.js          # Individual car card
│   │   └── AvailableCars.js    # List of available cars
│   ├── contracts/              # Smart contract ABIs
│   │   └── CarRental.json      # Compiled contract ABI
│   ├── pages/                  # Page-level components
│   │   ├── Home.js             # Home page
│   │   ├── ListCar.js          # List car page
│   │   └── AvailableCarsPage.js # Available cars page
│   ├── styles/                 # CSS files
│   │   ├── Navbar.css
│   │   ├── Footer.css
│   │   └── CarCard.css
│   ├── utils/                  # Utility functions
│   │   └── web3.js             # Web3 initialization and contract interaction
│   ├── App.js                  # Main React component
│   ├── index.js                # Entry point
│   └── App.css                 # Global styles
├── package.json                # Project dependencies
└── README.md                   # Project documentation
```

---

## **Getting Started**

### **Prerequisites**

- Install [Node.js](https://nodejs.org/).
- Install the [MetaMask browser extension](https://metamask.io/).
- Truffle or Hardhat: For compiling and deploying smart contracts.

---

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/car-rental-dapp.git
   cd car-rental-dapp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Compile and deploy the smart contract:

   - If using **Truffle**:
     ```bash
     truffle compile
     truffle migrate --network sepolia
     ```

   - If using **Hardhat**:
     ```bash
     npx hardhat compile
     npx hardhat run scripts/deploy.js --network sepolia
     ```

4. Update the contract ABI and address:
   - Copy the `CarRental.json` file from the contracts or `artifacts/contracts` folder into the `src/contracts/` folder.
   - Ensure the contract address matches the deployed address.

5. Start the development server:
   ```bash
   npm start
   ```

---

### **Usage**

1. Open the application in your browser:
   ```
   http://localhost:3000
   ```

2. Connect your MetaMask wallet:
   - Ensure your wallet is connected to the **Sepolia test network**.
   - Add some test ETH to your wallet using a [faucet](https://faucet.sepolia.dev/).

3. Interact with the DApp:

   - **List a Car**: Navigate to the "List Car" page and provide the car details.

   - **View Available Cars**: Browse the "Available Cars" page to see listed cars.

---

## **Smart Contract Details**

### **CarRental.sol**
The smart contract handles the core functionality of the DApp:
- **listCar**: Allows car owners to list their cars for rent.
- **rentCar**: Allows users to rent a car.
- **getCarDetails**: Fetches details of a specific car.

---

## **License**
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## **Contact**
For any questions or feedback, feel free to reach out:
- **Email**: Sahilph46@gmail.com
- **GitHub**: [Sahilph46x](https://github.com/Sahilph46x)

