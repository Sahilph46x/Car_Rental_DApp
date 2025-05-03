import React from 'react';
import './CarCard.css';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <p className="car-title">{car.model}</p>
      <p className="car-price">Price: {car.pricePerDay} wei/day</p>
      <p>Owner: {car.owner}</p>
      <p className={`car-status ${car.isAvailable ? 'available' : ''}`}>
        Status: {car.isAvailable ? 'Available' : 'Rented'}
      </p>
    </div>
  );
};

export default CarCard;