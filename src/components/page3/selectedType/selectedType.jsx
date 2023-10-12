import { FcNext, FcPrevious } from "react-icons/fc";

const SelectedType = () => {
  return (
    <section className="p-10 w-11/12 mx-auto bg-bgLight">
      <h1 className="w-fit mx-auto text-3xl py-2 px-4 text-black">Hand Made</h1>
      <p className="w-20 p-[2px] mx-auto bg-black"></p>
      <section className="mt-8 pr-16 flex flex-row items-center justify-center w-full text-black">
        <section className="flex-1 flex flex-col gap-5 items-center">
          <h1 className="text-2xl font-semibold">Red Tile</h1>
          <section className="flex flex-col gap-2">
            <h1 className="text-lg font-bold">Simple :</h1>
            <Bullet data={'Color'} />
            <Bullet data={'Sizes'} />
            <SubBullet data={'10m'} />
            <SubBullet data={'20m'} />
            <SubBullet data={'30m'} />
            <Bullet data={'Packing Details'} />
          </section>
        </section>
        <section className="flex-1 py-10 bg-bgDark relative">
          <FcPrevious className="cursor-pointer absolute top-1/2 -translate-y-1/2 left-2 text-4xl z-30" />
          <img className="-translate-x-8 border-2 border-white w-[98%] h-[300px] object-cover" src="/images/brick.jpg" alt="image not found" />
          <FcNext className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-2 text-4xl z-30" />
        </section>
      </section>
      <section className="mt-8 flex flex-row-reverse items-center justify-center w-full text-black">
        <section className="flex-1 flex flex-col gap-5 items-center">
          <h1 className="text-2xl font-semibold">Yellow Tile</h1>
          <section className="flex flex-col gap-2">
            <h1 className="text-lg font-bold">Simple :</h1>
            <Bullet data={'Color'} />
            <Bullet data={'Sizes'} />
            <SubBullet data={'10m'} />
            <SubBullet data={'20m'} />
            <SubBullet data={'30m'} />
            <Bullet data={'Packing Details'} />
          </section>
        </section>
        <section className="flex-1 py-10 bg-bgDark flex justify-end relative">
          <FcPrevious className="cursor-pointer absolute top-1/2 -translate-y-1/2 left-2 text-4xl z-30" />
          <img className="translate-x-8 border-2 border-white w-[98%] h-[300px] object-cover" src="/images/brick.jpg" alt="image not found" />
          <FcNext className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-2 text-4xl z-30" />
        </section>
      </section>
    </section>
  );
}

export default SelectedType;

function Bullet(props = {}) {
  return (
    <section className="pr-16 flex flex-row items-center gap-4 hover:scale-125 hover:text-themeColor transition-all duration-150">
      <p className="w-8 h-[2px] bg-black/60"></p>
      <h1>{props.data}</h1>
    </section>)
}

function SubBullet(props = {}) {
  return (
    <section className="pl-8 pr-16 flex flex-row items-center gap-4 hover:scale-125 hover:text-themeColor transition-all duration-150">
      <section className="flex flex-col gap-[1px]">
        <p className="w-8 h-[2px] bg-black/60"></p>
        <p className="w-8 h-[2px] bg-black/60"></p>
      </section>
      <h1>{props.data}</h1>
    </section>)
}
