import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import {router} from "./helpers/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CssBaseline/>
        <RouterProvider router={router}/>
    </React.StrictMode>
);