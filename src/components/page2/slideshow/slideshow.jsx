import LazyImage from "@components/base/lazyImage";
import React, { useState } from "react";
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'
const Slideshow = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full">
      <div className="w-full h-full">
        <LazyImage
          className="w-full h-full object-cover"
          src={images[currentSlide]}
        />
      </div>

      <button
        className={`${images.length == 1? 'hidden': 'block' } prev absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 font-bold text-xl cursor-pointer text-black transition duration-300 hover:bg-gray-300 hover:text-black`}
        onClick={prevSlide}
      >
        <IoIosArrowBack />
      </button>
      <button
        className={`${images.length == 1? 'hidden': 'block' } next absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 text-black font-bold text-xl cursor-pointer transition duration-300 hover:bg-gray-300 hover:text-black`}
        onClick={nextSlide}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Slideshow;
