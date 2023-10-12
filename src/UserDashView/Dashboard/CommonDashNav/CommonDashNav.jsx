import { NavLink } from "react-router-dom"
import { BiHomeSmile } from "react-icons/bi"; 
import { AiFillLock } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { HiMiniEnvelope } from "react-icons/hi2";

const CommonDashNav = () => {
  return (
    <>
    <br/><hr/><br/>
    <li><NavLink to="/"><BiHomeSmile/> Home</NavLink></li>   
    <li><NavLink to="/menu"><AiOutlineMenu/>Our Menu</NavLink></li>   
    <li><NavLink to="/shop"><AiFillLock/>Shop</NavLink></li>   
    <li><NavLink to="/contact"><HiMiniEnvelope/> Contact</NavLink></li>   
    </>
  )
}

export default CommonDashNav