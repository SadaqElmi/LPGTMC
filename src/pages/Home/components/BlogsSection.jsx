import React, { useRef } from 'react';
import { FaRegCalendarAlt, FaRegComment, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Blogs } from '../../../data/Blogs_data';

const BlogsSection = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 320;
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += 320;
  };

  return (
    <div className="p-8 bg-[#edf1f7]">
      {/* Title and Buttons Section */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl text-gray-700 ml-24">Our Blog</h1>
        <div className="flex items-center gap-4 mr-24">
          <button onClick={scrollLeft} className="p-2 bg-white rounded-full shadow-md transition duration-300">
            <FaArrowLeft className="text-gray-700 hover:text-blue-300" />
          </button>
          <button onClick={scrollRight} className="p-2 bg-white rounded-full shadow-md transition duration-300">
            <FaArrowRight className="text-gray-700 hover:text-blue-300" />
          </button>
        </div>
      </div>

      {/* Blog Cards Section */}
      <div 
        ref={sliderRef} 
        className="flex overflow-x-auto snap-x snap-mandatory space-x-4 scrollbar-hide opacity-90"
      >
        {Blogs.map(blog => (
          <div 
            key={blog.id} 
            className="min-w-[400px] bg-[#edf1f7] rounded-3xl border-1 border-white shadow-lg overflow-hidden relative snap-start"
          >
            {/* Category Label */}
            <div className="absolute top-46 left-4 z-20 bg-blue-500 text-white px-3 py-1 rounded-xl text-sm font-semibold">
              {blog.category === 'car' && <NavLink to="/cars">Cars</NavLink>}
              {blog.category === 'company' && <NavLink to="/company">Company</NavLink>}
              {blog.category === 'repair' && <NavLink to="/repair">Repair</NavLink>}
            </div>

            {/* Blog Image */}
            <NavLink to={`/blog/${blog.id}`}>
              <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover" />
            </NavLink>

            {/* Blog Content */}
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4 hover:text-blue-500">{blog.description}</p>
              <div className="flex items-center justify-between p-2">
                <p className="text-gray-500 mb-2 flex items-center">
                  <FaRegCalendarAlt className="mr-2" /> {blog.date} {" "}
                </p>
                <div>
                  <p className="text-gray-500 flex items-center">
                    <FaRegComment className="ml-2 mr-2 flex" /> {blog.comments}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogsSection;
