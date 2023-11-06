'use client'
import Category from './category/category';
import { FaHome } from 'react-icons/fa'
import { AiFillQuestionCircle } from 'react-icons/ai'
import GutkaCategory from './gutkaCategory/gutkaCategory';
import OtherCategory from './otherCategory/otherCategory';

export default function ChildComp2() {
  const contentarray = [
    [['Building/Awal.png', 'Building/Awal1.png'], "Awal Bricks", {
      "Product Type": "A Class",
      "Weight": "3.25kg",
      "Dimensions (L*W*D)": "9.0*4.5*3 Inches",
      "Water Absorption Rate": "13.79%",
      "Ultimate Stree": "2036"
    }],
    [['Building/Special.png', 'Building/Special1.png'], "Special Brick", {
      "Product Type": "A+ Class",
      "Weight": "3.39 Kg",
      "Dimension (L*W*D)": "9.0*4.5*3",
      "Water Absorption Rate": "12.74 %",
      "Ultimate Stree (PSI)": "2288",
    }],
    [['Building/Doum.png', 'Building/Doum1.png'], "Doum Brick", {
      "Product Type": "A Class",
      "Weight": "3.23 Kg",
      "Dimension (L*W*D)": "9.0*4.5*3 Inch",
      "Water Absorption Rate": "15.63 %",
      "Ultimate Stree (PSI)": "1493",
    }],
    [['Building/PSK.png', 'Building/PSK1.png'], "Premium Brick", {
      "Product Type": "A++ Class",
      "Weight": "3.37 Kg",
      "Dimension (L*W*D)": "9.0*4.5*3 (+-, .1)",
      "Water Absorption Rate": "12.39 %",
      "Ultimate Stree (PSI)": "3182",
    }],
    [['Building/Awal.png', 'Building/Awal1.png'], "Khinger Brick", {
      "Product Type": "Class",
      "Weight": "Kg",
      "Dimension (L*W*D)": "9.0*4.5*3 Inch",
      "Water Absorption Rate": "15.63 %",
      "Ultimate Stree (PSI)": "1493",
    }],


  ]

  return (
    <>
      <section className='h-auto max-w-screen'>
        <section className='flex flex-row items-center justify-end ms:justify-between w-4/5 mx-auto pt-5'>
          <section className='hidden ms:flex flex-row gap-3 items-center'>
            <FaHome size={30} />
            <p className='text-lg'>Home/Building Bricks</p>
          </section>
          <section className='flex flex-row gap-3 items-center py-2 px-4 w-fit shadow-lg border border-bgLight'>
            <AiFillQuestionCircle size={30} />
            <p className='text-lg'>/Inquire Now</p>
          </section>
        </section>
        <h1 className='w-4/5 border text-center mt-5 p-5 text-5xl mx-auto font-heading font-bold heading-bg'>Building Brick</h1>
        <section className='flex flex-row flex-wrap justify-center p-5 md:p-10 gap-y-5 w-full'>
          {contentarray.map((data, i) => {
            return <Category key={i} data={data}></Category>
          })}
        </section>
      </section>

      <section className='h-auto max-w-screen'>
        <h1 className='w-4/5 border text-center p-5 text-5xl mx-auto font-heading font-bold heading-bg'>Gutka</h1>
        <section className='flex flex-row flex-wrap justify-center p-5 md:p-10 gap-y-5 w-full'>
          {contentarray.map((data, i) => {
            return i != contentarray.length - 1 && <GutkaCategory key={i} data={data}></GutkaCategory>
          })}
        </section>
      </section>

      <section className='h-auto max-w-screen'>
        <h1 className='w-4/5 border text-center p-5 text-5xl mx-auto font-heading font-bold heading-bg'>Others</h1>
        <section className='flex flex-row flex-wrap justify-center p-5 md:p-10 gap-y-5 w-full'>
          {contentarray.map((data, i) => {
            return i < (contentarray.length-3) && <OtherCategory key={i} data={data}></OtherCategory>
          })}
        </section>
      </section>

      <div className="flex xs:flex-col md:flex-row xs:h-auto md:h-[80vh] w-full md:w-11/12 mx-auto px-5 py-2 my-8">
        <div className="relative xs:h-fit xs:py-8 md:py-0 md:h-full xs:w-full md:w-1/2
     px-7 flex flex-col justify-center items-end gap-6">
          <div className="relative z-20 flex flex-col gap-5 w-full">
            <h1 className="text-5xl font-bold font-heading">Building Brick</h1>
            <p className="text-base font-medium w-full md:w-11/12 font-text">
              The term "brick" is used to denote a building unit made of shaped clay, but in modern times it refers to any stone- or clay-based building unit that is joined with cementation working when used in construction.They are used for building walls, foundations, and columns, among others.
            </p>
          </div>
        </div>
        <div className="xs:h-[40vh] ms:h-[60vh] md:h-full xs:w-full md:w-1/2 md:py-16 px-1">
          <img className="h-full w-full object-cover rounded-lg" src="/Building/building.png" alt="Brick Man" />
        </div>
      </div>
    </>
  )
}

// 'use client'
// import React, {useState} from 'react'
// import Slideshow from './slideshow/slideshow'
// import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
// export default function ChildComp2() {
//   const contentarray = [
//     [['Building/1.jpg', 'Building/2.jpg'], "Awal Bricks", {
//       "Product Type": "A Class",
//       "Weight": "3.25kg",
//       "Dimensions (L*W*D)": "9.0*4.5*3 Inches",
//       "Water Absorption Rate": "13.79%",
//       "Ultimate Stree": "2036"
//     }],
//     [['Building/1.jpg', 'Building/2.jpg'], "Doum Brick", {
//       "Product Type": "A Class",
//       "Weight": "3.23 Kg",
//       "Dimension (L*W*D)": "9.0*4.5*3 Inch",
//       "Water Absorption Rate": "15.63 %",
//       "Ultimate Stree (PSI)": "1493",
//     }],
//     [['Building/1.jpg', 'Building/2.jpg'], "Khinger Brick", {
//       "Product Type": "Class",
//       "Weight": "Kg",
//       "Dimension (L*W*D)": "9.0*4.5*3 Inch",
//       "Water Absorption Rate": "15.63 %",
//       "Ultimate Stree (PSI)": "1493",
//     }],
//     [['Building/1.jpg', 'Building/2.jpg'], "Special Brick", {
//       "Product Type": "A+ Class",
//       "Weight": "3.39 Kg",
//       "Dimension (L*W*D)": "9.0*4.5*3",
//       "Water Absorption Rate": "12.74 %",
//       "Ultimate Stree (PSI)": "2288",
//     }],
//     [['Building/1.jpg', 'Building/2.jpg'], "Premium Brick", {
//       "Product Type": "A++ Class",
//       "Weight": "3.37 Kg",
//       "Dimension (L*W*D)": "9.0*4.5*3 (+-, .1)",
//       "Water Absorption Rate": "12.39 %",
//       "Ultimate Stree (PSI)": "3182",
//     }]
//   ]
//   // Initialize the state with initial values for each item
//   const initialNumbers = contentarray.map(() => 0);
//   const [numbers, setNumbers] = useState(initialNumbers);

//   // Function to increment the number for a specific index
//   const incrementNumber = (index) => {
//     const newNumbers = [...numbers];
//     newNumbers[index] += 1;
//     setNumbers(newNumbers);
//   };

//   // Function to decrement the number for a specific index
//   const decrementNumber = (index) => {
//     const newNumbers = [...numbers];
//     if (newNumbers[index] > 0) {
//       newNumbers[index] -= 1;
//     }
//     setNumbers(newNumbers);
//   };
//   return (
//     <div className='bg-white'>
//       {/* FRONT BANNER */}
//       <div className="flex md:flex-row xs:flex-col-reverse xs:h-auto md:h-[86vh]">
//         <div className="relative xs:h-fit xs:py-8 md:py-0 md:h-full xs:w-full md:w-1/2 bg-gray-300 px-7 flex flex-col justify-center gap-6">
//           {/* Add a pseudo-element with a transparent background */}
//           <div className="absolute bg-cover md:hidden inset-0 bg-black opacity-50 z-10" />

//           <div className="relative z-20 flex flex-col gap-3">
//             <h1 className="text-3xl font-bold">All Range of Quality Of Bricks</h1>
//             <p className="text-lg font-medium w-11/12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam necessitatibus culpa incidunt accusamus consequuntur eos commodi laboriosam?</p>
//             <button className="border-2 font-bold border-black px-10 py-3 w-fit text-lg mt-3">See Below</button>
//           </div>
//         </div>

