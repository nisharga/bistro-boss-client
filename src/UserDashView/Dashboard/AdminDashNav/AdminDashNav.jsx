import { NavLink } from "react-router-dom"
import { HiHome } from "react-icons/hi2";
import { ImSpoonKnife } from "react-icons/im"; 
import { FaBookMedical } from "react-icons/fa";
import {  VscThreeBars } from "react-icons/vsc";
import { FaUsers } from "react-icons/fa6";

const AdminDashNav = () => {
  return (
    <>
    <li><NavLink to="/admin-dashboard"><HiHome/>Admin Home</NavLink> </li>
    <li><NavLink to="/add-items"><ImSpoonKnife/>Add Items</NavLink> </li>
    <li><NavLink to="/manage-items"><VscThreeBars/>Manage Items</NavLink> </li>
    <li><NavLink to="/manage-booking"><FaBookMedical/>Manage Booking</NavLink> </li> 
    <li><NavLink to="/all-users"><FaUsers/>All Users</NavLink> </li> 
    </>
  )
}

export default AdminDashNav