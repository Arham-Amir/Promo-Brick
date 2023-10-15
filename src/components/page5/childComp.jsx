'use client'
import { useState } from "react";
import Card from "./card/card";

const ChildComp = () => {
  const [arr, setarr] = useState([
    ["Floor Design 1", '/images/1.jpg'],
    ["Floor Design 2", '/images/2.jpg'],
    ["Floor Design 3", '/images/3.jpg'],
    ["Floor Design 4", '/images/4.jpg'],
    ["Floor Design 5", '/images/5.jpg'],
    ["Floor Design 6", '/images/6.jpg'],
    ["Floor Design 7", '/images/7.jpg']
  ]);
  return (
    <section>
      <section className="w-screen h-[40vh] bg-[url('/images/bgtypes.png')] flex justify-center items-center text-white flex-col gap-4">
        <h1 className="text-4xl font-bold">Floor Tiles</h1>
        <p className="w-[70%] text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse optio reprehenderit quod harum dolores ratione saepe ducimus, fugit expedita quidem?</p>
      </section>
      <h1 className="px-10 mt-10 text-3xl font-bold">Floor Tile Designs :</h1>
      <section className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10 place-items-center place-content-center">
        {arr.map((el, i) => {
          return <Card key={i} data={el} class="" />
        })}
      </section>
      <dialog id="my_modal_4" className="modal min-w-[80vh] min-h-[80vh]">
          <div className="modal-box flex flex-col gap-5 items-center w-full h-full">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</button>
            </form>
            <div className="modal-box w-full h-full">
              <iframe className='w-full h-full' src="https://docs.google.com/forms/d/e/1FAIpQLSfjMUTbqz6CTpcUKyLU6jUBzVDkJJzHmv3K7hZLxA53NI8VgQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
          </div>
        </dialog>
    </section>
  );
}

export default ChildComp;
