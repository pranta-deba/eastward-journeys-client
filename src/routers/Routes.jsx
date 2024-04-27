import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AddContinent from "../pages/AddContinent";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import AddCounty from "../pages/AddCounty";
import DetailsPage from "../pages/DetailsPage";
import CountryPlace from "../pages/CountryPlace";
import TouristsPlace from "../pages/TouristsPlace";
import EditPlace from "../pages/EditPlace";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import MyList from "../pages/MyList";


export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: "error pages",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/tourists_spot",
                element: <TouristsPlace />
            },
            {
                path: "/add_tourists_spot",
                loader: () => fetch('http://localhost:5000/continents'),
                element: <AddTouristsSpot />
            },
            {
                path: "/add_continent",
                element: <AddContinent />
            },
            {
                path: "/add_country",
                loader: () => fetch('http://localhost:5000/continents'),
                element: <AddCounty />
            },
            {
                path: "/details/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/places/${params.id}`),
                element: <DetailsPage />
            },
            {
                path: "/places/:country",
                loader: ({ params }) => fetch(`http://localhost:5000/filter_places/${params.country}`),
                element: <CountryPlace />
            },
            {
                path: "/edit/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/places/${params.id}`),
                element: <EditPlace/>
            },
            {
                path: "/my_list",
                element: <MyList/>
            },
            {
                path: "/blogs",
                element: <h1>my_list</h1>
            },
            {
                path: "/about",
                element: <h1>about</h1>
            },
            {
                path: "/signIn",
                element: <SignIn/>
            },
            {
                path: "/signUp",
                element: <SignUp/>
            },
        ]
    },
]);