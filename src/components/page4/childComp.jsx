'use client'
import { useState } from "react";
import Card from "./card/card";
import { FaHome } from 'react-icons/fa'
import { AiFillQuestionCircle } from 'react-icons/ai'
import LazyImage from "@components/base/lazyImage";

const ChildComp = () => {
  const [arr, setarr] = useState([
    ["Size 2¼ X 1 x 9", '/ClayTiles/1.png', "025"],
    ["Size 2¼ X 1 x 9", '/ClayTiles/2.png', "125"],
    ["Size 2¼ X 1 x 9", '/ClayTiles/3.png', "225"],
    ["Size 2¼ X 1 x 9", '/ClayTiles/4.png', "325"],
    ["Size 2¼ X 1 x 9", '/ClayTiles/5.png', "525"],
    ["Size 2¼ X 1 x 9", '/ClayTiles/6.png', "625"],
    ["Size 2¼ X 1 x 9", '/ClayTiles/7.png', "725"],
    ["Size 2¼ X 1 x 9", '/ClayTiles/8.png', "825"],
  ]);
  return (
    <>
      <section>
        <section className='flex flex-row items-center justify-end ms:justify-between w-4/5 mx-auto pt-5'>
          <section className='hidden ms:flex flex-row gap-3 items-center'>
            <FaHome size={30} />
            <p className='text-lg'>Home/Brick Slips</p>
          </section>
          <a href={'https://wa.me/+923004439445'} target='_blank' className='flex flex-row gap-3 items-center py-2 px-4 w-fit shadow-lg border border-bgLight'>
            <AiFillQuestionCircle size={30} />
            <p className='text-lg'>/Inquire Now</p>
          </a>
        </section>
        <section className="grid xs:grid-cols-1 ms:grid-cols-2 lg:grid-cols-3 p-10 gap-10 place-items-center place-content-center">
          {arr.map((el, i) => {
            return <Card key={i} data={el} class="" />
          })}
        </section>
      </section>

      <div className="flex md:flex-row xs:flex-col-reverse xs:h-auto md:h-[80vh] w-full md:w-11/12 mx-auto px-5 py-2 my-8">
        <div className="relative xs:h-fit xs:py-8 md:py-0 md:h-full xs:w-full md:w-1/2 px-7 flex flex-col justify-center items-end gap-6">
          <div className="absolute bg-cover md:hidden inset-0 bg-black opacity-50 z-10" />
          <div className="relative z-20 flex flex-col gap-5 w-full">
            <h1 className="text-5xl font-bold font-heading">Brick Slips</h1>
            <p className="text-sm font-medium w-full md:w-11/12 font-text">
              Brick Slips are also known as Brick tiles, can be used internally or externally to create a modern or traditional brick finish that is indistinguishable from that of a regular brick.in the majority of cases, Brick slips are the thin cut sections of facing bricks.
            </p>
            <p className="text-sm font-medium w-full md:w-11/12 font-text">
              They are able to reduce overall build schedules and allow for a cleaner site with less storage and handling requirements than regular bricks would require. Brick slips are highly versatile and are able to transform internal and external walls, quickly and cost effectively.
            </p>
          </div>
        </div>
        <div className="xs:h-[40vh] ms:h-[60vh] md:h-full xs:w-full md:w-1/2 md:py-16 px-1">
          <LazyImage
            src="/BrickSlips/brickSlips.png"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </>
  );
}

export default ChildComp;
