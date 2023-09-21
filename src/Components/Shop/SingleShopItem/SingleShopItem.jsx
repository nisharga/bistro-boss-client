
const SingleShopItem = ({data}) => { 
  return (
    <>
        <div className="card card-compact bg-[#F3F3F3] shadow-xl">
            <figure className="relative">
                <img src={data?.image} 
                alt={data?.name} 
                className="h-[300px] object-cover w-full"/>
                <div className="absolute right-8 top-8 bg-[#111827] text-white px-5 py-2">
                    ${data?.price}
                </div>
            </figure>
        <div className="card-body text-center">
            <h2 className="text-[20px] font-bold text-center mt-2">{data?.name}</h2>
            <p className="text-md">{data?.recipe}</p>
            <div className="card-actions justify-center">
            <button
            className="text-[#BB8506] font-bold uppercase border-b-900 border-b rounded-bl rounded-br border-[#BB8506] pb-3 mt-5 bg-[#E8E8E8] py-2 px-4 hover:bg-[#09090a]"
            >Add To Cart</button>
            </div>
        </div>
        </div>
    </>
  )
}

export default SingleShopItem