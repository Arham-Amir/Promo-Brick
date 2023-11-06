import React, { useState } from "react";
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'
const Slideshow = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative w-full h-full"> {/* Adjusted to half screen width */}
      {/* Full-width images with number and caption text */}
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
        />
      </div>

    </div>
  );
};

export default Slideshow;
