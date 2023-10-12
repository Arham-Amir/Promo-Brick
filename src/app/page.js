import Carousel from "@components/home/carousel/carousel";
import Categories from "@components/home/categories/categories";
import Details from "@components/home/details/details";

export default function Home() {
  return (
    <section className="">
      <Carousel />
      <Categories />
      <Details />
    </section>
  )
}
