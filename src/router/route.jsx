import {
    createBrowserRouter, 
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu/Menu";
import Shop from "../Components/Shop/Shop";
import ContactUs from "../Components/ContactUs/ContactUs";
import Login from "../Components/Login/Login";

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
            element: <Shop/>
        },
        {
            path: "/contact",
            element: <ContactUs/>
        },
        {
            path: "/login",
            element: <Login/>
        }
      ]
    },
  ]);

  export default router;