import React from "react";
import Slider from "react-slick";
import Image from "next/image";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ImageSlider = ({ images }) => {
  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-full">
            <img
              width={500}
              height={500}
              src={image}
              alt={`Produc  t Image ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
