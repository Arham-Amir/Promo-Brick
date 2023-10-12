'use client'
import React, { useEffect, useRef, useState } from 'react';
import { FcNext, FcPrevious } from 'react-icons/fc';

const Carousel = () => {
  const [slideno, setSlideNo] = useState(0);
  const ref = useRef(null);
  const refImage = useRef([]);
  const images = [
    '/images/slider1.jpg',
    '/images/slider2.jpg',
    '/images/slider3.jpg',
    '/images/slider4.jpg',
    '/images/slider5.jpg',
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
    <section className="h-[100vh] mx-0 max-w-screen overflow-x-hidden relative bg-white">
      <section ref={ref} className="h-full flex flex-row flex-nowrap w-full overflow-x-scroll custom-scroll">
        <FcPrevious onClick={handleLeftClick} className="cursor-pointer absolute top-1/2 -translate-y-1/2 left-2 text-4xl z-30" />
        <section
          className={`grayscale-[25] border-y-2 border-r-2 border-slate-300 min-w-[15%] h-full`}
        >
          <img src={images[images.length - 1]} alt={`image -1`} className="object-cover h-full w-full" />
        </section>
        {images.map((el, i) => (
          <section
            key={i}
            ref={(el) => (refImage.current[i] = el)}
            className={`${i == slideno ? 'grayscale-0': 'grayscale-[25]'}  border-2 border-slate-300 min-w-[70%] h-full`}
          >
            <img src={el} alt={`image ${i + 1}`} className="object-cover h-full w-full" />
          </section>
        ))}
        <section
          className={`grayscale-[25] border-y-2 border-r-2 border-slate-300 min-w-[15%] h-full`}
        >
          <img src={images[0]} alt={`image -1`} className="object-cover h-full w-full" />
        </section>
        <FcNext onClick={handleRightClick} className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-2 text-4xl z-30" />
      </section>
    </section>
  );
};

export default Carousel;
