import { Link } from "react-router-dom";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import featured from "../../../assets/Homepage/featured.jpg";
const OurMenu = () => {
     
  return (
    <div className={`bg-no-repeat bg-cover bg-center relative ourmenu py-16 z-[1] bg-fixed`} 
  style={{ backgroundImage: `url(${featured})`, height: '800px'}} >
    <div className="absolute inset-0 bg-black opacity-80 z-[-1] h-[800px]"></div>
        <SectionTitle
            title="FROM OUR MENU"
            subtitle="Check it out"
        />
       <div className="container mx-auto flex justify-center items-center mt-12 md:mt-6">
            <div className="p-8">
                <img src={featured} alt="our menu image" className="bg-no-repeat bg-cover bg-center  "/>
            </div>
            <div className="text-[#fff]">
                <p className="text-lg">March 20, 2023</p>
                <p className="text-lg">WHERE CAN I GET SOME?</p>
                <p className="pr-4 py-3">Craving something delicious? Explore our curated selection of local eateries and popular food delivery services. From mouthwatering meals to delightful desserts, discover a variety of options to satisfy your cravings. Order now and treat yourself to a delightful dining experience!</p>
                <Link
                to="/shop"                
                className=" text-[#fff] font-bold uppercase border-b-900 border-b rounded-bl rounded-br border-white pb-3 mt-5 z-10 cursor-pointer" 
                > View Full Menu</Link>  
            </div>
       </div>
    </div>
  )
}

export default OurMenu



{/* <div className="">
            <div>
                <img src={featured} alt="our menu image" />
            </div>
            <div>
                <p>March 20, 2023</p>
                <p>WHERE CAN I GET SOME?</p>
                <p>Craving something delicious? Explore our curated selection of local eateries and popular food delivery services. From mouthwatering meals to delightful desserts, discover a variety of options to satisfy your cravings. Order now and treat yourself to a delightful dining experience!</p>
            </div>
       </div> */}