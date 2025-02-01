// components/Header.js
import React from "react";
import { BiChevronsRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <div>
        {/* Navigation Bar */}

        <div className="p-6 max-w-7xl mx-auto">
          <nav
            style={{
              fontSize: "14px",
              color: "#666",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
              Home
            </Link>
            <BiChevronsRight style={{ margin: "0 5px" }} />
            <span style={{ color: "gray" }}>Frequently Asked Questions</span>
          </nav>
        </div>
      </div>

      {/* Help Center Title & Description */}
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-4xl text-gray-800 mb-3 text-center lg:text-left">
          Help Center
        </h1>
        <p className="text-gray-600 text-[16px] leading-relaxed text-center lg:text-left mr-10">
          Here you will find answers to frequently asked questions about our
          company and services. If you don’t find the answer to your question,
          please contact our customer support and we’ll be happy to assist you.{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            Ask a question.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Header;
