'use client'
import { useState } from "react";
import SelectedType from "./selectedType/selectedType";
import Types from "./types/types";
import LazyImage from "@components/base/lazyImage";

const ChildComp = () => {
  const [type, settype] = useState('Handmade Yellow');
  const [data, setdata] = useState({
    'Handmade Yellow': {
      'type': "Clay Brick",
      'size': "Imperial/Metric",
      'color': "Yellow-Pale yellow",
      'img': '/Facing/handmadeyellow.png',
      'desc': "Craftspeople with great talent create handmade bricks by depositing a clay \"clot\" into a sanded mold. As a result, the product has a tighter texture than its machine-made counterparts and has personality and uniqueness.",
      'data': [
        {
          'Name': 'Simple',
          'Img': ['/Facing/HandmadeSimple1.png', '/Facing/HandmadeSimple2.png']
        },
        {
          'Name': 'Textured',
          'Img': ['/Facing/HandmadeTextured1.png', '/Facing/HandmadeTextured2.png']
        },
        {
          'Name': 'Half Shaded',
          'Img': ['/Facing/HandmadeHalfShaded1.png', '/Facing/HandmadeHalfShaded2.png']
        },
      ],
    },
    'Handmade Red': {
      'type': "Clay Brick",
      'size': "Imperial/Metric",
      'color': "Red with white bends",
      'img': '/Facing/handmade1.png',
      'desc': "Craftspeople with great talent create handmade bricks by depositing a clay \"clot\" into a sanded mold. As a result, the product has a tighter texture than its machine-made counterparts and has personality and uniqueness.",
      'data': [
        {
          'Name': 'Smooth Red',
          'Img': ['/Facing/HandmadeSmoothRed1.png', '/Facing/HandmadeSmoothRed2.png']
        },
        {
          'Name': 'Weathered',
          'Img': ['/Facing/HandmadeWeathered1.png', '/Facing/HandmadeWeathered2.png']
        },
        {
          'Name': 'Reclaimed',
          'Img': ['/Facing/HandmadeReclaimed1.png', '/Facing/HandmadeReclaimed2.png']
        },
        {
          'Name': 'Weather Tumbled',
          'Img': ['/Facing/HandmadeWeatheredTumbled1.png', '/Facing/HandmadeWeatheredTumbled2.png']
        },
      ],
    },
    'Wire Cut': {
      'type': "Clay Brick",
      'size': "Imperial/Metric",
      'color': "Red-Orange with white bands",
      'img': '/Facing/wirecut.png',
      'desc': "Clay is squeezed into a long, rectangular shape by forcing it through an extruder. A die is then used to cut the necessary brick module, and wires are used to cut each brick individually. Character can be added by adding different textures. A clean, square, modular brick is the end product.",
      'data': [
        {
          'Name': 'Simple',
          'Img': ['/Facing/wirecutSimple1.png', '/Facing/wirecutSimple2.png']
        },
        {
          'Name': 'Weathered',
          'Img': ['/Facing/wirecutWeathered1.png', '/Facing/wirecutWeathered2.png']
        },
        {
          'Name': 'Tiles',
          'Img': ['/Facing/wirecutslips1.png', '/Facing/HandmadeHalfShaded2.png']
        },
      ],
    },
    'Machine Press': {
      'type': "Clay Brick",
      'size': "Imperial/Metric",
      'color': "Multi Colours",
      'img': '/Facing/machinepress.png',
      'desc': "Handmade brick are made by skilled craftsmen and involves throwing a ‘clot’ of clay into a sanded mould. This results in a characterful, unique product with a tighter texture than machine made equivalents.",
      'data': [
        {
          'Name': 'Simple',
          'Img': ['/Facing/MachinePressSimple1.png', '/Facing/MachinePressSimple2.png']
        },
        {
          'Name': 'Weathered',
          'Img': ['/Facing/MachinePressWeathered1.png', '/Facing/MachinePressWeathered2.png']
        },
        {
          'Name': 'Tiles',
          'Img': ['/Facing/MachinePressTiles1.png', '/Facing/MachinePressTiles2.png']
        },
      ],
    },
  });
  return (
    <>

      <section className="flex flex-col md:flex-row  bg-bg relative">
        <Types data={Object.keys(data)} settype={(t) => settype(t)} type={type} />
        <SelectedType data={data[type]} type={type} />
      </section>
      <div className="bg-white flex md:flex-row xs:flex-col xs:h-auto md:h-[70vh] w-full md:w-4/5 mx-auto px-5 py-2 my-8">
        <div className="relative xs:h-fit xs:py-8 md:py-0 md:h-full xs:w-full md:w-1/2 px-7 flex flex-col justify-center items-end gap-6">
          <div className="relative z-20 flex flex-col gap-5 w-full">
            <h1 className="text-5xl font-bold font-heading">Facing Brick</h1>
            <p className="text-base font-medium w-full md:w-11/12 font-text">
              Facing bricks, as the name implies, are manufactured to be used as facing, i.e. as the exterior of the wall. These bricks are different from other structural brickwork and carry a very clean and even appearance. Since their primary use is to make the look of the building aesthetic and pleasant, facing bricks are made of different kinds of materials, mainly clay.
            </p>
          </div>
        </div>
        <div className="xs:h-[40vh] ms:h-[60vh] md:h-full xs:w-full md:w-1/2 md:py-16 px-1">
          <LazyImage
           className="h-full w-full object-cover  rounded-lg" src="/Facing/facing.jpg"/>
        </div>
      </div>
    </>
  );
}

export default ChildComp;
