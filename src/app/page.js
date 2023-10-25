import Carousel from "@components/home/carousel/carousel";
import Categories from "@components/home/categories/categories";
import Details from "@components/home/details/details";
import Video from "@components/home/video/video";

export default function Home() {
  return (
    <section className="">
      <Carousel />
      <Categories />
      <Details />
      <Video />
    </section>
  )
}
