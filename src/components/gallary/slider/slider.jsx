'use client'
import LazyImage from "@components/base/lazyImage";
import { useEffect, useRef, useState } from "react";
import { AiOutlineVerticalLeft, AiOutlineVerticalRight } from 'react-icons/ai'

const Slider = ({ data }) => {
  const sliderRef = useRef();
  let curr = 0;
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    function updateSize() {
      const width = window.innerWidth;
      if (width < 570) { // xs screen
        setItemsPerPage(1);
      } else if (width >= 570 && width < 1024) { // ms screen
        setItemsPerPage(2);
      } else { // lg screen
        setItemsPerPage(4);
      }
    }

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  function handelRightClick() {
    if (sliderRef.current && curr < Math.ceil(data.length / itemsPerPage) - 1) {
      const element = sliderRef.current;
      curr += 1;
      element.scrollTo({ left: element.scrollWidth / (data.length / itemsPerPage) * curr, behavior: 'smooth' });
    }
  }

  function handelLeftClick() {
    if (sliderRef.current && curr > 0) {
      const element = sliderRef.current;
      curr -= 1;
      element.scrollTo({ left: element.scrollWidth / (data.length / itemsPerPage) * curr, behavior: 'smooth' });
    }
  }

  return (
    <section className="p-5 my-5 mx-8 heading-bg relative">
      <section className="absolute left-0 top-0 h-full p-1 text-3xl heading-bg">
        <AiOutlineVerticalRight onClick={handelLeftClick} className="h-full cursor-pointer" />
      </section>
      <section ref={sliderRef} className="w-11/12 h-[300px] mx-auto overflow-hidden flex transition-all duration-200">
        {data.map((src, i) => {
          return <LazyImage key={i} className="xs:min-w-full xs:max-w-full ms:min-w-[50%] ms:max-w-[50%] lg:min-w-[25%] lg:max-w-[25%] p-2 object-center" src={src} />
        })}
      </section>
      <section className="absolute right-0 top-0 h-full p-1 text-3xl heading-bg">
        <AiOutlineVerticalLeft onClick={handelRightClick} className="h-full cursor-pointer" />
      </section>
    </section>
  );
}

export default Slider;
