import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import ProductDetails from "../components/ProductDetails.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/product-details/:productId",
        element: <ProductDetails/>,
    },
]);