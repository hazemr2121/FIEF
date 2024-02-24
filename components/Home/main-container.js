import React from "react";

const CustomContainer = ({ header, description }) => {
  return (
    <div className="min-h-screen w-full relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(4,9,30,0.7)] via-[rgba(4,9,30,0.7)] to-transparent z-10"></div>
      <div className="absolute inset-0 flex justify-center items-center z-20">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">{header}</h1>
          <p className="text-lg">{description}</p>
        </div>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/homePage.jpg')" }}
      ></div>
    </div>
  );
};

export default CustomContainer;
