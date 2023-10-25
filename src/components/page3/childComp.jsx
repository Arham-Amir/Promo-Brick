'use client'
import { useState } from "react";
import SelectedType from "./selectedType/selectedType";
import Types from "./types/types";

const ChildComp = () => {
  const [type, settype] = useState('Handmade Red');
  const [data, setdata] = useState({
    'Handmade Red': {
      'type':"Clay Brick",
      'size':"10m",
      'color':"Red",
      'img': '/page3/handmade1.png',
      'desc': "Handmade brick are made by skilled craftsmen and involves throwing a ‘clot’ of clay into a sanded mould. This results in a characterful, unique product with a tighter texture than machine made equivalents.",
      'data':  [
        {
          'Name': 'Smooth Red',
          'Img': ['/page3/HandmadeSmoothRed1.png', '/page3/HandmadeSmoothRed2.png']
        },
        {
          'Name': 'Weathered',
          'Img': ['/page3/HandmadeWeathered1.png', '/page3/HandmadeWeathered2.png']
        },
        {
          'Name': 'Reclaimed',
          'Img': ['/page3/HandmadeReclaimed1.png', '/page3/HandmadeReclaimed2.png']
        },
        {
          'Name': 'Weather Tumbled',
          'Img': ['/page3/HandmadeWeatheredTumbled1.png', '/page3/HandmadeWeatheredTumbled2.png']
        },
      ],
    },
    'Handmade Yellow': {
      'type':"Clay Brick",
      'size':"10m",
      'color':"Red",
      'img': '/page3/handmadeyellow.png',
      'desc': "Handmade brick are made by skilled craftsmen and involves throwing a ‘clot’ of clay into a sanded mould. This results in a characterful, unique product with a tighter texture than machine made equivalents.",
      'data':  [
        {
          'Name': 'Simple',
          'Img': ['/page3/HandmadeSimple1.png', '/page3/HandmadeSimple2.png']
        },
        {
          'Name': 'Textured',
          'Img': ['/page3/HandmadeTextured1.png', '/page3/HandmadeTextured2.png']
        },
        {
          'Name': 'Half Shaded',
          'Img': ['/page3/HandmadeHalfShaded1.png', '/page3/HandmadeHalfShaded2.png']
        },
      ],
    },
    'Wire Cut': {
      'type':"Clay Brick",
      'size':"10m",
      'color':"Red",
      'img': '/page3/wirecut.png',
      'desc': "Handmade brick are made by skilled craftsmen and involves throwing a ‘clot’ of clay into a sanded mould. This results in a characterful, unique product with a tighter texture than machine made equivalents.",
      'data':  [
        {
          'Name': 'Simple',
          'Img': ['/page3/wirecutSimple1.png', '/page3/wirecutSimple2.png']
        },
        {
          'Name': 'Weathered',
          'Img': ['/page3/wirecutWeathered1.png', '/page3/wirecutWeathered2.png']
        },
        {
          'Name': 'Tiles',
          'Img': ['/page3/wirecutslips1.png', '/page3/HandmadeHalfShaded2.png']
        },
      ],
    },
    'Machine Press': {
      'type':"Clay Brick",
      'size':"10m",
      'color':"Red",
      'img': '/page3/machinepress.png',
      'desc': "Handmade brick are made by skilled craftsmen and involves throwing a ‘clot’ of clay into a sanded mould. This results in a characterful, unique product with a tighter texture than machine made equivalents.",
      'data':  [
        {
          'Name': 'Simple',
          'Img': ['/page3/MachinePressSimple1.png', '/page3/MachinePressSimple2.png']
        },
        {
          'Name': 'Weathered',
          'Img': ['/page3/MachinePressWeathered1.png', '/page3/MachinePressWeathered2.png']
        },
        {
          'Name': 'Tiles',
          'Img': ['/page3/MachinePressTiles1.png', '/page3/MachinePressTiles2.png']
        },
      ],
    },
  });
  return (
    <section className="flex flex-row bg-bg relative">
      <Types data={Object.keys(data)} settype={(t) => settype(t)} type={type} />
      <SelectedType data={data[type]} type = {type} />
    </section>
  );
}

export default ChildComp;
