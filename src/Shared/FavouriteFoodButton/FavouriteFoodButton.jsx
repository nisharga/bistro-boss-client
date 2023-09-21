import { Link } from "react-router-dom"

const FavouriteFoodButton = ({btnText, to}) => {
  return (
    <div className="pb-12 text-center">
        <Link to={to} className=" text-[#1F2937] font-bold uppercase border-b-900 border-b rounded-bl rounded-br border-black pb-3 mt-5 text-center" >{btnText}</Link>
    </div>
  )
}

export default FavouriteFoodButton