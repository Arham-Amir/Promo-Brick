'use client'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { FcNext, FcPrevious } from 'react-icons/fc';

const Carousel = () => {
  const [slideno, setSlideNo] = useState(0);
  const ref = useRef(null);
  const refImage = useRef([]);
  const images = [
    '/images/slider1.png',
    '/images/slider3.png',
    '/images/slider5.png',
    '/images/slider7.png',
  ];

  const handleLeftClick = () => {
    if (slideno > 0) {
      setSlideNo(slideno - 1);
      scrollToSlide(slideno - 1);
    }
    else {
      setSlideNo(images.length - 1);
      scrollToSlide(images.length - 1);
    }
  };

  const handleRightClick = () => {
    if (slideno < images.length - 1) {
      setSlideNo(slideno + 1);
      scrollToSlide(slideno + 1);
    }
    else {
      setSlideNo(0);
      scrollToSlide(0);
    }
  };

  const scrollToSlide = (slideIndex) => {
    const slideWidth = refImage.current[slideIndex]?.clientWidth;
    if (slideWidth && ref.current) {
      ref.current.scrollTo({
        left: slideIndex * slideWidth,
        behavior: 'smooth',  // Smooth scrolling
      });
    }
  };

  useEffect(() => {
    handleRightClick();
  }, []);
  useEffect(() => {
    scrollToSlide(slideno);
  }, [slideno]);

  return (
    <section className="xs:h-[70vh] md:h-[100vh] mx-0 w-screen overflow-x-hidden z-10 relative">
      <section ref={ref} className="h-full flex flex-row flex-nowrap w-full overflow-x-scroll custom-scroll">
        <FcPrevious onClick={handleLeftClick} className="cursor-pointer absolute top-1/2 -translate-y-1/2 left-2 text-4xl z-30" />
        {images.map((el, i) => (
          <section
            key={i}
            ref={(el) => (refImage.current[i] = el)}
            className={`${i == slideno ? 'grayscale-0': 'grayscale-[25]'} min-w-[100%] h-full`}
          >
            <img src={el} alt={`image ${i + 1}`} className="object-cover h-full w-full" />
          </section>
        ))}
        <FcNext onClick={handleRightClick} className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-2 text-4xl z-30" />
      </section>
    </section>
  );
};

export default Carousel;
