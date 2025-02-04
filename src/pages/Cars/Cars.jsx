import React from "react";
import { NavLink } from "react-router-dom";
import ExploreCars from './components/ExploreCars.jsx';

const Cars = () => {
  return (
    <div>
      <div className="py-4 m-auto max-w-7xl">
        <p className="text-gray-600 ml-4">
          <NavLink to="/" className="text-blue-500 hover:text-blue-300">Home</NavLink> » Explore cars
        </p>
        <h1 className="text-gray-600 text-3xl ml-4 mt-16">Choose the right lease</h1>
        <ExploreCars />
      </div>
    </div>
  );
};

export default Cars;