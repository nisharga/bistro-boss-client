 // Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './Category.css';

// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
// img list 
import slide1 from "../../../assets/Category/slide1.jpg"
import slide2 from "../../../assets/Category/slide2.jpg"
import slide3 from "../../../assets/Category/slide3.jpg"
import slide4 from "../../../assets/Category/slide4.jpg"
import slide5 from "../../../assets/Category/slide5.jpg"
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from 'react';

export const Category = () => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className='container mx-auto py-[60px] ' >
         <SectionTitle
            subtitle={"From 11:00am to 10:00pm"}
            title={"ORDER ONLINE"}    
        />
    <Swiper 
             freeMode={true}
             pagination={{
               clickable: true,
             }}
             autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[FreeMode, Pagination, Autoplay]}
             className="mySwiper pb-20"
             breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            
    >
      <SwiperSlide>
        <img src={slide1} alt="slide1" /> 
      </SwiperSlide> 
      <SwiperSlide>
        <img src={slide2} alt="slide2" /> 
      </SwiperSlide> 
      <SwiperSlide>
        <img src={slide3} alt="slide3" /> 
      </SwiperSlide> 
      <SwiperSlide>
        <img src={slide4} alt="slide4" /> 
      </SwiperSlide> 
      <SwiperSlide>
        <img src={slide5} alt="slide5" /> 
      </SwiperSlide> 
      <SwiperSlide>
        <img src={slide2} alt="slide2" /> 
      </SwiperSlide> 
    </Swiper>
    </div>
  )
}