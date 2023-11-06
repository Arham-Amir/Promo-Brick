import React from 'react';
import Slideshow from '../slideshow/slideshow';
import CategoryDetails from './categoryDetails/categoryDetails';

const Category = (props = {}) => {
  return (
    <section className={`${props.class} bg-white ms:w-1/2 lg:w-1/4 w-full p-5 border border-slate-200 min-h-full`}>
      <section className='h-full flex flex-col'>
        <section className='h-[250px] md:h-[300px]'>
          <Slideshow images={props.data[2]} />
        </section>
        <section className='flex-1'>
          <CategoryDetails data={props.data} />
        </section>
      </section>
    </section>
  );
}

export default Category;
