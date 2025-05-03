import React from 'react';
import './WalletButton.css';

const WalletButton = ({ account, connectWallet, disconnectWallet }) => {
  return (
    <div className="wallet-button-container">
      {account ? (
        <>
          
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
        </>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletButton;