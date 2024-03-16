import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";

// Chunking
// Code splitting
// Dynamic Bundling
// Lazy loading
// On demand loading
// Dynamic import

const Grocery = lazy(() => import("./components/Grocery"));
console.log("Grocery:: ", Grocery);

const About = lazy(() => import("./components/About"));
console.log("About:: ", About);

console.log("React lazy:: ", lazy);
console.log("React lazy:: ", React.lazy);

const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
            <Outlet/>
            {/* If path = / */}
            {/* <Body></Body> */}

            {/* If path = /about */}
            {/* <About></About> */}

            {/* If path = /contact */}
            {/* <Contact></Contact> */}
            <Footer></Footer>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: (<Suspense fallback={<Shimmer/>}>
                    <About/>
                    </Suspense>)
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu/>
            },
            {
                path: '/grocery',
                element: (<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>)
                  
            }
        ],
        errorElement: <Error/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);