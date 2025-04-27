// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CarRental {
    struct Car {
        uint id;
        string model;
        uint pricePerDay;
        address payable owner;
        bool isAvailable;
    }

    struct Booking {
        uint carId;
        address renter;
        uint startDate;
        uint endDate;
    }

    uint public carCount;
    mapping(uint => Car) public cars;
    mapping(uint => Booking[]) public bookings;

    event CarListed(uint id, string model, uint price, address owner);
    event CarBooked(uint carId, address renter, uint startDate, uint endDate);

    function listCar(string memory _model, uint _pricePerDay) public {
        require(_pricePerDay > 0, "Price must be greater than 0");

        carCount++;
        cars[carCount] = Car(carCount, _model, _pricePerDay, payable(msg.sender), true);
        emit CarListed(carCount, _model, _pricePerDay, msg.sender);
    }

    function bookCar(uint _carId, uint _startDate, uint _endDate) public payable {
        Car storage car = cars[_carId];
        require(car.isAvailable, "Car not available");
        require(_startDate < _endDate, "Invalid dates");

        uint daysBooked = (_endDate - _startDate) / 1 days;
        uint totalPrice = daysBooked * car.pricePerDay;
        require(msg.value >= totalPrice, "Insufficient payment");

        car.owner.transfer(msg.value);
        bookings[_carId].push(Booking(_carId, msg.sender, _startDate, _endDate));
        emit CarBooked(_carId, msg.sender, _startDate, _endDate);
    }

    function getBookings(uint _carId) public view returns (Booking[] memory) {
        return bookings[_carId];
    }
}
