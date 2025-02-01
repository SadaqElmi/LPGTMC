import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home/Home";
import Cars from "./pages/Cars/Cars.jsx";
import FeaturedCars from "./pages/Home/components/FeaturedCars.jsx";


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/cars" element={<Cars />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
