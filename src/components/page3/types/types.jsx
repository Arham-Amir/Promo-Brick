'use client'

import { useState } from "react";
import { FaSlidersH } from "react-icons/fa"

const Types = (props = {}) => {
  const [show, setshow] = useState(true);
  return (
    <section className="h-[93vh] sticky top-[7vh]">
      <section className="relative flex flex-col justify-center h-full min-w-max mx-auto bg-bgLight text-base font-bold">
        {props.data.map((el, i) => (
          <button key={i} onClick={() => props.settype(el)} className={`${show ? 'block': 'hidden'} transition-all duration-250 p-10 border-b-2 border-white  ${props.type == el && 'bg-themeColor'}`}>{el}</button>
        ))}
        <button onClick={()=> setshow(!show)} className={`absolute top-1/2 -translate-y-1/2 right-0
        ${show ? 'translate-x-1/2': 'translate-x-20'} transition-all duration-250 border-2 p-2 rounded-full border-bgDark`}>
          <FaSlidersH  className="text-xl text-bgDark"/>
        </button>
      </section>
    </section>
  );
}

export default Types;
