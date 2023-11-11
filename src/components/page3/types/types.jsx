'use client'

import { useState } from "react";

const Types = (props = {}) => {
  const [show, setshow] = useState(true);
  return (
    <section className="xs:w-screen md:w-auto md:h-[93vh] sticky top-0 z-20 md:top-[7vh] xs:shadow-lg md:shadow-none border-white">
      <section className="relative flex flex-row flex-wrap md:flex-col z-20 justify-center h-full md:min-w-max mx-auto text-base font-bold">
        {props.data.map((el, i) => (
          <button key={i} onClick={() => props.settype(el)} className={`${show ? 'block': 'hidden'} transition-all duration-250 xs:p-5 md:p-10 xs:w-1/2 md:w-full hover:bg-darkColor hover:text-white border-bgLight border-b  ${props.type == el ? 'bg-darkColor text-white': 'bg-white'}`}>{el}</button>
        ))}
      </section>
    </section>
  );
}

export default Types;
