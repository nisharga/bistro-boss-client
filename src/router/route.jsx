import {
    createBrowserRouter, 
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu/Menu";
import Shop from "../Components/Shop/Shop";
import ContactUs from "../Components/ContactUs/ContactUs";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import PrivateRoute from "./Private/PrivateRoute"; 
import Dashboard from './../UserDashView/Dashboard/Dashboard';
import MyCart from './../UserDashView/MyCart/MyCart';
import AllUser from "../AdminDashView/AllUser/AllUser";
import AdminRoute from "./Admin/AdminRoute";
import AddItem from "../AdminDashView/AddItem/AddItem";
import AddReview from "../AdminDashView/AddReview/AddReview";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/menu",
            element: <Menu/>
        },
        {
            path: "/shop",
            element: <PrivateRoute><Shop/></PrivateRoute>
        },
        {
            path: "/contact",
            element: <ContactUs/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/signup",
            element: <SignUp/>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <PrivateRoute><Dashboard/></PrivateRoute>,
      children: [
        {
            path: "mycart",
            element: <MyCart/>
        },
        {
            path: "all-users",
            element: <AdminRoute><AllUser/></AdminRoute>
        },
        {
            path: "add-items",
            element: <AdminRoute><AddItem/></AdminRoute>
        },
        {
            path: "add-review",
            element: <AddReview/>
        }
      ]
    }
  ]);

  export default router;