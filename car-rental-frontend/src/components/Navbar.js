import React from 'react';
import './Navbar.css';
import logo from '../images/logo.png'; // Adjust the path if necessary
import WalletButton from './WalletButton'; // Import the WalletButton component

const Navbar = ({ account, network, connectWallet, disconnectWallet, handleSearch }) => (
  <nav className="navbar">
    <div className="logo">
      <img src={logo} alt="Car Rental Logo" />
    </div>
    <h1>Car Rental DApp</h1>
    <div className="nav-links">
      <a href="#home">Home</a>
      <a href="#list-car">List Car</a>
      <a href="#available-cars">Available Cars</a>
    </div>
    <input
      type="text"
      placeholder="Search cars..."
      onChange={(e) => handleSearch(e.target.value)}
    />
    {/* <div className="network-info">
      <p>Network: {network || 'Not connected'}</p>
      <p>Connected Account: {account || 'Not connected'}</p>
    </div> */}
    {/* Replace wallet button logic with WalletButton component */}
    <WalletButton
      account={account}
      connectWallet={connectWallet}
      disconnectWallet={disconnectWallet}
    />
  </nav>
);

export default Navbar;