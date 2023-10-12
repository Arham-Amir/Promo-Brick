import { AiFillCaretRight } from 'react-icons/ai'

const ProductionProcessDetail = (props = {}) => {
  return (
    <section className='flex flex-col gap-3 mt-5'>
      {props.data.map((el, i) => (
        <section key={i} className='flex flex-row items-start gap-3 xs:w-[100%] lg:w-4/5'>
          <AiFillCaretRight className='mt-1' size={12} fill="#cd2122" />
          <p className='text-[15px] 2xl:text-lg leading-6 w-fit'>{el}</p>
        </section>
      ))}

    </section>
  );
}

export default ProductionProcessDetail;
