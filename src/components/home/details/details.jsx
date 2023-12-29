import Link from "next/link";
import ProductionProcess from "./productionProcess";

const Details = () => {
  return (
    <section className="h-auto border-y-4 border-white max-w-screen font-text">
      <section className="bg-bgLight h-full">
        <section className="h-auto bg-darkColor xs:px-6 xs:py-10 sm:p-10 md:p-20 flex flex-col  gap-4 text-white">
          <p className="w-20 p-[2px] bg-white"></p>
          <h1 className="text-4xl font-bold tracking-wider font-heading">Promo Bricks (PVT) LTD</h1>
          <section className="flex md:flex-row xs:gap-4 md:gap-0 xs:flex-col justify-between items-start">
            <p className="md:w-[60%] leading-7 tracking-widest xs:text-sm md:text-lg font-extralight">We have experience of bricks manufacturing more than 27 years. The company is pioneer in introducing huge variety of versatile designs of bricks in Pakistan. Our manufacturing items Special Gutka, Tiles, Facing Bricks & Designs are being used in the facing of all types of residential and commercial buildings.</p>
            <Link href="#contactus" className="md:-translate-y-4 px-5 py-3 border-2 border-themeColor text-themeColor shadow-sm shadow-themeColor h-fit min-w-fit mr-5 z-0">Contact-Us</Link>
          </section>
        </section>
        <section className="h-auto">
          <ProductionProcess />
        </section>
      </section>
    </section>
  );
}

export default Details;
