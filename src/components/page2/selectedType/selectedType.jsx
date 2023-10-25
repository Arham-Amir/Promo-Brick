'use client'
import { useState } from 'react'
import Slideshow from '../slideshow/slideshow'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
const SelectedType = (props = {}) => {
  const [number, setNumber] = useState(0);

  const incrementNumber = () => {
    setNumber(number+1);
  };
  const decrementNumber = () => {
    setNumber(number-1);
  };
  return (
    <section className="p-6 flex-1 h-[85vh]">
      <div className={`bricktypes rounded-3xl bg-darkColor text-white itemd-center sm:flex xs:flex-col xs:justify-center md:flex-row h-full w-full p-5`} >
        <div className="w-full md:w-1/2 p-0 md:p-10">
          <Slideshow images={props.data[0]} />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center p-3 sm:py-3">
          <h1 className="text-center text-4xl font-extrabold py-2 font-heading">{props.data[1]}</h1>
          <div className="text-xl bg-darkColor/50 p-3 m-3 rounded-lg">
            <h2 className="font-bold underline">Specifications:</h2>
            <div className='text-base mt-2'>
              <table className="w-full">
                <tbody>
                  {Object.entries(props.data[2]).map(([key, value]) => (
                    <tr key={key}>
                      <td className="font-semibold">&#8226;</td>
                      <td className="font-semibold">{key}:</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex border-2 border-black justify-between px-3 py-1 w-fit mx-2">
              <button className='text-sm' onClick={() => decrementNumber()}>
                <AiOutlineMinus />
              </button>
              <button className="text-xl sm:text-2xl px-5 font-bold">{number}</button>
              <button className='text-sm' onClick={() => incrementNumber()}>
                <AiOutlinePlus />
              </button>
            </div>
            <button className="bg-themeColor text-white px-9 py-3 mx-2 w-fit">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelectedType;
