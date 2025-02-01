


import React, { useState } from "react";
import { Blogs } from "../../../data/Blogs_data"; // ✅ Import mock data
import {
  FaAngleDoubleRight,
  FaRegCalendarAlt,
  FaRegComment,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

// ✅ Blog Categories
const categories = ["All News", "car", "company", "repair", "useful"];

function Blog() {
  const [activeCategory, setActiveCategory] = useState("All News");

  // ✅ Filter Blogs Based on Category
  const filteredBlogs =
    activeCategory === "All News"
      ? Blogs.slice(0, 6) // Show first 6 blogs for "All News"
      : Blogs.filter((post) => post.category === activeCategory).slice(0, 3); // Show 3 blogs for others

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-gray-800 text-lg mb-6">
        <NavLink to="/" className="hover:text-blue-600">
          Home
        </NavLink>
        <FaAngleDoubleRight className="text-gray-500" />
        <p className="font-semibold">Blog</p>
      </div>

      {/* Page Title */}
      <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Blog</h1>

      {/* Category Tabs */}
      <div className="flex gap-6 border-b pb-3 text-gray-600">
        {categories.map((category) => (
          <button
            key={category}
            className={`pb-2 text-lg ${
              activeCategory === category
                ? "border-b-2 border-blue-500 text-blue-600"
                : "hover:text-blue-600"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Blog Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {filteredBlogs.map((post) => (
          <div
            key={post.id}
            className="w-full sm:w-[48%] lg:w-[32%] shadow-lg rounded-xl overflow-hidden bg-white transition-transform transform hover:scale-105"
          >
            {/* Blog Image */}
            <div className="relative">
              <img
                src={post.image}
                alt={post.description}
                className="w-full h-60 object-cover"
              />
              {/* Category Badge */}
              <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>

            {/* Blog Content */}
            <div className="p-5">
              <NavLink
                to="#"
                className="hover:text-blue-700 text-gray-800 text-xl font-semibold block"
              >
                {post.description}
              </NavLink>

              {/* Blog Meta Info */}
              <div className="flex justify-between items-center mt-3 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <FaRegCalendarAlt className="text-lg" />
                  <p>{post.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegComment className="text-lg" />
                  <p>{Math.floor(Math.random() * 100)}</p> {/* Random Views */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
