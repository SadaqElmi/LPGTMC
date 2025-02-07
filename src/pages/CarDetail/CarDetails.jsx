import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Cars } from '../../data/Car_data.js'; // Importing car data
import CarInfo from './components/CarInfo.jsx';
import RelatedCars from './components/RelatedCars.jsx';
import OffersCard from './components/OffersCard.jsx';
import RentalCarModal from './components/RentalCarModal.jsx';

const CarDetails = () => {
  const { id } = useParams();
  const car = Cars.find((car) => car.id === parseInt(id));
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!car) {
    return <p className="text-center text-gray-500">Car not found.</p>;
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="m-auto max-w-6xl">
        <span className="text-gray-600 ml-4">
          <NavLink to="/" className="text-blue-500 hover:text-blue-300">Home</NavLink> » 
          <NavLink to="/cars" className="text-blue-500 hover:text-blue-300"> Explore cars</NavLink> » {car.name}
        </span>
        
                <div className="flex mt-8 items-stretch">
          <div className="w-full md:w-2/3">
            <CarInfo />
          </div>
          <div className="w-full md:w-1/2 ml-16 flex">
            <OffersCard 
              price={car.price} 
              name={car.name} 
              capacity={car.capacity} 
              gas={car.gas} 
              speed={car.speed} 
              transmission={car.transmission} 
              onRentNowClick={handleOpenModal}
            />
          </div>
        </div>

        
        {/* <RelatedCars /> */}
      </div>
      <RelatedCars />
      <RentalCarModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default CarDetails;