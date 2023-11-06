import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const CategoryDetails = (props = {}) => {
  const [number, setNumber] = useState(1000);

  const incrementNumber = () => {
    setNumber(number + 1000);
  };
  const decrementNumber = () => {
    number != 1000 && setNumber(number - 1000);
  };
  return (
    <section className='flex flex-col items-center gap-3 p-5'>
      <h1 className='text-themeColor text-3xl'>{props.data[1]}</h1>
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
        <button className='rounded-lg bg-themeColor text-black  px-3 py-2 w-fit text-sm'>ADD TO CART</button>
      </section>
    </section>
  );
}

export default CategoryDetails;
