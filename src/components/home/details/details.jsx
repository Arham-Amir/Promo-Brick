import ProductionProcess from "./productionProcess";

const Details = () => {
  return (
    <section className="h-auto border-y-4 border-white max-w-screen font-text">
      <section className="bg-bgLight h-full">
        <section className="h-auto bg-darkColor px-20 py-20 flex flex-col  gap-4 text-white">
          <p className="w-20 p-[2px] bg-white"></p>
          <h1 className="text-4xl font-bold tracking-wider font-heading">Promo Bricks (PVT) LTD</h1>
          <section className="flex justify-between items-start">
            <p className="w-[60%] leading-7 tracking-widest text-lg font-extralight">We have experience of bricks manufacturing more than 27 years. The company is pioneer in introducing huge variety of versatile designs of bricks in Pakistan. Our manufacturing items Special Gutka, Tiles, Facing Bricks & Designs are being used in the facing of all types of residential and commercial buildings.</p>
            <button className="-translate-y-4 px-5 py-3 border-2 border-themeColor text-themeColor shadow-sm shadow-themeColor h-fit min-w-fit mr-5 z-0">Learn More</button>
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
