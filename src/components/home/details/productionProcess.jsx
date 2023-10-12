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
      'name': 'SECURING THE CLAY',
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
      'name': 'BENIFICATION',
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
      'name': 'FIRING & COOLING',
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
      'name': 'QUALITY CONTROL',
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
      <section id='experience' className={`${props.className} xs:py-20 flex xs:justify-center md:justify-end`}>
        <article className="h-full transition-all duration-150 w-[90%] flex flex-col xl:p-7 pr-4">
          <section className="mb-10 cursor-pointer flex items-center flex-row gap-3 font-bold transition-all duration-150 xs:w-full md:w-[75%]">
            <p className="text-black xs:text-xl md:text-3xl 2xl:text-4xl 3xl:text-5xl">
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
                  ${i == curexp && 'bg-themeColor/30 text-darkColor !border-darkColor'}`}
                    >{data.name}</button>
                    :
                    <button onClick={() => handleExpClick(i)} key={i} className={`font-themeFont py-3 px-4 md:border-r-2 md:border-b-0 xs:border-b-2 border-bgDark/50 xs:min-w-fit md:w-full text-start transition-all duration-300 hover:bg-themeColor/30 text-sm ${i == curexp && 'bg-themeColor/30 text-darkColor !border-darkColor'}`}>{data.name}</button>
                )
              })}
            </section>
            <section className="expDetail xs:w-full md:w-auto flex flex-col gap-1  translate-y-6">
              <h1 className="text-2xl font-semibold text-black">{experiences[curexp]['name']}</h1>
              <h1 className="text-base 2xl:text-2xl text-black w-auto">{experiences[curexp]['about']}</h1>
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
