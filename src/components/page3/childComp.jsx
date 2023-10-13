'use client'
import { useState } from "react";
import SelectedType from "./selectedType/selectedType";
import Types from "./types/types";

const ChildComp = () => {
  const [type, settype] = useState('Hand Made');
  const [data, setdata] = useState({
    'Hand Made': [{
      'Name': 'Red Tile',
      'Simple': {
        'Color': ['red', 'yellow'],
        'Sizes': ['10m', '20m', '30m'],
        'Packing Detail': ["Lorem ipsum dolor sit amet", ["consectetur adipisicing elit"]],
      },
      'Img': ['/images/brick.jpg', '/images/slider1.jpg']
    },
    {
      'Name': 'Yellow Tile',
      'Simple': {
        'Color': ['red', 'yellow'],
        'Sizes': ['10m', '20m', '30m'],
        'Packing Detail': ["Lorem ipsum dolor sit amet", ["consectetur adipisicing elit"]],
      },
      'Img': ['/images/brick.jpg', '/images/slider1.jpg']
    }],
   'Wire Cutt': [{
      'Name': 'Yellow Tile',
      'Simple': {
        'Color': ['red', 'yellow'],
        'Sizes': ['10m', '20m', '30m'],
        'Packing Detail': ["Lorem ipsum dolor sit amet", ["consectetur adipisicing elit"]],
      },
      'Img': ['/images/brick.jpg', '/images/slider1.jpg']
    },
    {
      'Name': 'Green Tile',
      'Simple': {
        'Color': ['red', 'yellow'],
        'Sizes': ['10m', '20m', '30m'],
        'Packing Detail': ["Lorem ipsum dolor sit amet", ["consectetur adipisicing elit"]],
      },
      'Img': ['/images/brick.jpg', '/images/slider1.jpg']
    }],
   'Machine Press': [{
      'Name': 'Red Tile',
      'Simple': {
        'Color': ['red', 'yellow'],
        'Sizes': ['10m', '20m', '30m'],
        'Packing Detail': ["Lorem ipsum dolor sit amet", ["consectetur adipisicing elit"]],
      },
      'Img': ['/images/brick.jpg', '/images/slider1.jpg']
    },
    {
      'Name': 'Yellow Tile',
      'Simple': {
        'Color': ['red', 'yellow'],
        'Sizes': ['10m', '20m', '30m'],
        'Packing Detail': ["Lorem ipsum dolor sit amet", ["consectetur adipisicing elit"]],
      },
      'Img': ['/images/brick.jpg', '/images/slider1.jpg']
    }],
  });
  return (
    <section className="flex flex-row bg-white relative">
      <Types data = {Object.keys(data)} settype={(t) => settype(t)} type= {type}/>
      <SelectedType data={data[type]} />
    </section>
  );
}

export default ChildComp;
