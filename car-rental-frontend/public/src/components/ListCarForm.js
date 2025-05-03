import React from 'react';

const ListCarForm = ({ carModel, setCarModel, carPrice, setCarPrice, handleListCar }) => (
  <form onSubmit={handleListCar} className="list-car-form">
    <input
      type="text"
      placeholder="Car Model"
      value={carModel}
      onChange={(e) => setCarModel(e.target.value)}
      required
    />
    <input
      type="number"
      placeholder="Price per Day (in wei)"
      value={carPrice}
      onChange={(e) => setCarPrice(e.target.value)}
      required
    />
    <button type="submit">List Car</button>
  </form>
);

export default ListCarForm;