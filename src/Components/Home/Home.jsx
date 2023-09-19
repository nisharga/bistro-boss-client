import Bannar from "./Bannar/Bannar"
import Callus from "./Callus/Callus"
import { Category } from "./Category/Category"
import Featured from "./Featured/Featured"
import { PopularMenu } from "./PopularMenu/PopularMenu"
import Slider from "./Slider/Slider"

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
        </div>
    </div>
  )
}

export default Home