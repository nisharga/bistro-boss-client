import { useEffect, useState } from "react"
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle"
import MenuItem from "../../../Shared/MenuItem/MenuItem"

export const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularProduct = data?.filter(val => val.category === "popular")
            setMenu(popularProduct)
        })
        
    }, [menu])
    console.log(Array.isArray(menu))
  return (
    <div className="py-[60px]">
       <SectionTitle
        subtitle={'Check it out'}
        title={'FROM OUR MENU'}
       /> 
      <div className="grid md:grid-cols-2 gap-4 container mx-auto mb-12 mt-12">
        {
          menu?.map((data) => <MenuItem 
          key={menu._id} 
          data={data}
          ></MenuItem>)
        }  
        
      </div>
      <div className="text-center">
          <button className=" text-[#1F2937] font-bold uppercase border-b-900 border-b rounded-bl rounded-br border-black pb-3 mt-5"
          onClick={() => alert("HELLO BANGLADESH")}
          >
          View Full Menu</button>
        </div>
    </div>
  )
}
