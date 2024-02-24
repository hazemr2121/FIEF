import React from "react";

const Card = ({ title, disc, img }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
      <img className="w-full" src={img} alt="Placeholder" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{disc}</p>
      </div>
    </div>
  );
};

export default Card;
