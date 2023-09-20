
const Cover = ({title, subtitle, image}) => {
  return (
    <div className="hero min-h-screen"  style={{backgroundImage: `url(${image})`}} >
    <div className="hero-overlay bg-opacity-60 md:w-7/12 h-[60%] lg:h-[45%] p-7"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
        <p className="mb-5 md:text-2xl text-xl">{subtitle}</p>
        
      </div>
    </div>
  </div>
  )
}

export default Cover