import {  NavLink } from "react-router-dom"
import { AiFillHome } from "react-icons/ai";
import { AiFillCalendar } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineFolderView } from "react-icons/ai";
import { MdPayment } from "react-icons/md";

const UserDashNav = ({cart}) => {
  return (
    <>
    <li>
        <NavLink to="/dashboard"><AiFillHome/>User Home</NavLink>
      </li>
      <li>
        <NavLink to="/reservation"><AiFillCalendar/> Reservations</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/payment-histrory"><MdPayment/> Payment History</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/mycart"><AiOutlineShoppingCart/> My Cart
          <div className="badge badge-secondary">+{cart?.data?.length}</div>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/add-review"><AiOutlineFolderView/> Add Review</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/booking"><AiOutlineShoppingCart/> My Booking</NavLink>
      </li>
    </>
  )
}

export default UserDashNav