import React from "react";
import Herosection from "./components/Hero";
import FeaturedCars from "./components/FeaturedCars";
import GetStarted from "./components/GetStarted";

const Home = () => {
  return (
    <div>
      <Herosection />
      <FeaturedCars />
      <GetStarted />
    </div>
  );
};

export default Home;
