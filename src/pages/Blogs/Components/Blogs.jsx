import React, { useState } from "react";
import {
  FaAngleDoubleRight,
  FaRegCalendarAlt,
  FaRegComment,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

// ✅ Import images correctly from `src/Assets/`
import image1 from "../../../Assets/1.jpg";
import image8 from "../../../Assets/8.jpg";
import image3 from "../../../Assets/3.jpg";
import image4 from "../../../Assets/4.jpg";
import image5 from "../../../Assets/5.jpg";
import image6 from "../../../Assets/6.jpg";
import image7 from "../../../Assets/7.jpg";
import image9 from "../../../Assets/11.jpg";
import image12 from "../../../Assets/12.jpg";
import image11 from "../../../Assets/11.jpg";
import image22 from "../../../Assets/2.jpg";
import image13 from "../../../Assets/13.jpg";

// ✅ Blog Post Data
const blogPosts = [
  {
    id: 1,
    category: "Cars",
    title: "What’s required when renting a car?",
    date: "Jan 14, 2022",
    views: 44,
    image: image8,
  },
  {
    id: 2,
    category: "Cars",
    title: "Statistics showed which average age of cars",
    date: "Jan 12, 2022",
    views: 38,
    image: image3,
  },
  {
    id: 3,
    category: "Company",
    title: "Opening of new offices throughout the country",
    date: "Jan 11, 2022",
    views: 92,
    image: image1,
    //     corect
  },
  {
    id: 4,
    category: "Cars",
    title: "Best electric cars of 2023",
    date: "Jan 10, 2022",
    views: 56,
    image: image12,
  },
  {
    id: 5,
    category: "Useful",
    title: "Tips for first-time car renters",
    date: "Jan 8, 2022",
    views: 27,
    image: image13,
  },
  {
    id: 6,
    category: "Company",
    title: "Upcoming trends in automotive industry",
    date: "Jan 6, 2022",
    views: 77,
    image: image5,
    //     corect
  },
  {
    id: 7,
    category: "Cars",
    title: "The future of self-driving cars",
    date: "Feb 2, 2022",
    views: 63,
    image: image12,
  },
  {
    id: 8,
    category: "Company",
    title: "Company launches new service centers",
    date: "Feb 5, 2022",
    views: 80,
    image: image22,
  },
  {
    id: 9,
    category: "Useful",
    title: "How to maintain your car efficiently",
    date: "Feb 10, 2022",
    views: 54,
    image: image11,
  },
  {
    id: 10,
    category: "Cars",
    title: "How electric cars are changing the industry",
    date: "Feb 15, 2022",
    views: 45,
    image: image3,
  },
  {
    id: 11,
    category: "Company",
    title: "Expanding business in international markets",
    date: "Feb 20, 20223",
    views: 70,
    image: image12,
  },
  {
    id: 12,
    category: "Useful",
    title: "Electric streering reserve: waiting vs reality",
    date: "Feb 25, 2022",
    views: 40,
    image: image7,
  },
];

const categories = ["All News", "Cars", "Company", "Useful"];

function Blog() {
  const [activeCategory, setActiveCategory] = useState("All News");

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
            {category}
          </button>
        ))}
      </div>

      {/* Blog Cards Section */}
      {activeCategory === "All News" ? (
        // ✅ "All News" - Show only first 6 posts
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {blogPosts.slice(0, 6).map((post) => (
            <div
              key={post.id}
              className="w-full sm:w-[48%] lg:w-[32%] shadow-lg rounded-xl overflow-hidden bg-white transition-transform transform hover:scale-105"
            >
              {/* Blog Image */}
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
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
                  {post.title}
                </NavLink>

                {/* Blog Meta Info */}
                <div className="flex justify-between items-center mt-3 text-gray-500 text-sm">
                  <div className="flex items-center gap-2">
                    <FaRegCalendarAlt className="text-lg" />
                    <p>{post.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRegComment className="text-lg" />
                    <p>{post.views}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // ✅ "Cars", "Company", "Useful" - Show exactly 3 posts
        <div className="flex justify-center gap-6 mt-6">
          {(() => {
            let categoryPosts = blogPosts.filter(
              (post) => post.category === activeCategory
            );

            // ✅ Ensure exactly 3 posts by duplicating existing ones if fewer than 3 exist
            while (categoryPosts.length < 3) {
              categoryPosts.push({
                ...categoryPosts[categoryPosts.length % categoryPosts.length],
                id: `duplicate-${categoryPosts.length}`,
              });
            }

            return categoryPosts.slice(0, 3).map((post) => (
              <div
                key={post.id}
                className="w-full sm:w-[48%] lg:w-[32%] shadow-lg rounded-xl overflow-hidden bg-white transition-transform transform hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
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
                    {post.title}
                  </NavLink>

                  {/* Blog Meta Info */}
                  <div className="flex justify-between items-center mt-3 text-gray-500 text-sm">
                    <div className="flex items-center gap-2">
                      <FaRegCalendarAlt className="text-lg" />
                      <p>{post.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaRegComment className="text-lg" />
                      <p>{post.views}</p>
                    </div>
                  </div>
                </div>
              </div>
            ));
          })()}
        </div>
      )}
    </div>
  );
}

export default Blog;
