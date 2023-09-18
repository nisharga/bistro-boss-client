 import bannar from "../../../assets/Homepage/banner.jpg";
const Bannar = () => {
  return ( 
<div className="container mx-auto py-[60px]">
  <div className={`flex justify-center items-center bg-no-repeat bg-cover bg-center`} 
  style={{ backgroundImage: `url(${bannar})`, height: '400px'}} >
      <div className="md:w-8/12 bg-white h-[70%] lg:h-[55%] p-7 text-[#000] text-center">
        <h2 className="text-4xl mb-3">Bistro Boss</h2>
        <p className="text-md">Step through our doors, and you will be embraced by an ambiance that effortlessly combines elegance with a laid-back charm. Whether you are here for a romantic dinner, a family gathering, or a casual get-together with friends, Bistro Boss provides the perfect setting. Our cozy, dimly lit dining area sets the mood for intimate conversations, while the soft hum of chatter and clinking glasses creates an inviting, lively atmosphere.</p>
      </div>
  </div>
</div>
  )
}

export default Bannar