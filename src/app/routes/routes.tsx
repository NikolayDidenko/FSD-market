import { createBrowserRouter } from "react-router";
import { Signin } from "../../pages/login";
import { Signup } from "../../pages/register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Hello, you at home page!</div>
    },
    {
        path: '/signin',
        element: <Signin />
    },
    {
        path: '/signup',
        element: <Signup/>
    },
])