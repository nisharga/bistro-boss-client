 import SectionTitle from "../../../Shared/SectionTitle/SectionTitle"
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "./Testimonial.css"; 
// import Swiper core and required modules
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const Tesmonial = () => { 
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [setReview]) 
  return (
    <div className="py-16 container mx-auto">
        <SectionTitle
            title="TESTIMONIALS"
            subtitle="What Our Clients Say"
        /> 
         <div> 
         <Swiper
          cssMode={true}
          navigation={true} 
          mousewheel={true} 
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={60}
          speed={600} 
          autoplay={{ delay: 3000 }} 
            >    
            {
                review?.map(data => 
                <SwiperSlide key={data._id}>
                    <div className="p-6 md:p-12 text-center">
                        <div className="flex justify-center mb-6">
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={data.rating}
                            readOnly
                        />
                        </div>
                        <div className="text-6xl flex justify-center mb-3"><FaQuoteLeft/></div>
                        <h3 className="text-md py-3">{data?.details}</h3>
                        <h2 className="text-xxl uppercase text-[#CD9003] font-bold">{data?.name}</h2>
                    </div>
                </SwiperSlide>
                )
            } 
        </Swiper>
        </div>  
    </div>
  )
}

export default Tesmonial