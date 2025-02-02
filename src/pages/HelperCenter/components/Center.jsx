import React, { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";

const Center = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [openIndexTwo, setOpenIndexTwo] = useState(null);

  const toggleFAQTwo = (index) => {
    setOpenIndexTwo(openIndexTwo === index ? null : index);
  };

  const faqs = [
    {
      id: 1,
      question: "How old do you have to be to rent a car?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },

    {
      id: 2,
      question: "Can I rent a car without a credit card?",
      answer:
        "Some rental companies accept debit cards, but they may require additional documents and a higher deposit.",
    },

    {
      id: 3,
      question: "What are the limits for excess insurance?",
      answer:
        "Excess insurance reduces the amount you pay in case of damage, but policies vary by company.",
    },

    {
      id: 4,
      question: "What is an International Driving Permit and do I need one?",
      answer:
        "An International Driving Permit (IDP) translates your license into multiple languages and is required in some countries.",
    },
  ];

  const faqstwo = [
    {
      id: 1,
      question: "What’s required when renting a car?",
      answer:
        "You usually need a valid driver’s license, a credit card, and sometimes an international driving permit.",
    },
    {
      id: 2,
      question: "How do insurance coverages work for rental cars?",
      answer:
        "Rental car insurance typically covers damage, theft, and liability. Check with your provider for details.",
    },
    {
      id: 3,
      question: "What’s included in the rental fee?",
      answer:
        "The rental fee usually includes basic insurance, taxes, and mileage, but extra fees may apply for additional services.",
    },
    {
      id: 4,
      question: "What should I do in case of extra charges?",
      answer:
        "Review your rental agreement, check for hidden fees, and contact customer support if needed.",
    },
  ];

  return (
    <div className="p-6 flex justify-center gap-10">
      <div className="flex flex-wrap gap-4 bg-[#edf1f7] w-[500px]">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className="border-[1px] border-[#ffffff] border-solid rounded-[15px] shadow-md hover:[0 -4px 6px rgba(0, 0, 0, 0.1)] hover:shadow-md transition-all bg-[#edf1f7] border-none p-1 w-[500px]"
          >
            <div
              className="p-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-[#33334F] font-sans text-base p-custom text-[16px]">
                {faq.question}
              </span>
              <span
                className={`w-9 h-9 flex items-center justify-center bg-[#189cf4] text-white rounded-xl`}
              >
                {openIndex === index ? (
                  <FiMinus />
                ) : (
                  <IoIosAdd className="text-2xl" />
                )}
              </span>
            </div>
            {openIndex === index && (
              <p className="p-4 text-gray-600 text-base border-gray-300 border-t-[1px] pt-5">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 bg-[#edf1f7] w-[500px]">
        {faqstwo.map((faq, index) => (
          <div
            key={faq.id}
            className="border-[1px] border-[#ffffff] border-solid rounded-[15px] shadow-md hover:[0 -4px 6px rgba(0, 0, 0, 0.1)] hover:shadow-md transition-all bg-[#edf1f7] border-none p-1 w-[500px]"
          >
            <div
              className="p-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQTwo(index)}
            >
              <span className="text-[#33334F] font-sans text-base p-custom text-[16px]">
                {faq.question}
              </span>
              <span
                className={`w-9 h-9 flex items-center justify-center bg-[#189cf4] text-white rounded-xl`}
              >
                {openIndexTwo === index ? (
                  <FiMinus />
                ) : (
                  <IoIosAdd className="text-2xl" />
                )}
              </span>
            </div>
            {openIndexTwo === index && (
              <p className="p-4 text-gray-600 text-base border-gray-300 border-t-[1px] pt-5">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Center;
