import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AddContinent from "../pages/AddContinent";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import AddCounty from "../pages/AddCounty";


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
                element: <h1>tourists_spot</h1>
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
                path: "/my_list",
                element: <h1>my_list</h1>
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
                element: <h1>signIn</h1>
            },
            {
                path: "/signUp",
                element: <h1>signUp</h1>
            },
        ]
    },
]);