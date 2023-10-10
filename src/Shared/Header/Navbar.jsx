import { useContext } from "react";
import "./Navbar.css";
import { AuthContext } from "../../Providers/AuthProviders";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { Link } from 'react-router-dom';
import useCart from "../../hooks/useCart";
const Navbar = () => {
  const {user, logout} = useContext(AuthContext) 
  const [cart] = useCart()
  console.log("cart is:", cart.data.length)
  return (
    <div className="navbar bg-base-100 fixed z-10 text-[#fff]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
      <li><a>
        <button className="btn mt-[-15px]">
           <AiOutlineShoppingCart/>
          <div className="badge badge-secondary">+{cart?.data?.length || 0}</div>
        </button>
      </a></li>
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? 
      <>
      <button className="btn glass text-[#fff] hover:text-blue-600 mt-[-15px]" onClick={logout}>Sign Out</button>
      </> : 
      <>
        <Link to="/login" className="btn glass">Log in</Link>
      </>
    }
  </div>
</div>
  )
}

export default Navbar