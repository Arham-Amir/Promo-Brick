'use client'

import { useState } from "react";
import { FaSlidersH } from "react-icons/fa"

const Types = (props = {}) => {
  const [show, setshow] = useState(true);
  return (
    <section className="h-[93vh] sticky top-[7vh]  border-white">
      <section className="relative flex flex-col justify-center h-full min-w-max mx-auto text-base font-bold">
        {props.data.map((el, i) => (
          <button key={i} onClick={() => props.settype(el)} className={`${show ? 'block': 'hidden'} transition-all duration-250 p-10 hover:bg-darkColor hover:text-white border-white  ${props.type == el && 'bg-darkColor text-white'}`}>{el}</button>
        ))}
      </section>
    </section>
  );
}

export default Types;
