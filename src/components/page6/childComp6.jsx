'use client'
import Category from './category/category';
import { FaHome } from 'react-icons/fa'
import { AiFillQuestionCircle } from 'react-icons/ai'
import Image from 'next/image';
import LazyImage from '@components/base/lazyImage';
import Link from 'next/link';

export default function ChildComp6() {
  const simplePots = [
    ["Simple in conical shape", {
      "Size": '12"/14"',
      "Color": "Natural",
      "Notes": "Sets of 2 pots"
    }, ["/Pots/1.jpg"], "PB-K-017S"],
    ["Simple plain in bottle shaped", {
      "Size": '12"/14"',
      "Color": "Natural",
      "Notes": "Sets of 3 pots"
    }, ["/Pots/2.jpg"], "PB-K-001S"],
    ["Simple plain with roop style", {
      "Size": '12"/14"',
      "Color": "Natural",
      "Notes": "Sets of 3 pots"
    }, ["/Pots/3.jpg"], "PB-K-007S"],
    ["Simple plain in Bowl Shape", {
      "Size": '10"/08"',
      "Color": "Natural",
      "Notes": "Sets of 3 pots"
    }, ["/Pots/4.jpg"], "PB-K-004S"],
    ["Simple plain with lines", {
      "Size": '14"18"',
      "Color": "Natural",
      "Notes": "Sets of 3 pots"
    }, ["/Pots/5.jpg"], "PB-K-006S"],
    ["Simple plain", {
      "Size": '16"/16"',
      "Color": "Natural",
      "Notes": "Sets of 3 pots"
    }, ["/Pots/6.jpg"], "PB-K-012S"],
    ["Simple plain with leaf desgined", {
      "Size": '18"-12"/16"-10"',
      "Color": "Natural",
      "Notes": "Sets of 3 pots"
    }, ["/Pots/7.jpg"], "PB-029S"],
    ["Simple plain Rounded", {
      "Size": '18"-12"/18"-12"',
      "Color": "Natural",
      "Notes": "Sets of 3 pots"
    }, ["/Pots/8.jpg"], "PB-021S"],
    ["Simple plain with leaf desgined", {
      "Size": '12"12"',
      "Color": "Natural",
      "Notes": "Sets of 4 pots"
    }, ["/Pots/9.jpg"], "PB-K-005S"],
    ["Simple plain", {
      "Size": '14"/16"',
      "Color": "Natural",
      "Notes": "Sets of 4 pots"
    }, ["/Pots/10.jpg"], "PB-K-011S"],
    ["Simple Plain with Ring Rope Style", {
      "Size": '22"-12"/18"-12"',
      "Color": "Natural",
      "Notes": "Sets of 4 pots"
    }, ["/Pots/11.jpg"], "PB-019S"],
    ["Simple plain in Conical shaped", {
      "Size": '24"/28"',
      "Color": "Natural",
      "Notes": "Sets of 5 pots"
    }, ["/Pots/13.jpg"], "PB-K-002S"],
    ["Simple plain with Ring style", {
      "Size": '24"-12"/20"-08"',
      "Color": "Natural",
      "Notes": "Sets of 5 pots"
    }, ["/Pots/14.jpg"], "PB-018S"],
    ["Simple plain in Cylinderical shape with Saucers", {
      "Size": '18"-8"/16"-8"',
      "Color": "Natural",
      "Notes": "Sets of 5 pots"
    }, ["/Pots/12.jpg"], "PB-020S"],
  ]
  const specialPots = [
    ["Special Painted", {
      "Size": '16"/18"',
      "Color": "White Painted",
      "Notes": "Sets of 3 pots"
    }, ["/Pots/18.jpg"], "PB-K-013SP"],
    ["Special Painted", {
      "Size": '16"/18"',
      "Color": "White Painted",
      "Notes": "Sets of 4 pots"
    }, ["/Pots/19.jpg"], "PB-K-016SP"],
    ["Plain Painted", {
      "Size": '16"-8"/12"-8"',
      "Color": "Painted",
      "Notes": "Sets of 3 pots"
    }, ["/Pots/24.jpg"], "PB-028SP"],
    ["Bowl shaped with handle", {
      "Size": '12"/06"',
      "Color": "Natural",
      "Notes": "Sets of 3 pots"
    }, ["/Pots/22.jpg"], "PB-K-009SPL"],
    ["Leaf style with special texture", {
      "Size": '14"/12"',
      "Color": "Textured",
      "Notes": "Sets of 3 pots"
    }, ["/Pots/23.jpg"], "PB-K-015FC"],
    ["Special Desgined Narrow base", {
      "Size": '20"/26"',
      "Color": "Natural",
      "Notes": "Single"
    }, ["/Pots/20.jpg"], "PB-K-003SPL"],
    ["Special Desgined Narrow base wirh color style", {
      "Size": '16"24"',
      "Color": "Natural",
      "Notes": "Single"
    }, ["/Pots/17.jpg"], "PB-P-014S"],
  ]
  const urnPots = [
    ["Bottle Shapped Urn", {
      "Size": '08"/24"',
      "Color": "Natural",
      "Notes": "Single"
    }, ["/Pots/15.jpg"], "PB-K-008SPL"],
    ["Special Desgined Urn with Handle", {
      "Size": '10"/24"',
      "Color": "Natural",
      "Notes": "Single"
    }, ["/Pots/16.jpg"], "PB-K-010SPL"],
    ["Fancy Urn with special texture", {
      "Size": '10"/24"',
      "Color": "Natural",
      "Notes": "Single"
    }, ["/Pots/21.jpg"], "PB-K-030FC"],
  ]
  return (
    <>
      <section className='h-auto max-w-screen'>
        <section className='flex flex-row items-center justify-end ms:justify-between w-4/5 mx-auto pt-5'>
          <section className='hidden ms:flex flex-row gap-3 items-center'>
            <Link className='hover:text-themeColor' href="/"><FaHome size={30} /></Link>
            <p className='text-lg'><Link className='hover:text-themeColor' href="/">Home</Link>/Pots</p>
          </section>
          <a href={'https://wa.me/+923004439445'} target='_blank' className='flex flex-row gap-3 items-center py-2 px-4 w-fit shadow-lg border border-bgLight'>
            <AiFillQuestionCircle size={30} />
            <p className='text-lg'>/Inquire Now</p>
          </a>
        </section>
        <h1 className='w-4/5 border text-center mt-5 p-5 text-3xl md:text-5xl mx-auto font-heading font-bold heading-bg'>Simple Pots</h1>
        <section className='flex flex-row flex-wrap justify-center p-5 md:p-10 gap-y-5 w-full'>
          {simplePots.map((data, i) => {
            return <Category key={i} data={data}></Category>
          })}
        </section>
        <h1 className='w-4/5 border text-center mt-5 p-5 text-5xl mx-auto font-heading font-bold heading-bg'>Special Pots</h1>
        <section className='flex flex-row flex-wrap justify-center p-5 md:p-10 gap-y-5 w-full'>
          {specialPots.map((data, i) => {
            return <Category key={i} data={data}></Category>
          })}
        </section>
        <h1 className='w-4/5 border text-center mt-5 p-5 text-5xl mx-auto font-heading font-bold heading-bg'>URN</h1>
        <section className='flex flex-row flex-wrap justify-center p-5 md:p-10 gap-y-5 w-full'>
          {urnPots.map((data, i) => {
            return <Category key={i} data={data}></Category>
          })}
        </section>
      </section>

      <div className="flex xs:flex-col md:flex-row xs:h-auto md:h-[80vh] w-full md:w-4/5 mx-auto px-5 py-2 my-8">
        <div className="relative xs:h-fit xs:py-8 md:py-0 md:h-full xs:w-full md:w-1/2
     px-7 flex flex-col justify-center items-end gap-6">
          <div className="relative z-20 flex flex-col gap-5 w-full">
            <h1 className="text-5xl font-bold font-heading">Clay Pots</h1>
            <p className="text-base font-medium w-full md:w-11/12 font-text">
              Clay pots are an ancient material that has been used in the humblest of plant pots but also features in historical art like the Dynasty terracotta army.The material is fairly simple, just clay-based, but growing in terracotta has some benefits over plastic and other types of pots.
            </p>
            <p className="text-base font-medium w-full md:w-11/12 font-text">
              Clay pots provide a healthy environment for most plants. The porosity of clay allows air and moisture to penetrate the sides of the pot. This moisture and air is utilized by the fine roots located at the edge of the soil ball. Clay pots also act like a wick to remove excess moisture from the potting soil.
            </p>
            <p className="text-base font-medium w-full md:w-11/12 font-text">
              There are no toxic materials or chemicals that go into the making of clay pots. It is eco-friendly, and safe to use even on all kitchen appliances and can be used with all types of foods as well.
            </p>
          </div>
        </div>
        <div className="xs:h-[40vh] ms:h-[60vh] md:h-full xs:w-full md:w-1/2 md:py-16 px-1">
          <LazyImage
            className="h-full w-full object-cover rounded-lg" src="/Pots/pots.jpg" />
        </div>
      </div>

    </>
  )
}
