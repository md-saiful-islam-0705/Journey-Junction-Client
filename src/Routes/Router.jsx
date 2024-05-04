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
import ViewDetails from "../components/ViewDetails";
import MyList from "../pages/MyList/MyList";
import UpdateSpot from "../components/UpdateSpot";
import SelectedSpots from "../pages/SelectedSpots/SelectedSpots";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://assignment-10-server-inky-theta.vercel.app/spots"),

      },
      {
        path: "/details/:id", 
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment-10-server-inky-theta.vercel.app/spots/${params.id}`),
      },
      {
        path: "/addtouristspot",
        element: (
          <PrivateRoute>
            <AddTouristsSpot></AddTouristsSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/alltouristspots",
        element: <AllTouristSpots></AllTouristSpots>,
        loader: () => fetch("https://assignment-10-server-inky-theta.vercel.app/spots"),
      },
      // {
      //   path: "/selectedspots/:countryName",
      //   element: <SelectedSpots></SelectedSpots>,
      //   loader: ({ params }) => fetch(`https://assignment-10-server-inky-theta.vercel.app/spots/${params.countryName}`),
      // },
      
      {
        path: "/alltouristspots/details/:id", 
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment-10-server-inky-theta.vercel.app/spots/${params.id}`),
      },
      {
        path: "/list", 
        element: (
          <PrivateRoute>
            <MyList></MyList> 
          </PrivateRoute>
        ),
        loader: () =>
          fetch(`https://assignment-10-server-inky-theta.vercel.app/user-spots`), 
      },
      {
        path: "update/:id", 
        element: (
          <PrivateRoute>
            <UpdateSpot ></UpdateSpot>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment-10-server-inky-theta.vercel.app/user-spots/${params.id}`),
      },
      
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
