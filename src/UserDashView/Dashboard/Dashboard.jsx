
import "./dashboard.css";
import useCart from "../../hooks/useCart";
import CommonDashNav from "./CommonDashNav/CommonDashNav";
import { Outlet } from "react-router-dom";
import UserDashNav from "./UserDashNav/UserDashNav";
import AdminDashNav from "./AdminDashNav/AdminDashNav";
import dashlogo from "../../assets/Dashboard/dashboardLogo.png";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../../Shared/Loading/Loading";

const Dashboard = () => {
  
  // const user = 'admin';
  const [cart] = useCart();
  const [isAdmin, isAdminLoading] = useAdmin();
  
  return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
     
    {/* outlet */}
    <Outlet/>
    {/* outlet */}
    
    
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    
    <ul className="menu p-4 w-80 min-h-full md:text-lg uppercase font-bold text-base-content adminmenu bg-[#D1A054]">
      <div className="p-4 flex justify-center items-center">
        <img src={dashlogo} alt="Dashboard Logo" className="w-[200px]"/>
      </div>
      {/* If usr role is user then show UserDashNav */}
      {
        isAdminLoading && <Loading/>
      }
      {
        isAdmin ? <AdminDashNav /> : <UserDashNav cart={cart} />  
      }
      
      {/* { } */}
      {/* common dashboard link for all user */}
      <CommonDashNav />
    </ul> 
  </div>
</div>
  )
}

export default Dashboard

