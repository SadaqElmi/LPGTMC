import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft, FaUser, FaCar, FaCog, FaGasPump } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

const CarCard = ({ id, carImages, title, year, capacity, hybrid, mileage, transmission, price }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  // Handle next image
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carImages.length);
  };

  // Handle previous image
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carImages.length - 1 : prevIndex - 1
    );
  };

  const handleRentNow = () => {
    navigate(`/cars/${id}`);
  };

  return (
    <div className="max-w-sm bg-[#edf1f7] border-2 border-white rounded-2xl shadow-lg overflow-hidden mx-2 group">
      <div className="relative">
        {/* Image */}
        <img
          src={carImages[currentImageIndex]}
          alt={`${title} ${currentImageIndex + 1}`}
          className="w-full h-[250px] object-cover p-2 rounded-3xl transition-opacity duration-500"
        />
        {/* Left Arrow as Link */}
        <Link
          to="#"
          onClick={handlePrev}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100"
        >
          <FaArrowLeft className="text-gray-700 transition-all group-hover:text-blue-400 duration-300" />
        </Link>
        {/* Right Arrow as Link */}
        <Link
          to="#"
          onClick={handleNext}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100"
        >
          <FaArrowRight className="text-gray-700 transition-all group-hover:text-blue-400 duration-300" />
        </Link>
        {/* Dots Indicator */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carImages.map((_, index) => (
            <span
              key={index}
              className={`w-6 h-1 rounded-2xl ${currentImageIndex === index ? "bg-white" : "bg-gray-300"} transition-all`}
            ></span>
          ))}
        </div>
      </div>

      {/* Car Info */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <span className="text-sm text-gray-600 border border-blue-400 border-dashed px-2 py-1 rounded-lg">{year}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <FaUser className="mr-2 text-blue-400" />
            {capacity}
          </div>
          <div className="flex items-center mr-32">
            <FaGasPump className="mr-2 text-blue-400" />
            {hybrid}
          </div>
        </div>
        <div className="flex justify-items-stretch text-sm text-gray-600 mt-2">
          <div className="flex items-center">
            <FaCar className="mr-2 text-blue-400" />
            {mileage}
          </div>
          <div className="flex items-center ml-16">
            <FaCog className="mr-2 text-blue-400" />
            {transmission}
          </div>
        </div>
        <hr className="text-gray-300 text-xl mt-6" />
        <div className="mt-2 flex justify-between items-center p-2">
          <p className="text-2xl text-gray-800">{price} </p>
          <small className="text-gray-500 mr-8 mt-1">/month</small>
          <div className="flex items-center gap-4">
            <Link to="#" className="bg-blue-200 p-2 rounded-2xl shadow-md hover:bg-red-200 transition duration-300 flex items-center justify-center">
              <CiHeart className="text-blue-700 text-2xl transition-all duration-300" />
            </Link>
            <button
              onClick={handleRentNow}
              className="px-2 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-300 transition duration-300"
            >
              Rent now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;