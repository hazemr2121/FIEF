import React from "react";

const CustomContainer = () => {
  return (
    <div
      className="w-full bg-cover bg-center bg-opacity-50 text-white py-20 flex justify-center"
      style={{ backgroundImage: "url('homePage.jpg')" }}
    >
      <div className="max-w-4xl text-center">
        {" "}
        {/* Adjust max-w-4xl */}
        <h1 className="text-4xl font-bold mb-4">Your Header</h1>
        <p className="text-lg">Your Description</p>
      </div>
    </div>
  );
};

export default CustomContainer;
