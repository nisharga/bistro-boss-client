import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../Shared/Header/Navbar"
import Footer from "../Shared/Footer/Footer"

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login');
  return (
    <div>
        {!noHeaderFooter && <Navbar/>}
        <Outlet/>
        {!noHeaderFooter &&  <Footer/>
}
    </div>
  )
}

export default Main