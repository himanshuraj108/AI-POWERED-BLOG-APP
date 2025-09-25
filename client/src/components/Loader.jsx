import React from "react";
import { assets } from "../assets/assets";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <img src={assets.gradientBackground} alt="" className="absolute opacity-50 w-200"/>
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-white border-primary"></div>
    </div>
  );
};

export default Loader;
