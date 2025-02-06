import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Cars } from "../../../data/Car_data"; // Ensure this path is correct
import CarCard from "./CarCard";

const FeaturedCars = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-2 bg-[#edf1f7]">
        <h2 className="text-3xl text-gray-900 ml-28">Featured Cars</h2>
        <div className="mr-28 flex items-center gap-4">
          <Link
            to="/cars"
            className="text-gray-600 flex items-center gap-1 cursor-pointer hover:text-gray-800"
          >
            Explore cars
            <FaArrowRight className="ml-2 text-gray-500 hover:text-blue-400 transition-all duration-200" />
          </Link>
        </div>
      </div>
      <div className="mt-8 px-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Cars.slice(0, 6).map((car, index) => (
            <CarCard
              key={index}
              id={car.id}
              carImages={car.carImages}
              title={car.name}
              year={car.year}
              capacity={car.capacity}
              hybrid={car.gas}
              mileage={car.speed}
              transmission={car.transmission}
              price={car.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;