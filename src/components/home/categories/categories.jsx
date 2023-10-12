import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
export default function Categories() {
  const content = [
    ['#EC6839', 'Building Bricks', "Supporting builders' merchants nationwide", '/page2'],
    ['#62A86B', 'Facing Bricks', "Inovative design, traditional solutions", '/page3'],
    ['#F2A644', 'Floor Tiles', "Complete aesthetic build solutions", '#'],
    ['#9BD3C4', 'Slips', "Everyting for building, renovating, or extending your own home", '#'],
    ['#AB8FE5', 'Pots', "Quality products for quality builds", '#'],
  ]
  return (
    <div className='relative bg-gray-700'>
      <div className=" text-white  flex flex-wrap items-center justify-center w-11/12 mx-auto p-5 min-h-max">
        {content.map((item, index) => (
          <div className="xs:w-full md:w-1/3 md:mb-5 xl:mb-0 -translate-y-1/3 xl:w-1/5 group lg:hover:-translate-y-1/2 min-h-fit transition duration-200 ease-in-out" key={index}>
            <div className="bg-[url('/images/home.jpg')] bg-cover min-h-fit">
              <Link href= {item[3]}>
                <div className="transparent border-t-8 px-3 pb-1 bg-gray-800/[0.7] hover:cursor-pointer group-hover:bg-transparent group-hover:bg-gradient-to-b from-transparent via-gray-800/[0.3] to-gray-800/[0.7]" style={{ borderColor: item[0] }}>
                  <div className="flex flex-col justify-evenly">
                    <div className="font-bold text-3xl my-3 group-hover:translate-y-48">{item[1]}</div>
                    <hr className="mr-5 border-t-4 group-hover:translate-y-48" style={{ borderColor: item[0] }} />
                    <div className="text-lg font-semibold h-36 group-hover:invisible my-9">{item[2]}</div>
                    <div className="flex justify-between mr-5 mb-5">
                      <div>Find Out More</div>
                      <div className="mr-9"><IoIosArrowForward style={{ color: item[0], width: '1em', height: '1em' }} /></div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
