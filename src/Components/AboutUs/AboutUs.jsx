// import { Link } from "react-router-dom";
import pagebannar from "../../assets/Slider/01.jpg";
import img1 from "../../assets/Slider/02.jpg"; 
import img2 from "../../assets/Slider/01.jpg"; 
import { FaMoneyBillAlt } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaFortAwesome } from "react-icons/fa";
import { TbPremiumRights } from "react-icons/tb";
import { FaGlassCheers } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import "./style.css"



import SectinonBannar from "../../Shared/SectionBannar/SectionBannar"
import { Link } from "react-router-dom";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const AboutUs = () => {
  return (
  <div>   
    <SectinonBannar
      bannar={pagebannar}
      title="About Us"
      content="Know Us Better"
    />


    <div className="pb-10">
    <div className="mt-4 grid grid-cols-12 gap-4 mb-12 mx-10 pt-10">
      <div className="lg:col-span-6 col-span-12 flex justify-end p-6 lg:ml-0 md:ml-8 sm:ml-2">
        <div className="relative">
            <img src={img1} className="w-[240px] h-[330px] mt-5" alt="gallary img1" />
            <img src={img2} className="w-[240px] h-[300px] mt-8 absolute right-0 -z-10 -top-20 mr-20 -rotate-[15deg]" alt="gallary img2"/> 
            <div className="relative">
            <Link to="/" 
              className="bg-red-500 w-[150px] h-[40px] border-white flex justify-center items-center absolute right-32 bottom-4 transform scale-105 transition-transform duration-300 hover:scale-110"
            >
          <span className="text-white mr-2"><MdOutlineSlowMotionVideo/></span> 
          <span className="text-white">Watch Now</span>
          
          </Link>
          </div>       
        </div>
      </div>
      <div className="lg:col-span-6 col-span-12 p-8">
      <p className="italic text-red-500 capitalize text-lg">About Us</p>
      <h2 className="block mt-4 lg:text-3xl text-2xl font-bold text-gray-800 dark:text-white">
       Why Select Us for <br/> Your vacation
      </h2> 
          <p className="mt-3 lg:text-lg text-md text-gray-500 dark:text-gray-300 md:text-sm lg:mr-20 mr-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,<br/>
              laudantium quia tempore delect
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
              laudantium quia tempore delect<br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
              laudantium quia tempore delect
          </p>
      </div> 
      
    </div>
      <div className="mx-20 pb-8"><hr /></div>
    <div className="grid grid-cols-12 gap-4 mx-10">
      <div className="lg:col-span-3 col-span-6 flex justify-center items-center p-4">
        <h3 className="bold italic text-2xl">{120}+</h3>
        <p className="text-sm ml-2">Regular Customer</p>
      </div>
      <div className="lg:col-span-3 col-span-6 flex justify-center items-center p-4">
        <h3 className="bold italic text-2xl">{500}+</h3>
        <p className="text-sm ml-2">Packages</p>
      </div>
      <div className="lg:col-span-3 col-span-6 flex justify-center items-center p-4">
        <h3 className="bold italic text-2xl">{200}+</h3>
        <p className="text-sm ml-2">Total Register</p>
      </div>
      <div className="lg:col-span-3 col-span-6 flex justify-center items-center p-4">
        <h3 className="bold italic text-2xl">{50}+</h3>
        <p className="text-sm ml-2">Review</p>
      </div>
    </div>
    </div>


    <div className="bg-gray-50 py-10">
      <SectionTitle title="features" subtitle="why choose us"/>
      <div className="grid grid-cols-12 gap-6 p-4 mx-10">
        <div className="lg:col-span-4 col-span-6 relative">
          {/* overlay */} 
          <div className="overlay opacity-90">
            <div className="text-white">ji</div>
          </div>
          <div className="bg-white p-4 hover:overlay">
            <div className="text-2xl"><FaMoneyBillAlt/></div>
            <h3 className="font-bold py-1"> Cheap Rates</h3>
            <p>Cheapest Food in the down, with best quality</p>
          </div>
        </div>
      </div>
    </div>


    
  </div>
  )
}

export default AboutUs



{/* <div className="grid grid-cols-12 gap-4 py-10 mx-10 mb-[200px] mt-[120px]">
<div className="lg:col-span-7 col-span-12 relative">
  <div className="gallary flex justify-end relative">
    <div className="h-[240px] w-[220px] rotate -top-16 flex justify-end">
      <img src={img1} className="object-cover object-center w-full h-full  " alt="gallary img1" />
      <img src={img2} className="object-cover object-center w-full h-full border-2 border-solid border-white" alt="gallary img2" />
    </div>
   {/*  <div className="h-[240px] w-[220px] z-40">
      <img src={img2} className="object-cover object-center w-full h-full   border-2 border-solid border-white" alt="gallary img2" />
    </div> */}
  /* </div>
  <div className="absolute right-0 bottom-4 z-50 mr-20 mb-5">
    <Link to="/" className="py-3 px-12 bg-red-500 text-white font-semibold border-2 border-solid border-white transform scale-100 transition-transform duration-300 hover:scale-110 italic">Watch Now</Link>
  </div>
</div>
<div className="lg:col-span-5 col-span-12">
<p className="italic text-red-500 capitalize text-lg">About Us</p>
<h2 className="block mt-4 lg:text-3xl text-2xl font-bold text-gray-800 dark:text-white">
 Why Select Us for <br/> Your vacation
</h2>

          <p className="mt-3 lg:text-md text-sm text-gray-500 dark:text-gray-300 md:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,<br/>
              laudantium quia tempore delect
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
              laudantium quia tempore delect<br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
              laudantium quia tempore delect
          </p>
</div>
</div> */

{/* <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">About</h1>
        <div className="mb-5 md:text-2xl text-xl">
          <Link to="/">Home</Link> 
          <span>/</span> 
          <Link to="/aboutus" className="text-red-500">About</Link> 
        </div> 
      </div> */}