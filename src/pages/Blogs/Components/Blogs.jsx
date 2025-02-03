// import React, { useState } from "react";
// import { Blogs } from "../../../data/Blogs_data";

// import {
//   FaAngleDoubleRight,
//   FaRegCalendarAlt,
//   FaRegComment,
// } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// const categories = ["All News", "car", "company", "repair", "useful"];

// function Blog() {
//   const [activeCategory, setActiveCategory] = useState("All News");
//   const [visiblePosts, setVisiblePosts] = useState({
//     "All News": 6,
//     car: 3,
//     company: 3,
//     repair: 3,
//     useful: 3,
//   });

//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const handleCategoryChange = (category) => {
//     setIsTransitioning(true);
//     setTimeout(() => {
//       setActiveCategory(category);
//       setIsTransitioning(false);
//     }, 300);
//   };

//   const handleLoadMore = (category) => {
//     const totalPosts = Blogs.filter(
//       (post) =>
//         activeCategory === "All News" || post.category === activeCategory
//     ).length;

//     setVisiblePosts((prev) => ({
//       ...prev,
//       [category]: totalPosts,
//     }));
//   };

//   return (
//     <div className="max-w-7xl mx-auto py-10 px-6">
//       <div className="flex items-center gap-2 text-gray-800 text-[12px] mb-6">
//         <NavLink to="/" className="hover:text-blue-600 transition duration-300">
//           Home
//         </NavLink>
//         <FaAngleDoubleRight className="text-gray-500" />
//         <p className="">Blog</p>
//       </div>

//       <h1 className="text-3xl text-gray-800 mb-6">Our Blog</h1>

//       <div className="flex gap-6 border-b pb-3 text-gray-500 ">
//         {categories.map((category) => (
//           <button
//             key={category}
//             className={`pb-2  text-[14px] text-gray-500 font-medium transition-all duration-500 ${
//               activeCategory === category
//                 ? "border-b-2 border-blue-500 text-blue-900 cursor-pointer"
//                 : "hover:text-blue-600"
//             }`}
//             onClick={() => handleCategoryChange(category)}
//           >
//             {category.charAt(0).toUpperCase() + category.slice(1)}
//           </button>
//         ))}
//       </div>

//       <div
//         className={`flex flex-wrap justify-start gap-6 mt-6 transition-opacity duration-500 ${
//           isTransitioning ? "opacity-0" : "opacity-100"
//         }`}
//       >
//         {Blogs.filter(
//           (post) =>
//             activeCategory === "All News" || post.category === activeCategory
//         )
//           .slice(0, visiblePosts[activeCategory])
//           .map((post) => (
//             <div
//               key={post.id}
//               className="w-full sm:w-[48%] lg:w-[31%] bg-white shadow-md rounded-xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:scale-[1.02]"
//             >
//               <div className="relative">
//                 <img
//                   src={post.image}
//                   alt={post.description}
//                   className="w-full h-60 object-cover rounded-t-xl"
//                 />

//                 <span className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full transition-all duration-300 hover:scale-110">
//                   {post.category}
//                 </span>
//               </div>

//               <div className="p-5">
//                 <NavLink
//                   to="#"
//                   className="hover:text-blue-700 text-gray-800 text-md transition-all duration-300"
//                 >
//                   {post.description}
//                 </NavLink>

//                 <div className="flex justify-between items-center mt-3 text-gray-500 text-sm">
//                   <div className="flex items-center gap-2">
//                     <FaRegCalendarAlt className="text-lg" />
//                     <p>{post.date}</p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FaRegComment className="text-lg" />
//                     <p>{Math.floor(Math.random() * 100)}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>

//       {visiblePosts[activeCategory] <
//         Blogs.filter(
//           (post) =>
//             activeCategory === "All News" || post.category === activeCategory
//         ).length && (
//         <div className="mt-6 flex justify-center">
//           <button
//             onClick={() => handleLoadMore(activeCategory)}
//             className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
//           >
//             Load More
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Blog;

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

  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCategoryChange = (category) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsTransitioning(false);
    }, 300);
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
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-gray-800 text-[12px] mb-6">
        <NavLink to="/" className="hover:text-blue-600 transition duration-300">
          Home
        </NavLink>
        <FaAngleDoubleRight className="text-gray-500" />
        <p className="">Blog</p>
      </div>

      {/* Title */}
      <h1 className="text-3xl text-gray-800 mb-6">Our Blog</h1>

      {/* Category Navigation */}
      <div className="flex gap-6 border-b pb-3 text-gray-500">
        {categories.map((category) => (
          <button
            key={category}
            className={`pb-2 text-[14px] text-gray-500 font-medium transition-all duration-500 ${
              activeCategory === category
                ? "border-b-2 border-blue-500 text-blue-900 cursor-pointer"
                : "hover:text-blue-600"
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Centered Blog Posts */}
      <div
        className={`flex flex-wrap justify-center gap-6 mt-6 transition-opacity duration-500 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {Blogs.filter(
          (post) =>
            activeCategory === "All News" || post.category === activeCategory
        )
          .slice(0, visiblePosts[activeCategory])
          .map((post) => (
            <div
              key={post.id}
              className="w-full sm:w-[48%] lg:w-[31%] bg-white shadow-md rounded-xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:scale-[1.02]"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.description}
                  className="w-full h-60 object-cover rounded-t-xl"
                />
                <span className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full transition-all duration-300 hover:scale-110">
                  {post.category}
                </span>
              </div>

              <div className="p-5">
                <NavLink
                  to="#"
                  className="hover:text-blue-700 text-gray-800 text-md transition-all duration-300"
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
                    <p>{post.comments}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Load More Button */}
      {visiblePosts[activeCategory] <
        Blogs.filter(
          (post) =>
            activeCategory === "All News" || post.category === activeCategory
        ).length && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => handleLoadMore(activeCategory)}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Blog;
