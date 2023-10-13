const Types = (props = {}) => {
  return (
    <section className="h-[93vh] sticky top-[7vh]">
      <section className="flex flex-col justify-center h-full min-w-max mx-auto bg-bgLight text-base font-bold">
        {props.data.map((el, i)=>(
          <button key={i} onClick={()=> props.settype(el)} className={`p-10 border-b-2 border-white  ${props.type == el && 'bg-themeColor'}`}>{el}</button>
        ))}
      </section>
      {/* <img src="/style/settingsV2.json" alt="svg" /> */}
    </section>
  );
}

export default Types;
