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
    <section className='flex flex-col justify-end items-center gap-3 p-5'>
      <h1 className='text-themeColor text-3xl font-heading text-center'>{props.data[0]}</h1>
      <div className='text-base mt-2'>
        <section className="w-full">
          <section className='w-auto'>
            {Object.entries(props.data[1]).map(([key, value], i) => (
              <section key={i} className='flex flex-row gap-8 justify-between'>
                <section className='flex flex-row gap-2 items-start'>
                  <p className="font-semibold">&#8226;</p>
                  <p className="font-semibold">{key}:</p>
                </section>
                <p className='text-right'>{value}</p>
              </section>
            ))}
          </section>
        </section>
      </div>
    </section>
  );
}

export default CategoryDetails;
