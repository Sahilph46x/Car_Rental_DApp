// This is a Truffle configuration file for deploying smart contracts to the Sepolia test network.
require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');


module.exports = {
  networks: {
    sepolia: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          'https://sepolia.infura.io/v3/593434b3bfd2412ca65277b2297188c0' // Replace with your Infura project ID
        ),
      network_id: 11155111, // Sepolia's id
      gas: 4465030, // Gas limit used for deploys. Can be overridden by the --gas flag
      gasPrice: 10000000000, // 10 gwei (in wei) - Sepolia's gas price
      from: '0x9A5Cd10A7e2ad1FC8497486436ee300fC662D32D', // Replace with your account address
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: "0.8.20", // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};