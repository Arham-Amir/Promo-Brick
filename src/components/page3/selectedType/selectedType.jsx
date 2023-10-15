import SelectedImage from "./selectedImage";

const SelectedType = (props = {}) => {
  return (
    <section className="p-10 flex-1 mx-auto">
      <h1 className="w-fit mx-auto text-3xl py-2 px-4 text-black">Hand Made</h1>
      <p className="w-20 p-[2px] mx-auto bg-black"></p>
      {props.data.map((data, index) => {
        return <section key={index} className="shadow-md shadow-black p-5 mt-8  flex flex-row items-center justify-center w-full text-black">
          <section className="flex-1 flex flex-col gap-5 items-center">
            <h1 className="text-2xl font-semibold">{data['Name']}</h1>
            <section className="flex flex-col gap-2">
              <h1 className="text-lg font-bold">Simple :</h1>
              {Object.keys(data['Simple']).map((el, i) => {
                return <>
                  <Bullet key={i} data={el} />
                  {data['Simple'][el].map((el, i) => {
                    return <SubBullet key={i} data={el} />
                  })}
                </>
              })}
            </section>
          </section>
          <SelectedImage data={data} />
        </section>
      })}

    </section>
  );
}

export default SelectedType;

function Bullet(props = {}) {
  return (
    <section className="pr-16 flex flex-row items-center gap-4 hover:scale-125 hover:text-themeColor transition-all duration-150 font-bold">
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
