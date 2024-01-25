import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


 const AppLayout=()=>{
    return (
        <div className="app">
        <Header/>
        {/* if path is / then render Body
        <Body/>
       if path is /about then render About
        <About/>
          if path is /contact then render Contact
        <Contact/> */}
        <Outlet/>
        </div>
    )  
}

const appRouter=createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element: <Body/>,
            },
            {
                path:"/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element:<Contact/>,
            },
            {
                path: "/resturants/:resId",
                element: <ResturantMenu/>,
            }
        ],
        errorElement: <Error/>,  
    },  
])

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);