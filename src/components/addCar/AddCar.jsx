import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCar } from '../../redux/car/car';

const AddCar = () => {
  const [carData, setCarData] = useState({
    name: '',
    description: '',
    price: '',
    test_drive_fee: '',
    model: '',
    year: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const car = {
      name: carData.name,
      description: carData.description,
      price: carData.description,
      test_drive_fee: carData.test_drive_fee,
      model: carData.model,
      year: carData.year,
    };
    dispatch(createCar(car));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCarData({ ...carData, [name]: value });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
      >
        <h2 className="w-full text-center">
          Add a New Car
        </h2>
        <div className="w-full">
          <input
            type="text"
            name="name"
            placeholder="Enter Car name"
            value={carData.name}
            onChange={handleInputChange}
            autoComplete="off"
            className="w-full"
            required
          />
        </div>
        <div>
          <input
            type="text"
            value={carData.description}
            name="description"
            onChange={handleInputChange}
            className="w-full"
            placeholder="description"
            required
          />
        </div>
        <div>
          <input
            type="number"
            value={carData.test_drive_fee}
            placeholder="test_drive_fee"
            name="test_drive_fee"
            onChange={handleInputChange}
            className="w-full"
            required
          />
        </div>
        <div>
          <input
            type="text"
            value={carData.model}
            placeholder="Model"
            name="model"
            onChange={handleInputChange}
            className="w-full"
            required
          />
        </div>
        <div>
          <input
            type="number"
            value={carData.price}
            placeholder="Price"
            name="price"
            onChange={handleInputChange}
            className="w-full"
            required
          />
        </div>
        <div>
          <input
            type="date"
            value={carData.year}
            name="year"
            onChange={handleInputChange}
            className="w-full"
            required
          />
        </div>
        <button
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCar;