import { Helmet } from "react-helmet-async"
import Bannar from "./Bannar/Bannar"
import Callus from "./Callus/Callus"
import { Category } from "./Category/Category"
import Featured from "./Featured/Featured"
import OurMenu from "./OurMenu/OurMenu"
import { PopularMenu } from "./PopularMenu/PopularMenu"
import Slider from "./Slider/Slider"
import Tesmonial from "./Testimonial/Tesmonial"
import AboutTeam from "./AboutTeam/AboutTeam"
import MobileApp from "./MobileApp/MobileApp"

const Home = () => {
  return (
    <div>
        <div className="">
          <Helmet>
              <title>Bistro Boss | Homepage</title>
          </Helmet>
          <Slider/>
          <Category/>
          <Bannar/>
          <PopularMenu/>
          <Callus/>
          <Featured/>
          <OurMenu/>
          <AboutTeam/>
          <Tesmonial/>
          <MobileApp/>
        </div>
    </div>
  )
}

export default Home