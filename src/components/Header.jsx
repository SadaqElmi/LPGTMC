import React, { useEffect, useRef, useState } from "react";
import { BiUser } from "react-icons/bi";
import {
  LuBuilding2,
  LuChevronDown,
  LuLogIn,
  LuSettings,
} from "react-icons/lu";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo/logo.svg";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close the dropdown
      }
    };
    // Add event listener when the dropdown is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const [isLeft, setisLeft] = useState(false);
  const dropLeft = useRef(null);
  const toggleLeft = () => {
    setisLeft(!isLeft);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropLeft.current && !dropLeft.current.contains(event.target)) {
        setisLeft(false); // Close the dropdown
      }
    };
    // Add event listener when the dropdown is open
    if (isLeft) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLeft]);

  const [isPages, setisPages] = useState(false);
  const dropPages = useRef(null);
  const togglePages = () => {
    setisPages(!isPages);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropPages.current && !dropPages.current.contains(event.target)) {
        setisPages(false); // Close the dropdown
      }
    };
    // Add event listener when the dropdown is open
    if (isPages) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPages]);

  return (
    <>
      <header className="flex justify-around items-center p-4 bg-[#edf1f7] h-[70px] ">
        <nav>
          <img src={Logo} alt={Logo} />
        </nav>
        <div className="flex justify-around items-center gap-4">
          <Link
            to="/"
            className="text-[14px] text-[#4e5d78] font-[400] hover:text-blue-400 font-['Nunito', sans-serif]"
          >
            Home
          </Link>
          <div
            style={{ position: "relative", display: "inline-block" }}
            ref={dropdownRef}
          >
            {/* Button to toggle the dropdown */}
            <button
              onClick={toggleDropdown}
              className="p-[10px] cursor-pointer font-['Nunito', sans-serif] text-[14px] text-[#4e5d78] font-[400] flex items-center gap-1 hover:text-blue-400"
            >
              Cars
              <span>
                <LuChevronDown />
              </span>
            </button>

            {/* Dropdown list */}
            {isOpen && (
              <ul
                style={{
                  position: "absolute",
                  top: "130%",
                  left: "-50px",
                  borderRadius: "20px",
                  background: "linear-gradient(1turn, #f1f6fd 30%, #edf1f7)",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "10px",
                  margin: 0,
                  width: "150px",
                  boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.1)",
                  border: "1px solid #ffffff",
                }}
              >
                <li>
                  <Link
                    to="/"
                    className="p-[10px] cursor-pointer font-['Nunito', sans-serif] text-[14px] text-[#4e5d78] font-[400] hover:text-blue-400 "
                  >
                    Cars
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="p-[10px] cursor-pointer font-['Nunito', sans-serif] text-[14px] text-[#4e5d78] font-[400] hover:text-blue-400"
                  >
                    CarDetails
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <Link
            to="/"
            className="p-[10px] cursor-pointer font-['Nunito', sans-serif] text-[14px] text-[#4e5d78] font-[400] hover:text-blue-400"
          >
            HelpCenter
          </Link>
          <div
            style={{ position: "relative", display: "inline-block" }}
            ref={dropPages}
          >
            {/* Button to toggle the dropdown */}
            <button
              onClick={togglePages}
              className="p-[10px] cursor-pointer font-['Nunito', sans-serif] text-[14px] text-[#4e5d78] font-[400] hover:text-blue-400 flex items-center gap-1"
            >
              Pages
              <span>
                <LuChevronDown />
              </span>
            </button>
            {/* Dropdown list */}
            {isPages && (
              <ul
                style={{
                  position: "absolute",
                  top: "130%",
                  left: "-50px",
                  borderRadius: "20px",
                  background: "linear-gradient(1turn, #f1f6fd 30%, #edf1f7)",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "10px",
                  margin: 0,
                  width: "150px",
                  boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.1)",
                  border: "1px solid #ffffff",
                }}
              >
                <li>
                  <Link
                    to="/"
                    className="p-[10px] cursor-pointer font-['Nunito', sans-serif] text-[14px] text-[#4e5d78] font-[400] hover:text-blue-400"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="p-[10px] cursor-pointer font-['Nunito', sans-serif] text-[14px] text-[#4e5d78] font-[400] hover:text-blue-400"
                  >
                    Account
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="p-[10px] cursor-pointer font-['Nunito', sans-serif] text-[14px] text-[#4e5d78] font-[400] hover:text-blue-400"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="p-[10px] cursor-pointer font-['Nunito', sans-serif] text-[14px] text-[#4e5d78] font-[400] hover:text-blue-400"
                  >
                    Article
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="p-[10px] cursor-pointer font-['Nunito', sans-serif] text-[14px] text-[#4e5d78] font-[400] hover:text-blue-400"
                  >
                    Princing Plans
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="p-[10px] cursor-pointer font-['Nunito', sans-serif] text-[14px] text-[#4e5d78] font-[400] hover:text-blue-400"
                  >
                    Contacts
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="flex justify-around items-center gap-6">
          <div className="flex flex-col items-center ">
            <span className="text-[18px] font-['Nunito', sans-serif]">
              8 800 234 56 78
            </span>
            <span className="text-[10px] text-[#4e5d78]">
              {" "}
              Mom - Sat: 9:00 am - 6:00 pm
            </span>
          </div>
          <button className="bg-[#189cf4] text-white px-4 py-2 rounded-xl">
            <Link to="/">Explore cars</Link>
          </button>
          <div
            style={{ position: "relative", display: "inline-block" }}
            ref={dropLeft}
          >
            <button
              onClick={toggleLeft}
              className="p-[10px] cursor-pointer bg-white hover:text-blue-400 rounded-xl"
            >
              <BiUser className="text-[20px]" />
            </button>

            {isLeft && (
              <ul
                style={{
                  position: "absolute",
                  top: "130%",
                  left: "-50px",
                  borderRadius: "20px",
                  background: "linear-gradient(1turn, #f1f6fd 30%, #edf1f7)",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "10px",
                  margin: 0,
                  width: "150px",
                  boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.1)",
                  border: "1px solid #ffffff",
                }}
              >
                <li>
                  <Link
                    to="/"
                    className="cursor-pointer font-['Nunito', sans-serif] text-[15px] text-[#4e5d78] font-[400] hover:text-blue-400 flex items-center gap-2"
                  >
                    <BiUser />
                    <span>My Account</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="cursor-pointer font-['Nunito', sans-serif] text-[15px] text-[#4e5d78] font-[400] hover:text-blue-400 flex items-center gap-2"
                  >
                    <LuBuilding2 />
                    <span>Billing</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="cursor-pointer font-['Nunito', sans-serif] text-[15px] text-[#4e5d78] font-[400] hover:text-blue-400 flex items-center gap-2"
                  >
                    <LuSettings />
                    <span>Setting</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="cursor-pointer font-['Nunito', sans-serif] text-[15px] text-[#4e5d78] font-[400] hover:text-blue-400 flex items-center gap-2"
                  >
                    <LuLogIn />
                    <span>Sing Out</span>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
