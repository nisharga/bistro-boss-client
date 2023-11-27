 
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle"
import MenuItem from "../../../Shared/MenuItem/MenuItem"
import useMenu from "../../../hooks/useMenu"
import { Link } from "react-router-dom"

export const PopularMenu = () => {
    const [menu] = useMenu([])
    const popular = menu?.filter(val => val.category === "popular")  
  return (
    <div className="py-[60px]">
       <SectionTitle
        subtitle={'Check it out'}
        title={'FROM OUR MENU'}
       /> 
      <div className="grid md:grid-cols-2 gap-4 container mx-auto mb-12 mt-12 p-4">
        {
          popular?.map((data) => <MenuItem 
          key={menu._id} 
          data={data}
          ></MenuItem>)
        }  
        
      </div>
      <div className="text-center">
          <Link className=" text-[#1F2937] font-bold uppercase border-b-900 border-b rounded-bl rounded-br border-black pb-3 mt-5"
          to="/shop"
          >
          View Full Menu</Link>
        </div>
    </div>
  )
}
