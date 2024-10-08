'use client'
import { useState } from "react";
import Card from "./card/card";
import { FaHome } from 'react-icons/fa'
import { AiFillQuestionCircle } from 'react-icons/ai'
import LazyImage from "@components/base/lazyImage";
import Link from "next/link";

const ChildComp = () => {
  const [arr, setarr] = useState([
    ["Floor Design 1", '/BrickSlips/1.jpg'],
    ["Floor Design 2", '/BrickSlips/2.jpg'],
    ["Floor Design 3", '/BrickSlips/3.jpg'],
    ["Floor Design 4", '/BrickSlips/4.jpg'],
    ["Floor Design 5", '/BrickSlips/5.jpg'],
    ["Floor Design 6", '/BrickSlips/6.jpg'],
    ["Floor Design 7", '/BrickSlips/7.jpg']
  ]);
  return (
    <>
      <section>
        <section className='flex flex-row items-center justify-end ms:justify-between w-4/5 mx-auto pt-5'>
          <section className='hidden ms:flex flex-row gap-3 items-center'>
            <Link className='hover:text-themeColor' href="/"><FaHome size={30} /></Link>
            <p className='text-lg'><Link className='hover:text-themeColor' href="/">Home</Link>/Clay Tiles</p>
          </section>
          <a href={'https://wa.me/+923004439445'} target='_blank' className='flex flex-row gap-3 items-center py-2 px-4 w-fit shadow-lg border border-bgLight'>
            <AiFillQuestionCircle size={30} />
            <p className='text-lg'>/Inquire Now</p>
          </a>
        </section>
        <section className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10 place-items-center place-content-center">
          {arr.map((el, i) => {
            return <Card key={i} data={el} class="" />
          })}
        </section>
      </section>

      <div className="flex md:flex-row xs:flex-col-reverse xs:h-auto md:h-[70vh] w-full md:w-4/5 mx-auto px-5 py-2 my-8">
        <div className="relative xs:h-fit xs:py-8 md:py-0 md:h-full xs:w-full md:w-1/2 px-7 flex flex-col justify-center items-end gap-6">
          <div className="relative z-20 flex flex-col gap-5 w-full">
            <h1 className="text-5xl font-bold font-heading">Clay Tiles</h1>
            <p className="text-base font-medium w-full md:w-11/12 font-text">
              Clay tiles are a type of hard, modular surface covering used to cover floors in homes, commercial buildings, and other structures. They are typically made in relatively small, repeating units, from materials like baked clay or cement, and come in a variety of shapes, sizes, colors, and designs.
            </p>
            <p className="text-base font-medium w-full md:w-11/12 font-text">
              Floor tiles are popular because they are durable, easy to clean, and can add aesthetic appeal to a room. They are commonly used in entryways,lawns and other areas that see heavy foot traffic.
            </p>
          </div>
        </div>
        <div className="xs:h-[40vh] ms:h-[60vh] md:h-full xs:w-full md:w-1/2 md:py-16 px-1">
          <LazyImage
            className="h-full w-full object-cover rounded-lg" src="/ClayTiles/clayTiles.png" />
        </div>
      </div>
    </>
  );
}

export default ChildComp;
