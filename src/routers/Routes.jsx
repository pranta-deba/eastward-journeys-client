import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";


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
                element: <h1>add_tourists_spot</h1>
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