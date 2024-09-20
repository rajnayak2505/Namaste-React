import React, { lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
import UserContext from "./utils/userContex";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const About = lazy(() => import("./components/About"))

const AppLayout = () => {

    const [userName, setUserName] = useState();

    // Athentication logic
    useEffect(() => {
        // Make an API call and username and password
        const data ={
            name: "Rajesh Nayak",
        };
        setUserName(data.name)
    }, []);


    return (
        <Provider store={appStore}>
        <div className="app">
         <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <Header/>
            <Outlet/>
            </UserContext.Provider>
         </div>
        </Provider>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/cart",
                element: <Cart/>,
            },
            {
                path: "restaurants/:resId",
                element: <RestaurantMenu/>
            }
        ]
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)
