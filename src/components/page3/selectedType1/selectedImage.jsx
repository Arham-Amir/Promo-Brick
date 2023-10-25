'use client'
import { useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";

const SelectedImage = ({data}) => {
  const [curImg, setcurImg] = useState(0);
  return (
    <section style={{ "backgroundImage": `url(${data['Img'][(curImg + 1) % data['Img'].length]})` }} className="flex-1 py-8 bg-bgDark relative bg-cover bg-blend-lighten">
      <FcPrevious onClick={() => curImg == 0 ? setcurImg(data['Img'].length - 1) : setcurImg(curImg - 1)} className="cursor-pointer absolute top-1/2 -translate-y-1/2 left-2 text-4xl z-30" />
      <img className="-translate-x-8 border-2 border-white w-[98%] h-[350px] object-fill" src={data['Img'][curImg]} alt="image not found" />
      <FcNext onClick={() => setcurImg((curImg + 1) % data['Img'].length)} className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-2 text-4xl z-30" />
    </section>
  );
}

export default SelectedImage;
