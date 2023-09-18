 // Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './Category.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
// img list 
import slide1 from "../../../assets/Category/slide1.jpg"
import slide2 from "../../../assets/Category/slide2.jpg"
import slide3 from "../../../assets/Category/slide3.jpg"
import slide4 from "../../../assets/Category/slide4.jpg"
import slide5 from "../../../assets/Category/slide5.jpg"
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

export const Category = () => {
  return (
    <div className='container mx-auto py-[60px]'>
         <SectionTitle
            subtitle={"From 11:00am to 10:00pm"}
            title={"ORDER ONLINE"}    
        />
    <Swiper
             slidesPerView={4}
             spaceBetween={30}
             freeMode={true}
             pagination={{
               clickable: true,
             }}
             modules={[FreeMode, Pagination]}
             className="mySwiper"
    >
      <SwiperSlide>
        <img src={slide1} alt="slide1" />
        <h3 className='text-2xl lg:text-4xl uppercase text-center text-white -mt-20'>salad</h3>
      </SwiperSlide> 
      <SwiperSlide>
        <img src={slide2} alt="slide2" />
        <h3 className='text-2xl lg:text-4xl uppercase text-center text-white -mt-20'>soups</h3>
      </SwiperSlide> 
      <SwiperSlide>
        <img src={slide3} alt="slide3" />
        <h3 className='text-2xl lg:text-4xl uppercase text-center text-white -mt-20'>pizza</h3>
      </SwiperSlide> 
      <SwiperSlide>
        <img src={slide4} alt="slide4" />
        <h3 className='text-2xl lg:text-4xl uppercase text-center text-white -mt-20'>desserts</h3>
      </SwiperSlide> 
      <SwiperSlide>
        <img src={slide5} alt="slide5" />
        <h3 className='text-2xl lg:text-4xl uppercase text-center text-white -mt-20'>Salasa</h3>
      </SwiperSlide> 
    </Swiper>
    </div>
  )
}