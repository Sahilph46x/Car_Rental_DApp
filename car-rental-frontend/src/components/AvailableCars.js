import React from 'react';
import CarCard from './CarCard';

const AvailableCars = ({ carList }) => {
  if (!carList || carList.length === 0) {
    return <p>No cars available.</p>;
  }

  return (
    <div className="car-list">
      {carList.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </div>
  );
};

export default AvailableCars;