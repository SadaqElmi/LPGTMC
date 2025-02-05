import React from 'react';
import { Link } from 'react-router-dom';
import { FaShareAlt, FaTwitter, FaLink, FaUser, FaGasPump, FaCar, FaCog } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';

const OffersCard = ({ price, name, capacity, gas, speed, transmission, onRentNowClick }) => {
  return (
    <div className="bg-inhiret rounded-2xl  border border-white  shadow-md overflow-hidden mt-16 w-[400px]">
      <div className="p-4">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Offer</div>
        <div className="mt-4 flex justify-between items-center">
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">{price} / month</h1>
          <Link to="#" className="bg-blue-200 p-2 rounded-2xl shadow-md hover:bg-red-200 transition duration-300 flex items-center justify-center">
            <CiHeart className="text-blue-700 text-2xl transition-all duration-300" />
          </Link>
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-300 transition duration-300"
            onClick={onRentNowClick}
          >
            Rent now
          </button>
        </div>
        
        <div className="mt-4">
          <h2 className="text-gray-700 font-semibold">Lease terms</h2>
          <div className="flex justify-between">
            <p className="text-gray-500">Monthly payment</p>
            <p className="text-gray-900">{price}</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between">
            <p className="text-gray-500">Cash incentive</p>
            <p className="text-gray-900">To be provided by seller</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between">
            <p className="text-gray-500">Transfer fee</p>
            <p className="text-gray-900">To be provided by seller</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between">
            <p className="text-gray-500">Disposition fee</p>
            <p className="text-gray-900">To be provided by seller</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between">
            <p className="text-gray-500">Leasing company</p>
            <p className="text-gray-900">{name}</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between">
            <p className="text-gray-500">Lease end date</p>
            <p className="text-gray-900">01 Dec 2022</p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="mt-4">
          <h2 className="text-gray-700 font-semibold">Car details</h2>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FaUser className="mr-2 text-blue-400" />
              <p className="text-gray-500">{capacity} People</p>
            </div>
            <div className="flex items-center mr-24">
              <FaGasPump className="mr-2 text-blue-400" />
              <p className="text-gray-500">{gas}</p>
            </div>
          </div>
          
          <div className="flex justify-between items-center p-2">
            <div className="flex items-center">
              <FaCar className="mr-2 text-blue-400" />
              <p className="text-gray-500">{speed}</p>
            </div>
            <div className="flex items-center mr-18">
              <FaCog className="mr-2 text-blue-400" />
              <p className="text-gray-500">{transmission}</p>
            </div>
          </div>
        </div>
       
        <h2 className="text-gray-500 mt-2">Share</h2>
        <div className="mt-4 flex items-center gap-4">
          <div className="bg-blue-900 p-2 rounded-2xl">
            <Link to="#" className="text-white hover:text-blue-500 transition duration-300 flex items-center">
              <FaShareAlt className="text-xl" />
              <span className="ml-2 text-xs text-blue-300">Share</span>
            </Link>
          </div>
          <div className="bg-blue-500 p-2 rounded-2xl">
            <Link to="#" className="text-white hover:text-blue-500 transition duration-300 flex items-center">
              <FaTwitter className="text-xl" />
              <span className="ml-2 text-xs text-white">Tweeter</span>
            </Link>
          </div>
          <div className="bg-gray-700 p-2  rounded-2xl">
            <Link to="#" className="text-white hover:text-blue-500 transition duration-300 flex items-center">
              <FaLink className="text-xl" />
              <span className="ml-2 text-xs text-white">Link</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersCard;