import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const CategoryDetails = (props = {}) => {
  const [number, setNumber] = useState(5000);

  const incrementNumber = () => {
    setNumber(number + 1000);
  };
  const decrementNumber = () => {
    number != 5000 && setNumber(number - 1000);
  };
  return (
    <section className='flex flex-col items-center gap-3 p-5'>
      <h1 className='text-themeColor text-3xl'>{props.data[1]}</h1>
      <div className='text-base mt-2'>
        <section className="w-full">
          <section className='w-auto'>
            {Object.entries(props.data[2]).map(([key, value], i) => (
              <section key={i} className='flex flex-row gap-8 justify-between'>
                <section className='flex flex-row gap-3 items-start'>
                  <p className="font-semibold">&#8226;</p>
                  <p className="font-semibold">{key}:</p>
                </section>
                <p className='text-right'>{value}</p>
              </section>
            ))}
          </section>
        </section>
      </div>
      <a href="" className='text-sm text-darkColor underline'>Download Report</a>
      <h2 className='text-themeColor text-3xl'>PKR 17.0</h2>
      <section className='flex flex-col ms:flex-row gap-2'>
        <section className="rounded-lg flex flex-row items-center border-2 border-bgLight justify-between p-2 w-fit mx-2">
          <button className='text-sm' onClick={() => decrementNumber()}>
            <AiOutlineMinus />
          </button>
          <p className="px-2 w-fit text-sm">{number}</p>
          <button className='text-sm' onClick={() => incrementNumber()}>
            <AiOutlinePlus />
          </button>
        </section>
        <button className='rounded-lg bg-themeColor text-black  px-3 py-2 w-fit text-base md:text-lg '>ADD TO CART</button>
      </section>
    </section>
  );
}

export default CategoryDetails;
