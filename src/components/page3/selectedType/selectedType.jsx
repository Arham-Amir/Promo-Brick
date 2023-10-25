
const SelectedType = (props = {}) => {
  return (
    <section className="p-10 flex-1">
      <section className="w-full h-[70vh] p-5 flex flex-row items-center bg-darkColor rounded-2xl">
        <section className="w-[60%] flex flex-col gap-5 px-5 text-white font-text">
          <section className="w-max flex flex-col items-center">
            <h1 className="w-fit text-5xl py-2 text-white font-heading font-bold">{props.type}</h1>
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
        <section className="w-[40%] h-[65%] rounded-2xl relative bg-white mx-5 shadow-md border-4 border-white">
          <img loading="lazy" src={props.data['img']} className="mx-auto w-11/12 h-full object-fill" alt="" />
          {/* <section className="w-full h-full absolute top-0 bg-darkColor/50"></section> */}
        </section>
      </section>
      <div className="my-8 bg-[url('/images/bgtypes.png')]">
        <div className="text-white bg-cover p-14 text-center flex flex-col xs:gap-4 md:gap-7">
          <h1 className="font-heading mx-auto my-0 sm:text-center font-bold text-4xl">Categories Of Brick</h1>

        </div>
      </div>
      <section className="my-5">
        {props.data['data'].map((el, i) => {
          return <FurtherType key={i} data = {el}/>
        })}
      </section>
    </section>
  );
}

export default SelectedType;

function FurtherType(props ={}) {
  return (
    <section className="w-full my-5">
      <section className="w-full flex flex-col gap-3 text-white">
        <h1 className="text-4xl font-heading font-bold text-darkColor">{props.data['Name']} :</h1>
        <section className="flex flex-row gap-5 p-5 m-5">
         <section className="flex-1 bg-darkColor"> <img className=" shadow-black border bg-bg border-bg h-[300px] object-fill w-full shadow-md" src={props.data['Img'][0]} alt="brickImage" /></section>
         <section className="flex-1 bg-darkColor"> <img className=" shadow-black border bg-bg border-bg h-[300px] object-fill w-full shadow-md" src={props.data['Img'][1]} alt="brickImage" /></section>
        </section>
      </section>
    </section>
    // <section className="w-full my-5">
    //   <section className="w-full flex flex-col gap-3 text-white rounded-2xl bg-bg">
    //     <h1 className="text-4xl font-heading font-bold bg-darkColor p-3 text-center rounded-t-2xl">{props.data['Name']} :</h1>
    //     <section className="flex flex-row gap-5 p-5 m-5">
    //       <img className="shadow-sm shadow-black h-[300px] object-fill flex-1 rounded-2xl" src={props.data['Img'][0]} alt="brickImage" />
    //       <div className="p-1 min-h-full rounded-full bg-darkColor"></div>
    //       <img className="shadow-sm shadow-black h-[300px] object-fill flex-1 rounded-2xl" src={props.data['Img'][1]} alt="brickImage" />
    //     </section>
    //   </section>
    // </section>
  )
}
