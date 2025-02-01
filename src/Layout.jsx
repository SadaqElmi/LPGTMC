import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header"; // Import Header component


const Layout = () => {
  return (
    <>
      <Header />
     
      <Outlet /> 
    </>
  );
};

export default Layout;
