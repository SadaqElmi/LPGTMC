import React, { useState } from "react";
import { Blogs } from "../../../data/Blogs_data";

import {
  FaAngleDoubleRight,
  FaRegCalendarAlt,
  FaRegComment,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const categories = ["All News", "car", "company", "repair", "useful"];

function Blog() {
  const [activeCategory, setActiveCategory] = useState("All News");
  const [visiblePosts, setVisiblePosts] = useState({
    "All News": 6,

    car: 3,
    company: 3,
    repair: 3,
    useful: 3,
  });

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleLoadMore = (category) => {
    const totalPosts = Blogs.filter(
      (post) =>
        activeCategory === "All News" || post.category === activeCategory
    ).length;

    setVisiblePosts((prev) => ({
      ...prev,
      [category]: totalPosts,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <div className="flex items-center gap-2 text-gray-800 text-lg mb-6">
        <NavLink to="/" className="hover:text-blue-600">
          Home
        </NavLink>
        <FaAngleDoubleRight className="text-gray-500" />
        <p className="font-semibold">Blog</p>
      </div>

      <h1 className="text-4xl  text-gray-900 mb-6">Our Blog</h1>

      <div className="flex gap-6 border-b pb-3 text-gray-600">
        {categories.map((category) => (
          <button
            key={category}
            className={`pb-2 text-lg font-medium ${
              activeCategory === category
                ? "border-b-2 border-blue-500 text-blue-600 cursor-pointer"
                : "hover:text-blue-600 cursor-pointer"
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-start gap-6 mt-6">
        {Blogs.filter(
          (post) =>
            activeCategory === "All News" || post.category === activeCategory
        )
          .slice(0, visiblePosts[activeCategory])
          .map((post) => (
            <div
              key={post.id}
              className="w-full sm:w-[48%] lg:w-[31%] bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-lg"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.description}
                  className="w-full h-60 object-cover rounded-t-xl"
                />

                <span className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              <div className="p-5">
                <NavLink
                  to="#"
                  className="hover:text-blue-700 text-gray-800 text-lg font-semibold block leading-snug"
                >
                  {post.description}
                </NavLink>

                <div className="flex justify-between items-center mt-3 text-gray-500 text-sm">
                  <div className="flex items-center gap-2">
                    <FaRegCalendarAlt className="text-lg" />
                    <p>{post.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRegComment className="text-lg" />
                    <p>{Math.floor(Math.random() * 100)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {visiblePosts[activeCategory] <
        Blogs.filter(
          (post) =>
            activeCategory === "All News" || post.category === activeCategory
        ).length && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => handleLoadMore(activeCategory)}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Blog;
