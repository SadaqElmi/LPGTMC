import React from "react";
import Herosection from "./components/Hero";
import FeaturedCars from "./components/FeaturedCars";
import Blogs from "../Blogs/Components/Blogs";
import Blog from "../Blogs/Components/Blogs";

const Home = () => {
  return (
    <div>
      <Herosection />
      <FeaturedCars />
      <Blogs />
    </div>
  );
};

export default Home;
