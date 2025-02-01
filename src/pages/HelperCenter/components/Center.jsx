// components/HelpCenter.js
import React, { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";

const Center = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How old do you have to be to rent a car?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      question: "What’s required when renting a car?",
      answer:
        "You usually need a valid driver’s license, a credit card, and sometimes an international driving permit.",
    },
    {
      question: "Can I rent a car without a credit card?",
      answer:
        "Some rental companies accept debit cards, but they may require additional documents and a higher deposit.",
    },
    {
      question: "How do insurance coverages work for rental cars?",
      answer:
        "Rental car insurance typically covers damage, theft, and liability. Check with your provider for details.",
    },
    {
      question: "What are the limits for excess insurance?",
      answer:
        "Excess insurance reduces the amount you pay in case of damage, but policies vary by company.",
    },
    {
      question: "What’s included in the rental fee?",
      answer:
        "The rental fee usually includes basic insurance, taxes, and mileage, but extra fees may apply for additional services.",
    },
    {
      question: "What is an International Driving Permit and do I need one?",
      answer:
        "An International Driving Permit (IDP) translates your license into multiple languages and is required in some countries.",
    },
    {
      question: "What should I do in case of extra charges?",
      answer:
        "Review your rental agreement, check for hidden fees, and contact customer support if needed.",
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* FAQ Grid Layout with Smooth Transitions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#edf1f7]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-[15px] shadow-md hover-[0 -4px 6px rgba(0, 0, 0, 0.1] hover:shadow-md transition-all bg-[#edf1f7] border-none p-3 "
          >
            {/* Clickable Question */}
            <div
              className="p-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-[#33334F] font-sans text-base p-custom text-[16px]">
                {faq.question}
              </span>

              {/* Plus/Minus Icon with Adjusted Border Radius */}
              <span className="w-9 h-9 flex items-center justify-center bg-[#189cf4] text-white rounded-xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}">
                {openIndex === index ? (
                  <FiMinus />
                ) : (
                  <IoIosAdd className="text-2xl " />
                )}
              </span>
            </div>

            {/* Answer Section with Smooth Height Transition */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"
              }`}
            >
              <p className="text-gray-600 text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Center;
