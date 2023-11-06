'use client'
import Category from './category/category';
import { FaHome } from 'react-icons/fa'
import { MdFireTruck } from 'react-icons/md'

export default function ChildComp6() {
  const simplePots = [
    ["Simple in conical shape", {
      "Size": '12"/14"',
      "Color": "Natural",
      "Notes": "Sets of 2 pots"
    }, ["/Pots/1.jpg"]],
    ["Simple plain in bottle shaped", {
      "Size": '12"/14"',
      "Color": "Natural",
      "Notes": "Sets of 3 pots"
    }, ["/Pots/2.jpg"]],
    ["Simple plain with roop style", {
      "Size": '12"/14"',
      "Color": "Natural",
      "Notes": "Sets of 3 pots"
    }, ["/Pots/3.jpg"]],
    ["Simple plain in Bowl Shape", {
      "Size": '10"/08"',
      "Color": "Natural",
      "Notes": "Sets of 3 pots"
    }, ["/Pots/4.jpg"]],
    ["Simple plain with lines", {
      "Size": '14"18"',
      "Color": "Natural",
      "Notes": "Sets of 3 pots"
    }, ["/Pots/5.jpg"]],
    ["Simple plain", {
      "Size": '16"/16"',
      "Color": "Natural",
      "Notes": "Sets of 3 pots"
    }, ["/Pots/6.jpg"]],
    ["Simple plain with leaf desgined", {
      "Size": '18"-12"/16"-10"',
      "Color": "Natural",
      "Notes": "Sets of 3 pots"
    }, ["/Pots/7.jpg"]],
    ["Simple plain Rounded", {
      "Size": '18"-12"/18"-12"',
      "Color": "Natural",
      "Notes": "Sets of 3 pots"
    }, ["/Pots/8.jpg"]],
    ["Simple plain with leaf desgined", {
      "Size": '12"12"',
      "Color": "Natural",
      "Notes": "Sets of 4 pots"
    }, ["/Pots/9.jpg"]],
    ["Simple plain", {
      "Size": '14"/16"',
      "Color": "Natural",
      "Notes": "Sets of 4 pots"
    }, ["/Pots/10.jpg"]],
    ["Simple Plain with Ring Rope Stylr", {
      "Size": '22"-12"/18"-12"',
      "Color": "Natural",
      "Notes": "Sets of 4 pots"
    }, ["/Pots/11.jpg"]],
    ["Simple plain in Cylinderical shape with Saucers", {
      "Size": '18"-8"/16"-8"',
      "Color": "Natural",
      "Notes": "Sets of 5 pots"
    }, ["/Pots/12.jpg"]],
    ["Simple plain in Conical shaped", {
      "Size": '24"/28"',
      "Color": "Natural",
      "Notes": "Sets of 5 pots"
    }, ["/Pots/13.jpg"]],
    ["Simple plain with Ring style", {
      "Size": '24"-12"/20"-08"',
      "Color": "Natural",
      "Notes": "Sets of 5 pots"
    }, ["/Pots/14.jpg"]],
  ]
  const specialPots = [
    ["Bowl shaped with handle", {
      "Size": '12"/06"',
      "Color": "Natural",
      "Notes": "Sets of 3 pots"
    }, ["/Pots/22.jpg"]],
    ["Leaf style with special texture", {
      "Size": '14"/12"',
      "Color": "Textured",
      "Notes": "Sets of 3 pots"
    }, ["/Pots/23.jpg"]],
    ["Plain Painted", {
      "Size": '16"-8"/12"-8"',
      "Color": "Painted",
      "Notes": "Sets of 3 pots"
    }, ["/Pots/24.jpg"]],
    ["Special Desgined Narrow base wirh color style", {
      "Size": '16"24"',
      "Color": "Natural",
      "Notes": "Single"
    }, ["/Pots/17.jpg"]],
    ["Special Painted", {
      "Size": '16"/18"',
      "Color": "White Painted",
      "Notes": "Sets of 3 pots"
    }, ["/Pots/18.jpg"]],
    ["Special Painted", {
      "Size": '16"/18"',
      "Color": "White Painted",
      "Notes": "Sets of 4 pots"
    }, ["/Pots/19.jpg"]],
    ["Special Desgined Narrow base", {
      "Size": '20"/26"',
      "Color": "Natural",
      "Notes": "Single"
    }, ["/Pots/20.jpg"]],
  ]
  const urnPots = [
    ["Bottle Shapped Urn", {
      "Size": '08"/24"',
      "Color": "Natural",
      "Notes": "Single"
    }, ["/Pots/15.jpg"]],
    ["Special Desgined Urn with Handle", {
      "Size": '10"/24"',
      "Color": "Natural",
      "Notes": "Single"
    }, ["/Pots/16.jpg"]],
    ["Fancy Urn with special texture", {
      "Size": '10"/24"',
      "Color": "Natural",
      "Notes": "Single"
    }, ["/Pots/21.jpg"]],
  ]
  return (
    <>
      <section className='h-auto max-w-screen'>
        <section className='flex flex-row items-center justify-end ms:justify-between w-4/5 mx-auto pt-5'>
          <section className='hidden ms:flex flex-row gap-3 items-center'>
            <FaHome size={30} />
            <p className='text-lg'>Home/Pots</p>
          </section>
          <section className='flex flex-row gap-3 items-center py-2 px-4 w-fit shadow-lg border border-bgLight'>
            <MdFireTruck size={30} />
            <p className='text-lg'>/Check Cart</p>
          </section>
        </section>
        <h1 className='w-4/5 border text-center mt-5 p-5 text-3xl md:text-5xl mx-auto font-heading font-bold'>Simple Pots</h1>
        <section className='flex flex-row flex-wrap justify-center p-5 md:p-10 gap-y-5 w-full'>
          {simplePots.map((data, i) => {
            return <Category key={i} data={data}></Category>
          })}
        </section>
        <h1 className='w-4/5 border text-center mt-5 p-5 text-5xl mx-auto font-heading font-bold'>Special Pots</h1>
        <section className='flex flex-row flex-wrap justify-center p-5 md:p-10 gap-y-5 w-full'>
          {specialPots.map((data, i) => {
            return <Category key={i} data={data}></Category>
          })}
        </section>
        <h1 className='w-4/5 border text-center mt-5 p-5 text-5xl mx-auto font-heading font-bold'>URN Pots</h1>
        <section className='flex flex-row flex-wrap justify-center p-5 md:p-10 gap-y-5 w-full'>
          {urnPots.map((data, i) => {
            return <Category key={i} data={data}></Category>
          })}
        </section>
      </section>

      <div className="flex xs:flex-col md:flex-row xs:h-auto md:h-[80vh] w-11/12 mx-auto px-5 py-2 my-8">
        <div className="relative xs:h-fit xs:py-8 md:py-0 md:h-full xs:w-full md:w-1/2
     px-7 flex flex-col justify-center items-end gap-6">
          <div className="relative z-20 flex flex-col gap-5">
            <h1 className="text-5xl font-bold font-heading">Clay Pots</h1>
            <p className="text-base font-medium w-11/12 font-text">
              Clay pots are an ancient material that has been used in the humblest of plant pots but also features in historical art like the Dynasty terracotta army.The material is fairly simple, just clay-based, but growing in terracotta has some benefits over plastic and other types of pots.
            </p>
            <p className="text-base font-medium w-11/12 font-text">
              Clay pots provide a healthy environment for most plants. The porosity of clay allows air and moisture to penetrate the sides of the pot. This moisture and air is utilized by the fine roots located at the edge of the soil ball. Clay pots also act like a wick to remove excess moisture from the potting soil.
            </p>
            <p className="text-base font-medium w-11/12 font-text">
              There are no toxic materials or chemicals that go into the making of clay pots. It is eco-friendly, and safe to use even on all kitchen appliances and can be used with all types of foods as well.
            </p>
          </div>
        </div>
        <div className="xs:h-[40vh] md:h-full xs:w-full md:w-1/2 md:py-16 px-1">
          <img className="h-full w-full object-cover rounded-lg" src="/Pots/pots.jpg" alt="Brick Man" />
        </div>
      </div>

    </>
  )
}
