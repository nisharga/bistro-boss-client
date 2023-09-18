import { Carousel } from "react-responsive-carousel"
import img1 from "../../../assets/Slider/01.jpg"
import img2 from "../../../assets/Slider/02.jpg"
import img3 from "../../../assets/Slider/03.png"
import img4 from "../../../assets/Slider/04.jpg"
import img5 from "../../../assets/Slider/05.png"
import img6 from "../../../assets/Slider/06.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const Slider = () => {
  return ( 
    <Carousel showArrows={true}
        autoPlay={true} 
        infiniteLoop={true}
    >
                <div>
                    <img src={img1} alt="1"/>
                </div>
                <div>
                    <img src={img2} alt="2"/>
                </div>
                <div>
                    <img src={img3} alt="3"/>
                </div>
                <div>
                    <img src={img4} alt="4"/>
                </div>
                <div>
                    <img src={img5} alt="5"/>
                </div>
                <div>
                    <img src={img6} alt="6"/>
                </div>
    </Carousel> 
  )
}

export default Slider