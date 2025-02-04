import React, { useState } from "react";
import { FaUser, FaCar, FaCog, FaGasPump } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Cars } from "../../../data/Car_data.js"; // Importing car data
import { CiHeart } from "react-icons/ci";

const ExploreCars = () => {
  const [filters, setFilters] = useState({
    keyword: "",
    brand: "",
    gas: "",
    transmission: "",
  });

  const [appliedFilters, setAppliedFilters] = useState(filters);

  // Handle filter change
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Apply filters
  const applyFilters = () => {
    setAppliedFilters(filters);
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({ keyword: "", brand: "", gas: "", transmission: "" });
    setAppliedFilters({ keyword: "", brand: "", gas: "", transmission: "" });
  };

  // Get unique values for filters
  const brands = [...new Set(Cars.map((car) => car.brand))];
  const fuelTypes = [...new Set(Cars.map((car) => car.gas))];
  const transmissions = [...new Set(Cars.map((car) => car.transmission))];

  // Filtered cars
  const filteredCars = Cars.filter(
    (car) =>
      (appliedFilters.keyword === "" ||
        car.name.toLowerCase().includes(appliedFilters.keyword.toLowerCase())) &&
      Object.entries(appliedFilters).every(
        ([key, value]) =>
          key === "keyword" || value === "" || car[key].toString() === value
      )
  );

  return (
    <>
      <div>
        <h1 className="text-gray-600 text-3xl ml-4 mt-8">Choose the right lease</h1>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filter Sidebar (Left) */}
        <div className="md:col-span-1 bg-inhiret border border-white rounded-2xl shadow-md p-4 sticky top-0 h-screen overflow-y-auto">
          {/* Filter Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Filter</h2>
            <button
              onClick={clearFilters}
              className="text-blue-500 hover:text-red-600 transition"
            >
              Clear All
            </button>
          </div>

          {/* Keyword Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Keyword</label>
            <input
              type="text"
              name="keyword"
              value={filters.keyword}
              onChange={handleChange}
              placeholder="Search car name..."
              className="w-full p-2 rounded-2xl bg-white outline-none"
            />
          </div>

          {/* Brand Filter */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Brand</label>
            <select
              name="brand"
              className="w-full p-2 rounded-2xl bg-white outline-none"
              onChange={handleChange}
              value={filters.brand}
            >
              <option value="">All Brands</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          {/* Transmission Filter (Radio Buttons) */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Transmission</label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="transmission"
                  value=""
                  checked={filters.transmission === ""}
                  onChange={handleChange}
                  className="custom-radio"
                />
                <span className="ml-2">All</span>
              </label>
              {transmissions.map((trans) => (
                <label key={trans} className="flex items-center">
                  <input
                    type="radio"
                    name="transmission"
                    value={trans}
                    checked={filters.transmission === trans}
                    onChange={handleChange}
                    className="custom-radio"
                  />
                  <span className="ml-2">{trans}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Fuel Type Filter (Radio Buttons) */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Fuel Type</label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gas"
                  value=""
                  checked={filters.gas === ""}
                  onChange={handleChange}
                  className="custom-radio"
                />
                <span className="ml-2">All</span>
              </label>
              {fuelTypes.map((gas) => (
                <label key={gas} className="flex items-center">
                  <input
                    type="radio"
                    name="gas"
                    value={gas}
                    checked={filters.gas === gas}
                    onChange={handleChange}
                    className="custom-radio"
                  />
                  <span className="ml-2">{gas}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Apply Filter Button */}
          <button
            onClick={applyFilters}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-2xl hover:bg-blue-400 transition"
          >
            APPLY FILTER
          </button>
        </div>

        {/* Car Display (Right) */}
        <CarsList cars={filteredCars} />
      </div>
    </>
  );
};

const CarsList = ({ cars }) => {
  const [visibleCars, setVisibleCars] = useState(6); // Show first 6 cars initially

  const handleLoadMore = () => {
    setVisibleCars((prev) => prev + 6); // Load 6 more cars on each click
  };

  return (
    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
      {cars.length > 0 ? (
        cars.slice(0, visibleCars).map((car) => (
          <div key={car.id} className="bg-inhiret border border-white rounded-2xl shadow-md p-4 h-[400px]">
            <img src={car.carImages[0]} alt={car.name} className="w-full h-40 object-cover rounded-lg" />
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
                <button className="px-2 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-300 transition duration-300">
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

export default ExploreCars;