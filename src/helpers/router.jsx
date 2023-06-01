import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import ProductDetails from "../components/ProductDetails.jsx";
import Layout from "../components/Layout.jsx";
import AddProduct from "../components/AddProduct.jsx";
import EditProduct from "../components/EditProduct.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <App/>,
            },
            {
                path: "product-details/:productId",
                element: <ProductDetails/>,
            },
            {
                path: "add-product",
                element: <AddProduct/>,
            },
            {
                path: "product-edit/:productId",
                element: <EditProduct/>,
            }
        ],
    },
]);