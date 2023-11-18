import { FaHome } from 'react-icons/fa'
import { AiFillQuestionCircle } from 'react-icons/ai'
import Slider from './slider/slider';
import Link from 'next/link';

const GallaryComp = () => {
  const buildingBrickImages = [
    '/Building/Awal.png',
    '/Building/Special.png',
    '/Building/PSK.png',
    '/Building/Doum.png',
    '/Building/Awal.png',
    '/Building/Special1.png',
    '/Building/Awal1.png',
    '/Building/Doum1.png',
    '/Building/PSK1.png',
    '/Building/Awal1.png',
  ];
  const facingBrickImages = [
    '/Facing/HandmadeSmoothRed1.png',
    '/Facing/HandmadeSmoothRed2.png',
    '/Facing/HandmadeWeathered1.png',
    '/Facing/HandmadeWeathered2.png',
    '/Facing/HandmadeReclaimed1.png',
    '/Facing/HandmadeReclaimed2.png',
    '/Facing/HandmadeWeatheredTumbled1.png',
    '/Facing/HandmadeWeatheredTumbled2.png',
    '/Facing/handmadeyellow.png',
    '/Facing/HandmadeSimple1.png',
    '/Facing/HandmadeSimple2.png',
    '/Facing/HandmadeTextured1.png',
    '/Facing/HandmadeTextured2.png',
    '/Facing/HandmadeHalfShaded1.png',
    '/Facing/HandmadeHalfShaded2.png',
    '/Facing/wirecut.png',
    '/Facing/wirecutSimple1.png',
    '/Facing/wirecutSimple2.png',
    '/Facing/wirecutWeathered1.png',
    '/Facing/wirecutWeathered2.png',
    '/Facing/wirecutslips1.png',
    '/Facing/HandmadeHalfShaded2.png', // Ye shayad duplicate ya ghalat category ka ho sakta hai.
    '/Facing/machinepress.png',
    '/Facing/MachinePressSimple1.png',
    '/Facing/MachinePressSimple2.png',
    '/Facing/MachinePressWeathered1.png',
    '/Facing/MachinePressWeathered2.png',
    '/Facing/MachinePressTiles1.png',
    '/Facing/MachinePressTiles2.png'
  ];
  const clayImages = [
    '/ClayTiles/1.png',
    '/ClayTiles/2.png',
    '/ClayTiles/3.png',
    '/ClayTiles/4.png',
    '/ClayTiles/5.png',
    '/ClayTiles/6.png',
    '/ClayTiles/7.png',
    '/ClayTiles/8.png',
  ];
  const slipImages = [
    '/BrickSlips/1.jpg',
    '/BrickSlips/2.jpg',
    '/BrickSlips/3.jpg',
    '/BrickSlips/4.jpg',
    '/BrickSlips/5.jpg',
    '/BrickSlips/6.jpg',
    '/BrickSlips/7.jpg',
  ];
  const potImages = [
    // simplePots URLs
    "/Pots/1.jpg",
    "/Pots/2.jpg",
    "/Pots/3.jpg",
    "/Pots/4.jpg",
    "/Pots/5.jpg",
    "/Pots/6.jpg",
    "/Pots/7.jpg",
    "/Pots/8.jpg",
    "/Pots/9.jpg",
    "/Pots/10.jpg",
    "/Pots/11.jpg",
    "/Pots/13.jpg",
    "/Pots/14.jpg",
    "/Pots/12.jpg",

    // specialPots URLs
    "/Pots/18.jpg",
    "/Pots/19.jpg",
    "/Pots/24.jpg",
    "/Pots/22.jpg",
    "/Pots/23.jpg",
    "/Pots/20.jpg",
    "/Pots/17.jpg",

    // urnPots URLs
    "/Pots/15.jpg",
    "/Pots/16.jpg",
    "/Pots/21.jpg",
  ];

  return (
    <section>
      <section className='flex flex-row items-center justify-end ms:justify-between w-4/5 mx-auto pt-5'>
        <section className='hidden ms:flex flex-row gap-3 items-center'>
        <Link className='hover:text-themeColor' href="/"><FaHome size={30} /></Link>
            <p className='text-lg'><Link className='hover:text-themeColor' href="/">Home</Link>/Gallery</p>
        </section>
        <a href={'https://wa.me/+923004439445'} target='_blank' className='flex flex-row gap-3 items-center py-2 px-4 w-fit shadow-lg border border-bgLight'>
          <AiFillQuestionCircle size={30} />
          <p className='text-lg'>/Inquire Now</p>
        </a>
      </section>
      <section className='mb-10'>
        <h1 className='w-4/5 border text-center mt-5 p-5 text-5xl mx-auto font-heading font-bold heading-bg'>Building Brick</h1>
        <section>
          <Slider data={buildingBrickImages} />
        </section>
      </section>
      <section className='mb-10'>
        <h1 className='w-4/5 border text-center mt-5 p-5 text-5xl mx-auto font-heading font-bold heading-bg'>Facing Brick</h1>
        <section>
          <Slider data={facingBrickImages} />
        </section>
      </section>
      <section className='mb-10'>
        <h1 className='w-4/5 border text-center mt-5 p-5 text-5xl mx-auto font-heading font-bold heading-bg'>Clay Tiles</h1>
        <section>
          <Slider data={clayImages} />
        </section>
      </section>
      <section className='mb-10'>
        <h1 className='w-4/5 border text-center mt-5 p-5 text-5xl mx-auto font-heading font-bold heading-bg'>Brick Slips</h1>
        <section>
          <Slider data={slipImages} />
        </section>
      </section>
      <section className='mb-10'>
        <h1 className='w-4/5 border text-center mt-5 p-5 text-5xl mx-auto font-heading font-bold heading-bg'>Pots</h1>
        <section>
          <Slider data={potImages} />
        </section>
      </section>
    </section>
  );
}

export default GallaryComp;
