import React from "react";

const Card = ({ title, disc, img }) => {
  return (
    <div className="container max-w-md rounded overflow-hidden shadow-lg ease-linear transition duration-300 transform-gpu hover:shadow-[#138288] hover:-translate-y-1 ">
      <img className="w-full" src={img} alt="Placeholder" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{disc}</p>
      </div>
    </div>
  );
};

export default Card;
