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
import ManageItems from "../AdminDashView/ManageItems/ManageItems";
import AboutUs from "../Components/AboutUs/AboutUs";
import Payment from "../UserDashView/Payment/payment";
import Payconfirm from "../UserDashView/Payment/payconfirm";
import PaymentHistory from "../UserDashView/PaymentHistrory/PaymentHistory";
import ManageBooking from "../AdminDashView/ManageBooking/ManageBooking";
import AdminDashboard from "../AdminDashView/AdminDashboard/AdminDashboard";
import UserHome from './../UserDashView/UserHome/UserHome';


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
            path: "/aboutus",
            element: <AboutUs/>
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
      element: <PrivateRoute><><Dashboard/><UserHome/></></PrivateRoute>,
      children: [
        {
            path: "mycart",
            element: <MyCart/>
        },
        {
            path: "admin-dashboard",
            element: <AdminRoute><AdminDashboard/></AdminRoute>
        },{
            path: "all-users",
            element: <AdminRoute><AllUser/></AdminRoute>
        },
        {
            path: "add-items",
            element: <AdminRoute><AddItem/></AdminRoute>
        },
        {
            path: "manage-booking",
            element: <AdminRoute><ManageBooking/></AdminRoute>
        },
        {
            path: "add-review",
            element: <AddReview/>
        },
        {
            path: "manage-items",
            element: <ManageItems/>
        },
        {
            path: "payment",
            element: <Payment/>
        },{
            path: "payconfirm/:id",
            element: <Payconfirm/>
        },{
            path: "payment-histrory",
            element: <PaymentHistory/>
        }
      ]
    }
  ]);

  export default router;