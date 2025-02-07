import React, { useEffect, useRef, useState } from "react";
import { BiSearch, BiUser } from "react-icons/bi";
import {
  LuBuilding2,
  LuChevronDown,
  LuLogIn,
  LuSettings,
} from "react-icons/lu";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo/logo.svg";

const Header = () => {
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
    if (isLeft) {
      document.addEventListener("mousedown", handleClickOutside);
    }
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
    if (isPages) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPages]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Implement search functionality
    console.log("Searching for:", searchQuery);
    // Redirect to search results page or filter cars based on searchQuery
  };

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
          <div>
            <button className="p-[10px] cursor-pointer font-['Nunito', sans-serif] text-[14px] text-[#4e5d78] font-[400] flex items-center gap-1 hover:text-blue-400">
              <Link to="/cars">Explore Cars</Link>
            </button>
          </div>
          <Link
            to="/HelperPage"
            className="p-[10px] cursor-pointer font-['Nunito', sans-serif] text-[14px] text-[#4e5d78] font-[400] hover:text-blue-400"
          >
            HelpCenter
          </Link>
          <div
            style={{ position: "relative", display: "inline-block" }}
            ref={dropPages}
          >
            <button
              onClick={togglePages}
              className="p-[10px] cursor-pointer font-['Nunito', sans-serif] text-[14px] text-[#4e5d78] font-[400] hover:text-blue-400 flex items-center gap-1"
            >
              Pages
              <span>
                <LuChevronDown />
              </span>
            </button>
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
                  zIndex: 9999,
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
                    to="/Blogs"
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
                    Pricing Plans
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
              Mom - Sat: 9:00 am - 6:00 pm
            </span>
          </div>
          <button className="bg-[#189cf4] text-white px-4 py-2 rounded-xl">
            <Link to="/cars">Explore cars</Link>
          </button>
          {/* Search Input and Button */}
          <div className="flex items-center relative overflow-hidden ">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cars..."
              className="p-2 border-2 border-blue-500 outline-none rounded-l-md rounded-r-md overflow-hidden"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white right-[1px] px-2 rounded py-4 absolute rounded-r-xl"
            >
              <BiSearch className="text-[20px]" />
            </button>
          </div>
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
                  zIndex: 9999,
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
                    <span>Sign Out</span>
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
