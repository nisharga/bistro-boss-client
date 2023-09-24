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
  ]);

  export default router;