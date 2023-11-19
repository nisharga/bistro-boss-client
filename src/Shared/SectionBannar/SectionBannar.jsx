 
const SectinonBannar = ({bannar, title, content }) => {
  return ( 
<div className=" py-[60px]">
  <div className={`flex justify-center items-center bg-no-repeat bg-cover bg-center`} 
  style={{ backgroundImage: `url(${bannar})`, height: '400px'}} >
       <div className="hero-overlay bg-opacity-50 md:w-7/12 h-[60%] lg:h-[45%] p-7 text-center">
            <h2 className="text-4xl mb-3 text-bold text-white mt-5">{title}</h2>
            <p className="text-md text-white">{content}</p>
        </div>
      </div> 
</div>
  )
}

export default SectinonBannar;