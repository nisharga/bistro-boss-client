 import SectionTitle from "../../../Shared/SectionTitle/SectionTitle"
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css'; 
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
    /* const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [setReview]) */
    const review = [
        {
          "_id": "643010e0f5a7e52ce1e8fa65",
          "name": "Jane Doe",
          "details": "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          "rating": 3
        },
        {
          "_id": "643010f9f5a7e52ce1e8fa66",
          "name": "John Doe",
          "details": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
          "rating": 2
        },
        {
          "_id": "6430110af5a7e52ce1e8fa67",
          "name": "MJ Doe",
          "details": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
          "rating": 5
        },
        {
          "_id": "64301123f5a7e52ce1e8fa68",
          "name": "Sarah Smith",
          "details": "I found the product to be incredibly useful and easy to use. The interface is intuitive, and it has all the features I need. Highly recommend it!",
          "rating": 4
        },
        {
          "_id": "6430113af5a7e52ce1e8fa69",
          "name": "Robert Johnson",
          "details": "This is by far the best service I have ever used. The customer support is outstanding, and the product itself is top-notch. I couldn't be happier!",
          "rating": 5
        }
      ]
       
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