import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import ResturantMenu from "./components/ResturantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// import Grocery from "./components/Grocery";
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  //Assume authentication code to fetch some login data whesther the username and password is correct or not
  //and kept this data in the local state
  const [userName, setUserName] = useState();

  useEffect(() => {
    //make an api call and send username and password
    const data = {
      name: "Jatin Goel",
      //now want to keep this data in userInfo
    };
    setUserName(data.name);
  }, []);

  //now how to pass this context data in the app for updating the value from Default user to this name
  //by using Context Provider
  //created the local state variable and tied the value of  UserContext with the state variables. Whenever the values changes
  //UserContext changes

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      {/* Passing the setUserName also to update the context data live which is written in body component and can be accessed in the body component*/}
      {/* basically put this setUserName in the context to modify itself  */}
      <div className="app">
        <Header />
        {/* if path is / then render Body
        <Body/>
       if path is /about then render About
        <About/>
          if path is /contact then render Contact
        <Contact/> */}
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/resturants/:resId",
        element: <ResturantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
