import React, { useState } from "react";
import { FaUser, FaCar, FaCog, FaGasPump } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

const CarsList = ({ cars }) => {
  const [visibleCars, setVisibleCars] = useState(6); // Show first 6 cars initially
  const navigate = useNavigate();

  const handleLoadMore = () => {
    setVisibleCars((prev) => prev + 6); // Load 6 more cars on each click
  };

  const handleRentNow = (id) => {
    navigate(`/cars/${id}`);
  };

  return (
    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
      {cars.length > 0 ? (
        cars.slice(0, visibleCars).map((car) => (
          <div key={car.id} className="bg-inhiret border border-white rounded-2xl shadow-md p-4 h-[500px]">
            <img src={car.carImages[0]} alt={car.name} className="w-full h-65 object-cover rounded-lg" />
            <div className="flex justify-between items-center mt-4 gap-">
              <h2 className="text-2xl text-gray-800 hover:text-blue-400 ml-2">{car.name}</h2>
              <span className="text-sm text-gray-600 border border-blue-400 border-dashed px-4 py-1 rounded-2xl">{car.year}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-2 ml-2">
              <div className="flex items-center">
                <FaUser className="mr-2 text-blue-400" />
                {car.capacity}
              </div>
              <div className="flex items-center mr-34">
                <FaGasPump className="mr-2 text-blue-400" />
                {car.gas}
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-2 ml-2">
              <div className="flex items-center">
                <FaCar className="mr-2 text-blue-400" />
                {car.speed}
              </div>
              <div className="flex items-center mr-30">
                <FaCog className="mr-2 text-blue-400" />
                {car.transmission}
              </div>
            </div>
            <hr className="text-gray-300 text-xl mt-6" />
            <div className="mt-2 flex justify-between items-center p-2">
              <p className="text-2xl text-gray-800">{car.price} <small className="text-gray-500 text-sm mt-1">/month</small></p>
              <div className="flex items-center gap-4">
                <Link to="#" className="bg-blue-200 p-2 rounded-2xl shadow-md hover:bg-red-200 transition duration-300 flex items-center justify-center">
                  <CiHeart className="text-blue-700 text-2xl transition-all duration-300" />
                </Link>
                <button
                  onClick={() => handleRentNow(car.id)}
                  className="px-2 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-300 transition duration-300"
                >
                  Rent now
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No cars found.</p>
      )}

      {/* Show "Load More" button only if there are more cars to display */}
      {visibleCars < cars.length && (
        <div className="ml-[380px]">
          <button
            onClick={handleLoadMore}
            className="w-46 px-2 py-4 bg-blue-500 text-white rounded-2xl hover:bg-blue-400 transition duration-300"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default CarsList;