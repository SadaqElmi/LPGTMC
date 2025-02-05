import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FaTimes } from "react-icons/fa";

const RentalCarModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "221B Baker St, Marylebone, London",
    paymentMethod: "Visa",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    onClose(); // Close the modal after submission
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0  flex items-center justify-center">
      <div className=" bg-opacity-50 absolute inset-0"></div>

      <div className="bg-white rounded-3xl p-6 w-[400px]  shadow-lg relative">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Rent Car</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full mt-1 p-2 border rounded-lg"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="090 123 45 67"
              className="w-full mt-1 p-2 border rounded-lg"
              required
            />
          </div>

          {/* Car Delivery Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Car Delivery Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg bg-gray-100"
              readOnly
            />
          </div>

          {/* Info Text */}
          <p className="text-gray-500 text-sm">
            You can spend money from your account on the renewal of the connected packages, or on the purchase of goods on our website.
          </p>

          {/* Payment Method */}
          <fieldset className="space-y-2">
            <legend className="text-sm font-medium text-gray-700">Payment Method</legend>
            <div className="flex flex-col space-y-1">
              {["Visa", "Mastercard", "Paypal"].map((method) => (
                <label key={method} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method}
                    checked={formData.paymentMethod === method}
                    onChange={handleChange}
                    className="accent-blue-500"
                  />
                  <span>{method}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* Proceed Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
          >
            Proceed
          </button>
        </form>
      </div>
    </Dialog>
  );
};

export default RentalCarModal;