import React, { useEffect, useRef, useState } from "react";
import { BiUser } from "react-icons/bi";
import { LuBuilding2, LuLogIn, LuSettings } from "react-icons/lu";
import { Link } from "react-router-dom";

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
      <header className="flex justify-around items-center p-4 bg-gray-100 ">
        <nav>
          <div className="Logo">Waxdex</div>
        </nav>
        <div className="flex justify-around items-center gap-4">
          <Link to="/">Home</Link>
          <div
            style={{ position: "relative", display: "inline-block" }}
            ref={dropdownRef}
          >
            {/* Button to toggle the dropdown */}
            <button
              onClick={toggleDropdown}
              style={{ padding: "10px", cursor: "pointer" }}
            >
              Cars
            </button>

            {/* Dropdown list */}
            {isOpen && (
              <ul
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #ccc",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  width: "150px",
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                }}
              >
                <li style={{ padding: "10px", cursor: "pointer" }}>
                  <Link to="/">Cars</Link>
                </li>
                <li style={{ padding: "10px", cursor: "pointer" }}>
                  <Link to="/">CarDetails</Link>
                </li>
              </ul>
            )}
          </div>
          <Link to="/">HelpCenter</Link>
          <div
            style={{ position: "relative", display: "inline-block" }}
            ref={dropPages}
          >
            {/* Button to toggle the dropdown */}
            <button
              onClick={togglePages}
              style={{ padding: "10px", cursor: "pointer" }}
            >
              Pages
            </button>

            {/* Dropdown list */}
            {isPages && (
              <ul
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #ccc",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  width: "150px",
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                }}
              >
                <li style={{ padding: "10px", cursor: "pointer" }}>
                  <Link to="/">About Us </Link>
                </li>
                <li style={{ padding: "10px", cursor: "pointer" }}>
                  <Link to="/">Account </Link>
                </li>
                <li style={{ padding: "10px", cursor: "pointer" }}>
                  <Link to="/">Blogs</Link>
                </li>
                <li style={{ padding: "10px", cursor: "pointer" }}>
                  <Link to="/">Article</Link>
                </li>
                <li style={{ padding: "10px", cursor: "pointer" }}>
                  <Link to="/">Princing Plans </Link>
                </li>
                <li style={{ padding: "10px", cursor: "pointer" }}>
                  <Link to="/">Contacts </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="flex justify-around items-center gap-6">
          <div className="flex flex-col items-center ">
            <span className="text-[15px]">8 800 234 56 78</span>
            <span className="text-[10px]"> Mom - Sat: 9:00 am - 6:00 pm</span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-xl">
            <Link to="/">Cars</Link>{" "}
          </button>
          <div
            style={{ position: "relative", display: "inline-block" }}
            ref={dropLeft}
          >
            <button
              onClick={toggleLeft}
              className="p-[10px] cursor-pointer bg-white text-blue-400 rounded-xl"
            >
              <BiUser className="text-[20px]" />
            </button>

            {isLeft && (
              <ul
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #ccc",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  width: "150px",
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                }}
              >
                <li style={{ padding: "10px", cursor: "pointer" }}>
                  <Link to="/" className="flex items-center gap-2">
                    <BiUser />
                    <span>My Account</span>
                  </Link>
                </li>
                <li style={{ padding: "10px", cursor: "pointer" }}>
                  <Link to="/" className="flex items-center gap-2">
                    <LuBuilding2 />
                    <span>Billing</span>
                  </Link>
                </li>
                <li style={{ padding: "10px", cursor: "pointer" }}>
                  <Link to="/" className="flex items-center gap-2">
                    <LuSettings />
                    <span>Setting</span>
                  </Link>
                </li>
                <li style={{ padding: "10px", cursor: "pointer" }}>
                  <Link to="/" className="flex items-center gap-2">
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
