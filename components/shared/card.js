// components/Card.js
import React from "react";

const Card = ({ title, text }) => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-bold leading-6 text-gray-900   ">
            {title}
          </h3>
          <p className="mt-1 max-w-2xl text-lg text-gray-500 ">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
