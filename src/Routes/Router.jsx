import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/LogIn/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About/About";
import Profile from "../pages/Profile/Profile";
import AddTouristsSpot from "../pages/AddTouristsSpot/AddTouristsSpot";
import AllTouristSpots from "../pages/AllTouristSpots/AllTouristSpots";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/properties.json'),
            },
            
            {
                path: '/addtouristspot',
                element: <AddTouristsSpot></AddTouristsSpot>, 
                
            },
            {
                path: '/alltouristspots',
                element: <AllTouristSpots></AllTouristSpots>,
                loader: () => fetch('http://localhost:3000/spots') 
                
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/about',
                element: <About></About> ,
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute> ,
            },
        ]
    }
]);

export default router;
