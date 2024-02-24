import React from "react";

const ImageComponent = () => {
  return (
    <div className="relative w-full h-[500px] bg-cover bg-fixed bg-center overflow-hidden">
      <img
        src="https://www.fayoum.edu.eg/images/homeimages/6.jpeg"
        alt="Building with dome"
        className="absolute inset-0 object-cover h-full w-full"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="rounded-full bg-white p-4 shadow-md">
          <img
            src="https://www.fayoum.edu.eg/images/homeimages/6.jpeg"
            alt="Rounded picture"
            className="rounded-full w-40 h-40 object-cover"
          />
          <p className="text-center mt-4 text-lg font-semibold">
            Your Text Here
          </p>
          <h2 className="text-center mt-4 text-2xl font-bold">Header Text</h2>
          <div className="mx-auto w-full border-b-2 border-blue-500 mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
