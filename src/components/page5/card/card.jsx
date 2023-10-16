import Image from 'next/image';
import React from 'react';

const Card = (props) => {
  return (
    <section className={`${props.class}`}>
      <section className='flex flex-col items-center gap-3'>
        <section className='overflow-y-hidden relative group/hover shadow-md rounded-md shadow-black border-2 hover:scale-x-110 transition-all duration-200'>
          <Image loading="lazy" height='0' width='0' className='h-[300px] object-fill' src={props.data[1]} alt="" />
          <div className='bg-black/30 border-t-2 backdrop-blur-sm flex flex-col justify-center gap-3 p-3 items-center absolute z-10 bottom-0 w-full text-white h-[20%] group-hover/hover:h-[75%]  transition-all duration-300'>
            <h1 className='font-bold text-xl'>{props.data[0]}</h1>
            <p className='hidden group-hover/hover:block'>
              Lorem ipsum dolor sit amet.
            </p>
            <button className="hidden group-hover/hover:block btn" onClick={() => document.getElementById('my_modal_3').showModal()}>View Images</button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box flex flex-col gap-5 items-center">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</button>
                </form>
                <div className="modal-box">
                  <Image loading="lazy" height='0' width='0' src={props.data[1]} alt="" />
                </div>
              </div>
            </dialog>
          </div>
        </section>
        <button className="btn bg-darkColor text-white w-fit hover:rotate-2"
          onClick={() => document.getElementById('my_modal_4').showModal()}>Add to Cart</button>
      </section>
    </section>
  );
}

export default Card;
