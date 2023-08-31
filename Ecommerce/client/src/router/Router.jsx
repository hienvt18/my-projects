import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Blog from "../pages/Blog";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";


const router = createBrowserRouter([
    {
        path:'/',
        element: <RootLayout/>,
        children: [
            {  path: '/',
                element: <Home/>
            },
            {
                path: '/shop',
                element: <Shop/>
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '/checkout',
                element: <CheckOut/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
        ]
    }
])

export default router