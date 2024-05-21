import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "./pages/Home/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Menu from "./pages/Menu/Menu/Menu";
import Shop from "./pages/Shop/Shop";

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
                path: 'shop',
                element: <Shop />
            }
        ]
    },
]);
export default router;