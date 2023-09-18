import Bannar from "./Bannar/Bannar"
import { Category } from "./Category/Category"
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
        </div>
    </div>
  )
}

export default Home