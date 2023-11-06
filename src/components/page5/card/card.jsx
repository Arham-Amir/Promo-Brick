import LazyImage from '@components/base/lazyImage';
import React from 'react';

const Card = (props) => {
  return (
    <section className={`${props.class}`}>
      <section className='flex flex-col items-center gap-3'>
        <section className='overflow-y-hidden relative group/hover rounded-md border-2 hover:scale-x-110 transition-all duration-200'>
          <LazyImage className='h-[300px] w-full object-fill' src={props.data[1]}/>
          <div className='bg-black/30 border-t-2 backdrop-blur-sm flex flex-col justify-center gap-3 p-3 items-center absolute z-10 bottom-0 w-full text-white h-[20%] group-hover/hover:h-[75%]  transition-all duration-300'>
            <h1 className='font-bold text-xl'>{props.data[0]}</h1>
            <button className="hidden group-hover/hover:block btn" onClick={() => document.getElementById('my_modal_3').showModal()}>View Images</button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box flex flex-col gap-5 items-center">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</button>
                </form>
                <div className="modal-box">
                  <LazyImage className='h-full w-full object-fill' src={props.data[1]}/>
                </div>
              </div>
            </dialog>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Card;
