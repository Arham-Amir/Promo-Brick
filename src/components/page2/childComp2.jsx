'use client'
import Category from './category/category';
import { FaHome } from 'react-icons/fa'
import { AiFillQuestionCircle } from 'react-icons/ai'
import GutkaCategory from './gutkaCategory/gutkaCategory';
import OtherCategory from './otherCategory/otherCategory';
import LazyImage from '@components/base/lazyImage';
import Link from 'next/link';
import TenisSand from './tenis/otherCategory';
import { useEffect, useState } from 'react';

export default function ChildComp2() {
  const [data, setdata] = useState([]);
  const [cloading, setcloading] = useState(true);

  useEffect(() => {
    getUpdatedPriceDate()
  }, []);

  async function getUpdatedPriceDate() {
    try {
      let jsonDataModule = await import(`/public/data/building.json`);
      let jsonData = jsonDataModule.default;
      setdata(prev => {
        return { ...prev, ...jsonData };
      });
    } catch (error) {
    } finally {
      setcloading(false)
    }
  }

  return cloading ? <span className="loading loading-dots loading-lg text-black" /> : <>
    <section className='h-auto max-w-screen'>
      <section className='flex flex-row items-center justify-end ms:justify-between w-4/5 mx-auto pt-5'>
        <section className='hidden ms:flex flex-row gap-3 items-center'>
          <Link className='hover:text-themeColor' href="/"><FaHome size={30} /></Link>
          <p className='text-lg'><Link className='hover:text-themeColor' href="/">Home</Link>/Building Bricks</p>
        </section>
        <a href={'https://wa.me/+923004439445'} target='_blank' className='flex flex-row gap-3 items-center py-2 px-4 w-fit shadow-lg border border-bgLight'>
          <AiFillQuestionCircle size={30} />
          <p className='text-lg'>/Inquire Now</p>
        </a>
      </section>
      <h1 className='w-4/5 border text-center mt-5 p-5 text-5xl mx-auto font-heading font-bold heading-bg'>Building Brick</h1>
      <h1 className='mx-auto w-4/5 text-end p-5'>Prices last updated on: {data["updateDate"]}</h1>
      <section className='flex flex-row flex-wrap justify-center p-5 md:p-10 gap-y-5 w-full'>
        {data["contentarray"].map((da, i) => {
          return <Category key={i} data={da}></Category>
        })}
      </section>
    </section>

    <section className='h-auto max-w-screen'>
      <h1 className='w-4/5 border text-center p-5 text-5xl mx-auto font-heading font-bold heading-bg'>Gutka</h1>
      <section className='flex flex-row flex-wrap justify-center p-5 md:p-10 gap-y-5 w-full'>
        {data["gutkaarray"].map((da, i) => {
          return <GutkaCategory key={i} data={da}></GutkaCategory>
        })}
      </section>
    </section>

    <section className='h-auto max-w-screen'>
      <h1 className='w-4/5 border text-center p-5 text-5xl mx-auto font-heading font-bold heading-bg'>Others</h1>
      <section className='flex flex-row flex-wrap justify-center p-5 md:p-10 gap-y-5 w-full'>
        <OtherCategory data={data["otherarray"][0]}></OtherCategory>
        <TenisSand data={data["otherarray"][1]}></TenisSand>
      </section>
    </section>

    <div className="flex xs:flex-col md:flex-row xs:h-auto md:h-[70vh] w-full md:w-4/5 mx-auto px-5 py-2 my-8">
      <div className="relative xs:h-fit xs:py-8 md:py-0 md:h-full xs:w-full md:w-1/2 px-7 flex flex-col justify-center items-end gap-6">
        <div className="relative z-20 flex flex-col gap-5 w-full">
          <h1 className="text-5xl font-bold font-heading">Building Brick</h1>
          <p className="text-base font-medium w-full md:w-11/12 font-text">
            The term "brick" is used to denote a building unit made of shaped clay, but in modern times it refers to any stone- or clay-based building unit that is joined with cementation working when used in construction.They are used for building walls, foundations, and columns, among others.
          </p>
        </div>
      </div>
      <div className="xs:h-[40vh] ms:h-[60vh] md:h-full xs:w-full md:w-1/2 md:py-16 px-1">
        <LazyImage
          className="h-full w-full object-cover rounded-lg" src="/Building/building.png" />
      </div>
    </div>
  </>

}
