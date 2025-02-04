import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home/Home";
import Cars from "./pages/Cars/Cars.jsx";
import HelperPage from "./pages/HelperCenter/HelperPage";
import Blog from "./pages/Blogs/Components/Blogs.jsx";
import Articles from "./pages/Blogs/Components/Articles.jsx"; // Import the Articles component
import ExploreCars from "./pages/Cars/components/ExploreCars.jsx"

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/HelperPage" element={<HelperPage />} />
            <Route path="/Blogs" element={<Blog />} />
            <Route path="/cars" element={< ExploreCars/>} />
            <Route path="/Blogs/:id" element={<Articles />} /> 

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;