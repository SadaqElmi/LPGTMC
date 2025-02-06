import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Blogs } from "../../../data/Blogs_data";
import {
  FaRegCalendarAlt,
  FaAngleDoubleRight,
  FaFacebookF,
  FaTwitter,
  FaLink,
  FaReply,
  FaQuoteRight,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Articles = () => {
  const [comment, setComment] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      console.log("Comment submitted:", comment);
      setComment("");
    }
  };
  const { id } = useParams();
  const blog = Blogs.find((b) => b.id.toString() === id);

  if (!blog) {
    return <h2 className="text-center text-red-500">Article not found!</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center gap-2 text-gray-800 text-xs mb-6">
        <NavLink to="/" className="hover:text-blue-600 transition duration-300">
          Home
        </NavLink>
        <FaAngleDoubleRight className="text-gray-500" />
        <NavLink
          to="/blogs"
          className="hover:text-blue-600 transition duration-300"
        >
          Blog
        </NavLink>
        <FaAngleDoubleRight className="text-gray-500" />
        <p className="text-gray-800">Article</p>
      </div>

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full rounded-lg my-4"
      />

      <div className="flex justify-between items-center mt-4">
        <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          {blog.category}
        </span>

        <div className="flex items-center text-gray-500 text-sm">
          <FaRegCalendarAlt className="mr-2" />
          <p>
            {blog.date}, {blog.time}
          </p>
        </div>
      </div>

      <h1 className="text-4xl font-bold mt-6 mb-4 leading-tight">
        {blog.title}
      </h1>

      <p className="text-gray-700 mt-4">{blog.content}</p>

      <h2 className="text-4xl text-gray-700 mt-8">Keep Reading (H2)</h2>
      <p className="mt-4 text-gray-700">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.
      </p>

      <p className="mt-4 text-gray-700">
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search for 'lorem ipsum' will
        uncover many web sites still in their infancy. Various versions have
        evolved over the years, sometimes by accident, sometimes on purpose
        (injected humour and the like).
      </p>

      <h2 className="text-3xl text-gray-700 mt-8">Keep Reading (H2)</h2>
      <p className="mt-4 text-gray-700">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text.
      </p>

      <h2 className="text-2xl text-gray-700 mt-8">Some title (H3)</h2>
      <p className="mt-4 text-gray-700">
        All the Lorem Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary, making this the first true generator on the
        Internet. It uses a dictionary of over 200 Latin words, combined with a
        handful of model sentence structures, to generate Lorem Ipsum which
        looks reasonable. The generated Lorem Ipsum is therefore always free
        from repetition, injected humour, or non-characteristic words etc.
      </p>

      <p className="mt-4 text-gray-700">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source.
      </p>

      <h4 className="text-xl text-gray-700 mt-8">Some title (H4)</h4>
      <p className="mt-4 text-gray-700">
        All the Lorem Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary, making this the first true generator on the
        Internet. It uses a dictionary of over 200 Latin words, combined with a
        handful of model sentence structures, to generate Lorem Ipsum which
        looks reasonable. The generated Lorem Ipsum is therefore always free
        from repetition, injected humour, or non-characteristic words etc.
      </p>

      {/* Quotation Styled */}
      <div className="border-l-4 border-blue-600 pl-4 mt-6 text-gray-700 italic">
        If you are going to use a passage of Lorem Ipsum, you need to be sure
        there isn't anything embarrassing hidden in the middle of text. All the
        Lorem Ipsum generators on the Internet tend to repeat predefined chunks
        as necessary, making this the first true generator on the Internet.
      </div>

      <p className="mt-4 text-gray-700">
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>

      <h5 className="text-md text-gray-700 mt-8">Keep Reading (H5)</h5>
      <h5 className="text-sm text-gray-700 mt-8">Keep Reading (H6)</h5>

      <p className="mt-4 text-gray-700">
        It uses a dictionary of over 200 Latin words, combined with a handful of
        model sentence structures, to generate Lorem Ipsum which looks
        reasonable. The generated Lorem Ipsum is therefore always free from
        repetition, injected humour, or non-characteristic words etc.
      </p>

      <ul className="mt-4 text-gray-700 list-disc list-inside">
        <li>Theme Forest</li>
        <li>Graphic River</li>
        <li>Audio Jungle</li>
        <li>3D Ocean</li>
        <li>Code Canyon</li>
      </ul>

      <p className="mt-6 text-gray-700">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn’t
        anything embarrassing hidden in the middle of text.
        <NavLink to="#" className="text-blue-600 underline">
          Link
        </NavLink>{" "}
        the Lorem Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary, making this the first true generator on the
        Internet.
      </p>

      <div className="flex gap-4 mt-6">
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-800 text-white rounded-lg">
          <FaFacebookF /> Share
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
          <FaTwitter /> Tweet
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg">
          <FaLink /> Copy Link
        </button>
      </div>

      <div className="bg-gray-100 p-4  rounded-lg mt-10">
        <div className="flex items-center gap-3">
          <div className="bg-gray-300 p-3 rounded-full text-gray-700">
            <FaRegCalendarAlt />
          </div>
          <div>
            <p className="font-semibold">John Doe</p>
            <p className="text-xs text-gray-500">30.08.2021, 17:53</p>
          </div>
        </div>
        <p className="text-gray-700 mt-2">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <div className="flex justify-between items-center mt-3 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-600">👍 12</span>
            <span className="text-red-600">👎 7</span>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600 transition">
              <FaReply /> Reply
            </button>
            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600 transition">
              <FaQuoteRight /> Quote
            </button>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="bg-gray-100 p-4 mt-4 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="bg-gray-300 p-3 rounded-full text-gray-700">
            <FaRegCalendarAlt />
          </div>
          <div>
            <p className="font-semibold">John Doe</p>
            <p className="text-xs text-gray-500">24.08.2021, 16:41</p>
          </div>
        </div>
        <p className="text-gray-700 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div className="flex justify-between items-center mt-3 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-600">👍 10</span>
            <span className="text-red-600">👎 0</span>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600 transition">
              <FaReply /> Reply
            </button>
            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600 transition">
              <FaQuoteRight /> Quote
            </button>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="bg-gray-100 p-4 mt-6 rounded-lg shadow-md">
        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="bg-gray-300 p-3 rounded-full text-gray-700">
            <FaRegCalendarAlt />
          </div>
          <div>
            <p className="font-semibold">John Doe</p>
            <p className="text-xs text-gray-500">11.08.2021, 11:11</p>
          </div>
        </div>

        <div className="bg-white p-4 mt-4 rounded-md shadow-sm">
          <p className="text-gray-700">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>

        
        <p className="text-gray-700 mt-3">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>

        <div className="flex justify-between items-center mt-3 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-600">👍 9</span>
            <span className="text-red-600">👎 2</span>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600 transition">
              <FaReply /> Reply
            </button>
            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600 transition">
              <FaQuoteRight /> Quote
            </button>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="bg-gray-100 p-4 mt-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          {/* Comment Input Box */}
          <textarea
            className="w-full h-24 p-3 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>

          <button
            type="submit"
            className="mt-3 px-6 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition"
          >
            SEND
          </button>
        </form>
      </div>
      {/*  */}
    </div>
  );
};

export default Articles;
