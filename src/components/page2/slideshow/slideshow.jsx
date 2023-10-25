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
    <div className="relative w-full h-full border-4 border-bg rounded-3xl shadow-lg shadow-black"> {/* Adjusted to half screen width */}
      {/* Full-width images with number and caption text */}
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover rounded-3xl"
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
        />
      </div>

      {/* Next and previous buttons */}
      <button
        className="prev absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 font-bold text-xl cursor-pointer text-white transition duration-300 hover:bg-gray-300 hover:text-black"
        onClick={prevSlide}
      >
        <IoIosArrowBack />
      </button>
      <button
        className="next absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 text-white font-bold text-xl cursor-pointer transition duration-300 hover:bg-gray-300 hover:text-black"
        onClick={nextSlide}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Slideshow;
