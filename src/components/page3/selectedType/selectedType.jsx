import LazyImage from "@components/base/lazyImage";

const SelectedType = (props = {}) => {
  return (
    <section className="p-5 ms:p-10 flex-1 z-10">
      <section className="w-full h-auto md:min-h-max p-5 ms:p-10 flex flex-col lg:flex-row xs:gap-5 lg:gap-0 items-center bg-darkColor rounded-2xl">
        <section className="w-full lg:w-[60%] h-auto flex flex-col gap-5 px-5 text-white font-text">
          <section className="w-max flex flex-col items-center">
            <h1 className="w-fit text-3xl md:text-5xl py-2 text-white font-heading font-bold">{props.type}</h1>
          </section>
          <p className="font-text text-base text-white">{props.data['desc']}</p>
          <section className="flex gap-2 items-center">
            <p className="text-themeColor">Type</p>
            <p>-{'>'}</p>
            <p>{props.data['type']}</p>
          </section>
          <section className="flex gap-2 items-center">
            <p className="text-themeColor">Size</p>
            <p>-{'>'}</p>
            <p>{props.data['size']}</p>
          </section>
          <section className="flex gap-2 items-center">
            <p className="text-themeColor">Color</p>
            <p>-{'>'}</p>
            <p>{props.data['color']}</p>
          </section>
          {/* <button className="px-5 py-3 w-fit bg-themeColor text-white rounded-2xl">View Types</button> */}
        </section>
        <section className="w-[60%] lg:w-[40%] md:h-full rounded-2xl relative bg-white mx-5 shadow-md border-4 border-white">
          <LazyImage src={props.data['img']} className="mx-auto w-4/5 h-full object-cover" />
        </section>
      </section>
      <section className="my-5">
        {props.data['data'].map((el, i) => {
          return <FurtherType key={i} data={el} />
        })}
      </section>
    </section>
  );
}

export default SelectedType;

function FurtherType(props = {}) {
  return (
    <section className="w-full my-5">
      <section className="w-full flex flex-col gap-3 text-white">
        <h1 className="text-4xl font-heading font-bold text-darkColor">{props.data['Name']} :</h1>
        <section className="flex flex-col ms:flex-row gap-5 p-5 ms:m-5">
          <section className="flex-1 bg-darkColor"> <LazyImage className=" border bg-bg border-Light h-[350px] object-fill w-full" src={props.data['Img'][0]}/></section>
          <section className="flex-1 bg-darkColor"> <LazyImage className=" border bg-bg border-Light h-[350px] object-fill w-full" src={props.data['Img'][1]}/></section>
        </section>
      </section>
    </section>
  )
}
