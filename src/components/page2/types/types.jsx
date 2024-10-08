'use client'

import { useState } from "react";
import { FaSlidersH } from "react-icons/fa"

const Types = (props = {}) => {
  const [show, setshow] = useState(true);
  return (
    <section className="h-[93vh] sticky top-[7vh] border-white">
      <section className="relative flex flex-col justify-center h-full min-w-max mx-auto text-base font-bold">
        {props.data.map((el, i) => (
          <button key={i} onClick={() => props.settype(i)} className={`${show ? 'block': 'hidden'} transition-all duration-250 p-8 hover:bg-darkColor hover:text-white border-white  ${props.type == i && 'bg-darkColor text-white'}`}>{el[1]}</button>
        ))}
        {/* <button onClick={()=> setshow(!show)} className={`absolute top-1/2 -translate-y-1/2 right-0
        ${show ? 'translate-x-1/2': 'translate-x-20'} transition-all duration-250 border-2 p-2 rounded-full border-bgDark`}>
          <FaSlidersH  className="text-xl text-bgDark"/>
        </button> */}
      </section>
    </section>
  );
}

export default Types;
