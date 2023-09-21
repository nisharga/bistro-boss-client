import { Helmet } from "react-helmet-async"
import Cover from "../../Shared/Cover/Cover"
import bannar from "../../assets/menu/banner3.jpg"
import dessertBG from "../../assets/menu/dessert-bg.jpeg"
import pizzaBG from "../../assets/menu/pizza-bg.jpg"
import saladBG from "../../assets/menu/salad-bg.jpg"
import soupBG from "../../assets/menu/soup-bg.jpg"
import useMenu from "../../hooks/useMenu"  
import TodaysOffer from "./TodaysOffer/TodaysOffer" 
import Desserts from "./Desserts/Desserts"
import Pizza from "./Pizza/Pizza"
import Salad from "./Salad/Salad"
import Soup from "./Soup/Soup"

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
       <TodaysOffer offered={offered}></TodaysOffer>
       <Desserts dessertBG={dessertBG} dessert={dessert}></Desserts>
       <Pizza pizzaBG={pizzaBG} pizza={pizza}></Pizza>
       <Salad saladBG={saladBG} salad={salad}></Salad>
       <Soup soupBG={soupBG} soup={soup}></Soup>
    </div>
  )
}

export default Menu