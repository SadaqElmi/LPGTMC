import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { Cars } from "../../../data/Car_data.js"; // Importing car data
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const CarInfo = () => {
  const { id } = useParams();
  const car = Cars.find((car) => car.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!car) {
    return <p className="text-center text-gray-500">Car not found.</p>;
  }

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % car.carImages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? car.carImages.length - 1 : prevIndex - 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="py-2 m-auto p-4">
      <h1 className="text-3xl text-gray-800 mb-4">{car.name}</h1>
      <div className="w-full   rounded-2xl shadow-lg p-2 border border-white ">
        <div className="relative">
          <img
            src={car.carImages[currentImageIndex]}
            alt={car.name}
            className="w-full h-90 object-cover rounded-2xl p-1"
          />
          <button
            onClick={handlePrev}
            className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-200 hover:scale-110"
          >
            <FaArrowLeft className="text-gray-700 transition-all hover:text-blue-400 duration-300" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-200 hover:scale-110"
          >
            <FaArrowRight className="text-gray-700 transition-all hover:text-blue-400 duration-300" />
          </button>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {car.carImages.map((_, index) => (
              <span
                key={index}
                className={`w-6 h-1 rounded-2xl ${currentImageIndex === index ? "bg-white" : "bg-gray-300"} transition-all`}
              ></span>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-2 space-x-2">
          {car.carImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${car.name} ${index + 1}`}
              className={`w-full h-32 object-cover rounded-lg cursor-pointer transition-opacity duration-300 ${currentImageIndex === index ? "opacity-100 border-2 border-blue-500" : "opacity-50 border-2 border-transparent"}`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarInfo;