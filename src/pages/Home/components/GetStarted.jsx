import React from "react";
import {
  FaUserPlus,
  FaCar,
  FaUserCheck,
  FaFileSignature,
} from "react-icons/fa";
const GetStarted = () => {
  return (
    <div className="bg-[#edf1f7] pt-10">
      <h1 className="text-3xl ml-28 text-gray-700 mt-8">
        Get started with 4 simple steps
      </h1>
      {/* Information Section */}
      <div className="flex justify-center gap-4 h-[400px] mt-8 px-26">
        {/* Info Box 1 */}
        <div className="w-[300px] h-[230px] p-6 shadow-lg rounded-2xl border-1 border-white   bg-[#edf1f7] ">
          <div className="flex flex-col items-start ">
            <FaUserPlus className="text-pink-700 bg-pink-200 p-2 rounded-xl text-4xl" />
            <h1 className="py-4 text-lg  text-gray-700">Create a profile</h1>
            <p className="text-gray-600 text-[16px]">
              Register on our platform to access a personalized car rental
              experience.
            </p>
          </div>
        </div>

        {/* Info Box 2 */}
        <div className="sm:w-[300px] sm:h-[230px] p-6 shadow-lg rounded-2xl border-1 border-white bg-[#edf1f7] ">
          <div className="flex flex-col items-start ">
            <FaCar className="text-blue-700 text-4xl bg-blue-200 p-2 rounded-xl" />
            <h1 className="py-4 text-lg  text-gray-700">
              Tell us what car you want
            </h1>
            <p className="text-gray-600 text-[16px]">
              Specify your preferred car model, rental period, and pick-up
              location.
            </p>
          </div>
        </div>

        {/* Info Box 3 */}
        <div className="sm:w-[300px] sm:h-[230px] p-6 shadow-lg rounded-2xl border-1 border-white  bg-[#edf1f7] ">
          <div className="flex flex-col items-start ">
            <FaUserCheck className="text-green-500 bg-green-200 p-2 rounded-lg text-4xl" />
            <h1 className="py-4 text-lg  text-gray-700">Match with seller</h1>
            <p className="text-gray-600">
              Our algorithm will match you with the best available car rental
              options.
            </p>
          </div>
        </div>

        {/* Info Box 4 */}
        <div className="sm:w-[300px] sm:h-[230px] p-6 shadow-lg rounded-2xl border-1 border-white  bg-[#edf1f7]">
          <div className="flex flex-col items-start ">
            <FaFileSignature className="text-purple-500 text-4xl bg-purple-200 p-2 rounded-lg" />
            <h1 className="py-4 text-lg  text-gray-700">Make a deal</h1>
            <p className="text-gray-600">
              Finalize the rental agreement with the car owner and enjoy your
              hassle-free ride.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
