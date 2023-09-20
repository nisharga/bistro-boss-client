import { Helmet } from "react-helmet-async"
import Cover from "../../Shared/Cover/Cover"
import bannar from "../../assets/menu/banner3.jpg"
import useMenu from "../../hooks/useMenu"
import SectionTitle from "../../Shared/SectionTitle/SectionTitle"
import MenuItem from "../../Shared/MenuItem/MenuItem"

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu?.filter(val => val.category === "offered")
    const dessert = menu?.filter(val => val.category === "dessert")
    const pizza = menu?.filter(val => val.category === "pizza")
    const salad = menu?.filter(val => val.category === "salad")
    const soup = menu?.filter(val => val.category === "soup")
  return (
    <div>
        <Helmet>
            <title>Bistro Boss | Menu</title>
        </Helmet>
        <Cover 
            image={bannar} 
            title="Our Menu" 
            subtitle="Would you like to try a dish"
        />
        {/* section start  */}
       <div className="pt-16">
        <SectionTitle
                title="TODAY'S OFFER" 
                subtitle="Don't miss"
            />
       </div>
       <div className="grid md:grid-cols-2 gap-4 container mx-auto pt-8 pb-16">
        {offered?.map(data => <MenuItem data={data} key={data._id}></MenuItem>)}
       </div>
    </div>
  )
}

export default Menu