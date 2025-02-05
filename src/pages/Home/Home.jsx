import React from "react";
import Herosection from "./components/Hero";
import FeaturedCars from "./components/FeaturedCars";
import GetStarted from "./components/GetStarted";
import Blogs from './components/BlogsSection';

const Home = () => {
  return (
    <div>
      <Herosection />
      <FeaturedCars />
      
      <GetStarted />
      <Blogs />
    </div>
  );
};

export default Home;
