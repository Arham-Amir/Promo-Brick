'use client'
import { useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";

const SelectedType = (props = {}) => {
  const [curImg, setcurImg] = useState(0);
  return (
    <section className="p-10 flex-1 mx-auto">
      <h1 className="w-fit mx-auto text-3xl py-2 px-4 text-black">Hand Made</h1>
      <p className="w-20 p-[2px] mx-auto bg-black"></p>
      {props.data.map((data, index) => {
        return <section key={index} className="mt-8 pr-16 flex flex-row items-center justify-center w-full text-black">
          <section className="flex-1 flex flex-col gap-5 items-center">
            <h1 className="text-2xl font-semibold">{data['Name']}</h1>
            <section className="flex flex-col gap-2">
              <h1 className="text-lg font-bold">Simple :</h1>
              {Object.keys(data['Simple']).map((el, i) => {
                return <>
                  <Bullet key={i} data={el} />
                  {data['Simple'][el].map((el, i) => {
                    return <SubBullet key={i} data={el} />
                  })}
                </>
              })}
            </section>
          </section>
          <section style={{ "backgroundImage": `url(${data['Img'][(curImg + 1) % data['Img'].length]})` }} className="flex-1 py-8 bg-bgDark relative bg-cover bg-blend-lighten">
            <FcPrevious onClick={() => curImg == 0 ? setcurImg(data['Img'].length - 1) : setcurImg(curImg - 1)} className="cursor-pointer absolute top-1/2 -translate-y-1/2 left-2 text-4xl z-30" />
            <img className="-translate-x-8 border-2 border-white w-[98%] h-[300px] object-cover" src={data['Img'][curImg]} alt="image not found" />
            <FcNext onClick={() => setcurImg((curImg + 1) % data['Img'].length)} className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-2 text-4xl z-30" />
          </section>
        </section>
      })}

    </section>
  );
}

export default SelectedType;

function Bullet(props = {}) {
  return (
    <section className="pr-16 flex flex-row items-center gap-4 hover:scale-125 hover:text-themeColor transition-all duration-150 font-bold">
      <p className="w-8 h-[2px] bg-black/60"></p>
      <h1>{props.data}</h1>
    </section>)
}

function SubBullet(props = {}) {
  return (
    <section className="pl-8 pr-16 flex flex-row items-center gap-4 hover:scale-125 hover:text-themeColor transition-all duration-150">
      <section className="flex flex-col gap-[1px]">
        <p className="w-8 h-[2px] bg-black/60"></p>
        <p className="w-8 h-[2px] bg-black/60"></p>
      </section>
      <h1>{props.data}</h1>
    </section>)
}
