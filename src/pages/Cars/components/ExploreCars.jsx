import React, { useState } from "react";
import CarsList from './CarsList';
import { Cars } from "../../../data/Car_data.js"; // Importing car data

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
        <h1 className="text-gray-700 text-3xl ml-4 mt-8">Choose the right lease</h1>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filter Sidebar (Left) */}
        <div className="md:col-span-1 bg-inhiret border border-white rounded-2xl shadow-md p-4 sticky top-0 h-screen overflow-y-auto">
          {/* Filter Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg text-gray-500">Filters</h3>
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

export default ExploreCars;