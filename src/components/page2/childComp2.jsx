'use client'
import React, { useState } from 'react'
import Slideshow from './slideshow/slideshow'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
export default function ChildComp2() {
  const contentarray = [
    [['Images/brick.jpg', 'Images/brick.jpg'], "Awal Bricks", {
      "Material": "Clay",
      "Shape": "Rectangular",
      "Product Type": "A Class",
      "Weight": "3.25kg",
      "Dimensions (L*W*D)": "9.0*4.5*3 Inches",
      "Water Absorption Rate": "13.79%",
      "Ultimate Stree": "2036"
    }],
    [['Images/brick.jpg', 'Images/brick.jpg'], "Doum Brick", {
      "Material": "Clay",
      "Shape": "Rectangular",
      "Product Type": "A Class",
      "Weight": "3.23 Kg",
      "Dimension (L*W*D)": "9.0*4.5*3 Inch",
      "Water Absorption Rate": "15.63 %",
      "Ultimate Stree (PSI)": "1493",
    }],
    [['Images/brick.jpg', 'Images/brick.jpg'], "Khinger Brick", {
      "Material": "Clay",
      "Shape": "Rectangular",
      "Product Type": "Class",
      "Weight": "Kg",
      "Dimension (L*W*D)": "9.0*4.5*3 Inch",
      "Water Absorption Rate": "15.63 %",
      "Ultimate Stree (PSI)": "1493",
    }],
    [['Images/brick.jpg', 'Images/brick.jpg'], "Special Brick", {
      "Material": "Clay",
      "Shape": "Rectangular",
      "Product Type": "A+ Class",
      "Weight": "3.39 Kg",
      "Dimension (L*W*D)": "9.0*4.5*3",
      "Water Absorption Rate": "12.74 %",
      "Ultimate Stree (PSI)": "2288",
    }],
    [['Images/brick.jpg', 'Images/brick.jpg'], "Premium Brick", {
      "Material": "Clay",
      "Shape": "Rectangular",
      "Product Type": "A++ Class",
      "Weight": "3.37 Kg",
      "Dimension (L*W*D)": "9.0*4.5*3 (+-, .1)",
      "Water Absorption Rate": "12.39 %",
      "Ultimate Stree (PSI)": "3182",
    }]
  ]
  // Initialize the state with initial values for each item
  const initialNumbers = contentarray.map(() => 0);
  const [numbers, setNumbers] = useState(initialNumbers);

  // Function to increment the number for a specific index
  const incrementNumber = (index) => {
    const newNumbers = [...numbers];
    newNumbers[index] += 1;
    setNumbers(newNumbers);
  };

  // Function to decrement the number for a specific index
  const decrementNumber = (index) => {
    const newNumbers = [...numbers];
    if (newNumbers[index] > 0) {
      newNumbers[index] -= 1;
    }
    setNumbers(newNumbers);
  };
  return (
    <div className='bg-white'>
      {/* FRONT BANNER */}
      <div className="flex h-[86vh]">
        <div className="w-1/2 px-7 bg-gray-300 flex flex-col justify-center gap-6">
          <h1 className="text-3xl font-bold">All Range of Quality Of Bricks</h1>
          <p className="text-lg font-medium w-11/12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam necessitatibus culpa incidunt accusamus consequuntur eos commodi laboriosam?
          </p>
          <button className="border-2 font-bold border-black px-10 py-3 w-fit text-lg">See Below</button>
        </div>
        <div className="w-1/2">
          <img className="h-full w-full object-cover" src="Images/brick.jpg" alt="Brick Man" />
        </div>
      </div>
      {/* BRICKS TYPES */}
      <div className="bg-gray-300 mt-8">
        <div className="bg-[url('/images/bgtypes.png')] text-white bg-cover p-7 text-center flex flex-col gap-7">
          <h1 className="mx-auto sm:text-center font-bold text-4xl">Types Of Bricks</h1>
          <div className="sm:flex sm:flex-nowrap italic text-2xl justify-evenly mt-3 font-semibold">
            <p>Awal Bricks</p>
            <p>Doum Bricks</p>
            <p>Khinger Bricks</p>
            <p>Special Bricks</p>
            <p>Premium Bricks</p>
          </div>
        </div>
      </div>
      {/* TILES OF BRICKS TYPES */}
      {contentarray.map((item, index) => (
        <div
          className={`bg-[url('/images/typesbg.png')]  sm:flex sm:flex-row my-8 w-full ${index % 2 === 1 ? 'sm:flex-row-reverse' : ''
            }`}
          key={index}
        >
          <div className="w-full sm:w-1/2 p-5">
            <Slideshow images={item[0]} />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col justify-center py-3">
            <h1 className="text-center text-3xl font-bold py-2">{item[1]}</h1>
            <div className="text-xl bg-gray-300 p-3 m-3 rounded-lg">
              <h2 className="font-bold underline">Specifications:</h2>
              <div className='text-base mt-2'>
                <table className="w-full">
                  <tbody>
                    {Object.entries(item[2]).map(([key, value]) => (
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
            <div className={`flex flex-col ${index%2 == 0 ? 'items-start': 'items-end'} gap-5 m-3 text-sm sm:text-lg`}>
              <div className="flex border-2 border-black justify-between px-3 py-1 w-fit mx-2">
                <button className='text-sm' onClick={() => decrementNumber(index)}>
                  <AiOutlineMinus />
                </button>
                <button className="text-xl sm:text-2xl px-5 font-bold">{numbers[index]}</button>
                <button className='text-sm' onClick={() => incrementNumber(index)}>
                  <AiOutlinePlus />
                </button>
              </div>
              <button className="bg-gray-800 text-white px-9 py-3 mx-2 w-fit">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
