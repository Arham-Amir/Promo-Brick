import React from 'react';
import Slideshow from '../slideshow/slideshow';
import CategoryDetails from './categoryDetails/categoryDetails';

const Category = (props = {}) => {
  return (
    <section className={`${props.class} bg-white md:w-1/2 lg:w-1/3 w-full px-5 pb-5 border border-slate-200`}>
      <section className='h-auto'>
        <section className='h-[250px] md:h-[300px]'>
          <Slideshow images={props.data[0]} />
        </section>
        <section>
          <CategoryDetails data={props.data} />
        </section>
      </section>
    </section>
  );
}

export default Category;
