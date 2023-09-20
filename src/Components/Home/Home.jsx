import Bannar from "./Bannar/Bannar"
import Callus from "./Callus/Callus"
import { Category } from "./Category/Category"
import Featured from "./Featured/Featured"
import OurMenu from "./OurMenu/OurMenu"
import { PopularMenu } from "./PopularMenu/PopularMenu"
import Slider from "./Slider/Slider"
import Tesmonial from "./Testimonial/Tesmonial"

const Home = () => {
  return (
    <div>
        <div className="">
          <Slider/>
          <Category/>
          <Bannar/>
          <PopularMenu/>
          <Callus/>
          <Featured/>
          <OurMenu/>
          <Tesmonial/>
        </div>
    </div>
  )
}

export default Home