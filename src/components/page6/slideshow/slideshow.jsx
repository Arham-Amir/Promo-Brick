import LazyImage from "@components/base/lazyImage";
import React, { useState } from "react";
const Slideshow = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative w-full h-full">
      <div className="w-full h-full">
        <LazyImage
          className="w-full h-full object-cover"
          src={images[currentSlide]}
        />
      </div>

    </div>
  );
};

export default Slideshow;
