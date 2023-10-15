'use client'
import { useState } from "react";
import Card from "./card/card";

const ChildComp = () => {
  const [arr, setarr] = useState([
    ["Size 2¼ X 1 x 9", '/images/page3/1.jpg', "025"],
    ["Size 2¼ X 1 x 9", '/images/page3/2.jpg', "125"],
    ["Size 2¼ X 1 x 9", '/images/page3/3.jpg', "225"],
    ["Size 2¼ X 1 x 9", '/images/page3/4.jpg', "325"],
    ["Size 2¼ X 1 x 9", '/images/page3/5.jpg', "525"],
    ["Size 2¼ X 1 x 9", '/images/page3/6.jpg', "625"],
    ["Size 2¼ X 1 x 9", '/images/page3/7.jpg', "725"],
    ["Size 2¼ X 1 x 9", '/images/page3/8.jpg', "825"],
    ["Size 2¼ X 1 x 9", '/images/page3/9.jpg', "925"],
    ["Size 2¼ X 1 x 9", '/images/page3/10.jpg', "1025"],
    ["Size 2¼ X 1 x 9", '/images/page3/11.jpg', "1125"],
    ["Size 2¼ X 1 x 9", '/images/page3/12.jpg', "1225"],
    ["Size 2¼ X 1 x 9", '/images/page3/13.jpg', "1325"],
    ["Size 2¼ X 1 x 9", '/images/page3/14.jpg', "1425"],
    ["Size 2¼ X 1 x 9", '/images/page3/15.jpg', "1525"],
    ["Size 2¼ X 1 x 9", '/images/page3/16.jpg', "1625"],
    ["Size 2¼ X 1 x 9", '/images/page3/17.jpg', "1725"],
    ["Size 2¼ X 1 x 9", '/images/page3/18.jpg', "1825"],
    ["Size 2¼ X 1 x 9", '/images/page3/19.jpg', "1925"],
    ["Size 2¼ X 1 x 9", '/images/page3/20.jpg', "2025"],
    ["Size 2¼ X 1 x 9", '/images/page3/21.jpg', "2125"],
    ["Size 2¼ X 1 x 9", '/images/page3/22.jpg', "2225"],
    ["Size 2¼ X 1 x 9", '/images/page3/23.jpg', "2325"],
    ["Size 2¼ X 1 x 9", '/images/page3/24.jpg', "2425"],
    ["Size 2¼ X 1 x 9", '/images/page3/25.jpg', "2525"],
    ["Size 2¼ X 1 x 9", '/images/page3/26.jpg', "2625"],
    ["Size 2¼ X 1 x 9", '/images/page3/27.jpg', "2725"],
    ["Size 2¼ X 1 x 9", '/images/page3/28.jpg', "2825"],
    ["Size 2¼ X 1 x 9", '/images/page3/29.jpg', "2925"],
    ["Size 2¼ X 1 x 9", '/images/page3/30.jpg', "3025"],
    ["Size 2¼ X 1 x 9", '/images/page3/31.jpg', "3125"],
    ["Size 2¼ X 1 x 9", '/images/page3/32.jpg', "3225"],
    ["Size 2¼ X 1 x 9", '/images/page3/33.jpg', "3325"],
    ["Size 2¼ X 1 x 9", '/images/page3/34.jpg', "3425"],
    ["Size 2¼ X 1 x 9", '/images/page3/35.jpg', "3525"],
    ["Size 2¼ X 1 x 9", '/images/page3/36.jpg', "3625"],
    ["Size 2¼ X 1 x 9", '/images/page3/37.jpg', "3725"],
    ["Size 2¼ X 1 x 9", '/images/page3/38.jpg', "3825"],
    ["Size 2¼ X 1 x 9", '/images/page3/39.jpg', "3925"],
  ]);
  return (
    <section>
      <section className="w-screen h-[40vh] bg-[url('/images/bgtypes.png')] flex justify-center items-center text-white flex-col gap-4">
        <h1 className="text-4xl font-bold">Roof Tiles</h1>
        <p className="w-[70%] text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse optio reprehenderit quod harum dolores ratione saepe ducimus, fugit expedita quidem?</p>
      </section>
      <h1 className="px-10 mt-10 text-3xl font-bold">Roof Tile Designs :</h1>
      <section className="grid xs:grid-cols-1 ms:grid-cols-2 lg:grid-cols-4 p-10 gap-10 place-items-center place-content-center">
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
              <iframe className='w-full h-full' src="https://docs.google.com/forms/d/e/1FAIpQLSfjMUTbqz6CTpcUKyLU6jUBzVDkJJzHmv3K7hZLxA53NI8VgQ/viewform?embedded=true">Loading…</iframe>
            </div>
        </div>
      </dialog>
    </section>
  );
}

export default ChildComp;
