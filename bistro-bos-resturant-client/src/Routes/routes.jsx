import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "./pages/Home/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Menu from "./pages/Menu/Menu/Menu";
import Shop from "./pages/Shop/Shop";
import LogIn from "./pages/LogIn/LogIn";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import DashBoardHome from "./pages/Dashboard/DashBoardHome/DashBoardHome";
import MyCart from "./pages/Dashboard/MyCart/MyCart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <Menu />
            },
            {
                path: '/shop/:title',
                element: <Shop />
            }
        ]
    },
    {
        path: '/login',
        element: <LogIn />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                index: 'dashboard',
                element: <DashBoardHome />
            },
            {
                path: 'myCart',
                element: <MyCart />
            }
        ]
    }
]);
export default router;