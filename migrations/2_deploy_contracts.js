const CarRental = artifacts.require("CarRental");

// This migration script deploys the CarRental contract to the Sepolia test network


module.exports = function (deployer) {
    deployer.deploy(CarRental);
};