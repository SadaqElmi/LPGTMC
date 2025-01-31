import React from 'react'
import HeroImage from "/src/Assets/images/Heroimage.png";

const Hero = () => {
  return (
    
    <div className="flex items-center justify-around p-8 bg-[#edf1f7] min-h-screen relative">
    <div className="max-w-xl ml-[65px] mb-40 ">
      <h1 className="text-5xl p-2 font-normal text-gray-700">
        THE EASY WAY TO TAKEOVER A LEASE
      </h1>
      <p className="text-lg text-gray-600 mt-8 ml-6">
        Live in New York, New Jersey, and Connecticut!
      </p>

      <div className="w-[900px] h-20 flex items-center p-4 mt-10 ml-6 bg-gray-200 border border-white shadow-xl rounded-3xl relative z-20">
  <div className="flex gap-6 w-full justify-between items-center">
    <div className=''>
      <p className="text-sm text-gray-400">Car, Model, or Brand</p>
      <p className="text-sm text-gray-600 font-semibold mt-2">What are you looking for?</p>
    </div>
    <div className="h-20 border-l-1 border-gray-300"></div>
    <div className=''>
      <p className="text-sm text-gray-400">Max. Monthly Payment</p>
      <p className="text-sm text-gray-600 font-semibold mt-2">Add an acount in?</p>
    </div>
    <div className="h-20 border-l-1 border-gray-300"></div>
    <div className=''>
      <p className="text-sm text-gray-400">Make Year</p>
      <p className="text-sm text-gray-600 font-semibold mt-2">Add aminimal make year</p>
    </div>
    <div className="flex items-center">
      <button
        type="submit"
        className="px-4 py-2 w-[150px] h-[50px] bg-blue-600 text-white text-center rounded-2xl hover:bg-blue-400 transition duration-300"
      >
      SEARCH
      </button>
    </div>
  </div>
</div>
    </div>
    <div className="relative w-[700px]">
      <img
        src={HeroImage}
        alt="Car"
        className=" rounded-3xl w-[100%] mb-16 h-[550px] shadow-lg z-10 bg-black opacity-200"
      />
    </div>
  </div>
);
}

export default Hero