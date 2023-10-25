'use client'
import ProductionProcessDetail from '@components/home/details/productionProcessDetail';
import { useState } from 'react';
import { motion, useAnimate } from 'framer-motion'

const fadeInAnimationVarients = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      duration: 0.4
    }
  },
}
const ProductionProcess = (props = {}) => {
  const [scope, animate] = useAnimate();
  const [curexp, setcurexp] = useState(0);
  const experiences = [
    {
      'name': 'BRICK PRODUCTION',
      'about': 'Basically the process of brick making has not changed since the first fired bricks were produced some thousand years ago.',
      'duration': 'May 2018 - Present',
      'description': [
        'Securing the clay',
        'Beneficiation',
        'Mixing and forming',
        'Drying',
        'Firing and cooling',
      ]
    },
    {
      'name': 'SECURING THE CLAY',
      'about': 'Clays used in brick making represent a wide range of materials that include varying percentage of silica and alumina. They may be grouped in three classes.',
      'duration': 'May 2018 - Present',
      'description': [
        'Surface Clay: Mostly bricks in Pakistan are made from surface clays, which are 3 to 4 feet in depth.',
        'Shale’s: These clays are obtained from decomposed rock, may he near mountain areas.',
        ' Fire-Clays: Found deeper under the surface. These fire clays have more uniform chemical composition than surface or shale',
      ]
    },
    {
      'name': 'BENIFICATION',
      'about': 'Raw clays are often blended to obtain a uniform consistency. The clay is then passed from grinders and screens to secure the optimum particle size for mixing with water.',
      'duration': 'May 2018 - Present',
      'description': [

      ]
    },
    {
      'name': 'MIXING & FORMING',
      'about': 'sadhajskd sadjasn asjkd asj djas das djkandkjas dasdasd',
      'duration': 'May 2018 - Present',
      'description': [
        'Securing the clay',
        'Beneficiation',
        'Mixing and forming',
        'Drying',
        'Firing and cooling',
      ]
    },
    {
      'name': 'DRYING',
      'about': 'After the bricks are formed, they must be dried to remove as much as free water as possible. Drying a part from sun drying is done in direct dryers with controlled temperatures draft and humidity.',
      'duration': 'May 2018 - Present',
      'description': [
        'Securing the clay',
        'Beneficiation',
        'Mixing and forming',
        'Drying',
        'Firing and cooling',
      ]
    },
    {
      'name': 'FIRING & COOLING',
      'about': 'Bricks are fired and cooled in a kiln an oven type chamber capable of producing temperatures 870C to 1100C (1600-2000f) Depending on the type of raw material.',
      'duration': 'May 2018 - Present',
      'description': [
        'Securing the clay',
        'Beneficiation',
        'Mixing and forming',
        'Drying',
        'Firing and cooling',
      ]
    },
    {
      'name': 'QUALITY CONTROL',
      'about': 'The testing of materials is one of the important requirements of civil work from quality control point of view.',
      'duration': 'May 2018 - Present',
      'description': [
        'Securing the clay',
        'Beneficiation',
        'Mixing and forming',
        'Drying',
        'Firing and cooling',
      ]
    },

  ]
  function handleExpClick(id) {
    setcurexp(id);
    animate([
      ['.expDetail', { opacity: [0, 1] }, { delay: 0.1, duration: 0.2 }]
    ])
  }
  return (
    <motion.div
      variants={fadeInAnimationVarients}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className="list-none">
      <section id='experience' className={`${props.className} xs:py-20 flex xs:justify-center md:justify-end font-text`}>
        <article className="h-full transition-all duration-150 w-[90%] flex flex-col xl:p-7 pr-4">
          <section className="mb-10 cursor-pointer flex items-center flex-row gap-5 font-bold transition-all duration-150 xs:w-full md:w-[75%]">
            <p className="text-black xs:text-xl md:text-4xl 2xl:text-4xl 3xl:text-5xl font-heading">
              Brick Production Process
            </p>
            <span className="bg-black h-[1px] flex-1"></span>
          </section>
          <section ref={scope} className="flex xs:flex-col md:flex-row text-black gap-16">
            <section className="md:min-w-max flex xs:flex-row md:flex-col justify-start items-start custom-scrollbar pb-1">
              {experiences.map((data, i) => {
                return (
                  i == 0 ?
                    <button onClick={() => handleExpClick(i)} key={i} className={`font-themeFont md:border-r-2 md:border-b-0 xs:border-b-2 border-bgDark/50 xs:min-w-fit md:min-w-full py-3 px-4 hover:bg-themeColor/30 transition-all duration-300 text-sm
                  ${i == curexp && 'bg-themeColor text-white !border-darkColor'}`}
                    >{data.name}</button>
                    :
                    <button onClick={() => handleExpClick(i)} key={i} className={`font-themeFont py-3 px-4 md:border-r-2 md:border-b-0 xs:border-b-2 border-bgDark/50 xs:min-w-fit md:w-full text-start transition-all duration-300 hover:bg-themeColor/30 text-sm ${i == curexp && 'bg-themeColor text-white !border-darkColor'}`}>{data.name}</button>
                )
              })}
            </section>
            <section className="expDetail xs:w-full md:w-auto flex flex-col gap-1 font-text">
              <h1 className="text-2xl font-semibold text-black font-heading">{experiences[curexp]['name']}</h1>
              <h1 className="text-sm 2xl:text-2xl text-black w-auto">{experiences[curexp]['about']}</h1>
              <p className="font-themeFont text-bgDark text-xs 2xl:text-base"> {experiences[curexp]['duration']}</p>
              <ProductionProcessDetail data={experiences[curexp]['description']} />
            </section>
          </section>
        </article>
      </section>
    </motion.div >
  );
}

export default ProductionProcess;
