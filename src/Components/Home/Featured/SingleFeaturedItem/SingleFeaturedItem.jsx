
const SingleFeaturedItem = ({data}) => {
  return (
    <div className=" bg-[#f3f3f3]">
        <div className="">
            <img src={data?.image} alt={data?.name} className="h-[300px] object-cover w-full"/>
        </div>
        <div className="p-4 text-center">
            <h3 className="text-black font-bold text-lg mt-2">{data?.name}</h3>
            <p className="text-sm py-3">{data?.recipe}</p>
            <button
            className="text-[#BB8506] font-bold uppercase border-b-900 border-b rounded-bl rounded-br border-[#BB8506] pb-3 mt-5 bg-[#E8E8E8] py-2 px-4 hover:bg-[#1F2937]"
            >Add To Cart</button>
        </div>
    </div>
  )
}

export default SingleFeaturedItem