//         <div className="xs:h-[40vh] md:h-full xs:w-full md:w-1/2">
//           <img className="h-full w-full object-cover" src="Images/brick.jpg" alt="Brick Man" />
//         </div>
//       </div>
//       {/* BRICKS TYPES */}
//       <div className="my-8 bg-[url('/images/bgtypes.png')]">
//         <div className="text-white bg-cover p-7 text-center flex flex-col xs:gap-4 md:gap-7">
//           <h1 className="mx-auto my-0 sm:text-center font-bold text-4xl">Types Of Bricks</h1>
//           <div className="w-[93%] flex flex-wrap md:flex-row flex-col gap-3 italic text-2xl justify-evenly mt-1 font-semibold">
//             <p>Awal Bricks</p>
//             <p>Doum Bricks</p>
//             <p>Khinger Bricks</p>
//             <p>Special Bricks</p>
//             <p>Premium Bricks</p>
//           </div>
//         </div>
//       </div>
//       {/* TILES OF BRICKS TYPES */}
//       {contentarray.map((item, index) => (
//         <div className={`bricktypes bg-[url('/images/typesbg.png')] itemd-center sm:flex xs:flex-col xs:justify-center md:flex-row my-8 w-full ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`} key={index}>
//           <div className="w-full md:w-1/2 p-0 md:p-5">
//             <Slideshow images={type[0]} />
//           </div>
//           <div className="w-full md:w-1/2 flex flex-col justify-center p-3 sm:py-3">
//             <h1 className="text-center text-3xl font-bold py-2">{type[1]}</h1>
//             <div className="text-xl bg-gray-300 p-3 m-3 rounded-lg">
//               <h2 className="font-bold underline">Specifications:</h2>
//               <div className='text-base mt-2'>
//                 <table className="w-full">
//                   <tbody>
//                     {Object.entries(type[2]).map(([key, value]) => (
//                       <tr key={key}>
//                         <td className="font-semibold">&#8226;</td>
//                         <td className="font-semibold">{key}:</td>
//                         <td>{value}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//             <div className="flex justify-end">
//               <div className="flex border-2 border-black justify-between px-3 py-1 w-fit mx-2">
//                     <button className='text-sm' onClick={() => decrementNumber(index)}>
//                         <AiOutlineMinus />
//                     </button>
//                     <button className="text-xl sm:text-2xl px-5 font-bold">{numbers[index]}</button>
//                     <button className='text-sm' onClick={() => incrementNumber(index)}>
//                         <AiOutlinePlus />
//                     </button>
//               </div>
//               <button className="bg-gray-800 text-white px-9 py-3 mx-2 w-fit">
//                 Add To Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }




{
  /*
   <div className="bg-[#C3C6CA] flex md:flex-row xs:flex-col-reverse xs:h-auto md:h-[80vh] w-11/12 mx-auto shadow-md shadow-black px-5 py-2 my-8">
    <div className="relative xs:h-fit xs:py-8 md:py-0 md:h-full xs:w-full md:w-1/2
     px-7 flex flex-col justify-center items-end gap-6">
      <div className="absolute bg-cover md:hidden inset-0 bg-black opacity-50 z-10" />
      <div className="relative z-20 flex flex-col gap-5">
        </p>
        <p className="text-base font-medium w-11/12 font-text">
          We are the manufacturer of Building Bricks and produce the premium quality of Building Bricks in the market with the 30+ years of experience with a highly experienced team in our factory. Which consist of 100% clay, highly durability, eco friendly and great solution for those who love natural look.
        </p>
        <p className="text-base font-medium w-11/12 font-text">
          We provide Building bricks in different designs, options varying from traditional to modern style, sizes,colors, and textures. These Building bricks are customizable based on users’ required specifications.
        </p>
      </div>
    </div>
    <div className="xs:h-[40vh] md:h-full xs:w-full md:w-1/2 py-16 px-1">
      <img className="h-full w-full object-cover border-4 border-white rounded-2xl shadow-md shadow-black" src="/Building/building.jpg" alt="Brick Man" />
    </div>
  </div>
    <section className="flex flex-row gap-5 bg-bg relative">
    <Types data={contentarray} settype={(t) => settype(t)} type={type} />
    <SelectedType data={contentarray[type]} />
  </section>
  */
}
