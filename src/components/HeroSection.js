import React from "react";
import BG from "../assets/bg.jpg";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Background image */}
      <img
        src={BG}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />

      {/* Text content */}
      <div className="relative flex flex-col items-center justify-center w-full h-full text-center text-white p-4">
        <h1 className="text-4xl font-bold">
          Stay Ahead with the Latest in Tech
        </h1>
        <h2 className="py-10">
          <h3>Insights, Reviews, and Trends from the World of Technology</h3>
        </h2>
        <button className="bg-teal-300 px-4 py-5 rounded-xl text-black font-bold hover:bg-teal-700 hover:text-white">
          Explore Our Categories
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
