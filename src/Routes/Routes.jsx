import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import PageNotFount from "../Components/Error/PageNotFount";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        errorElement: <PageNotFount/> ,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path: "/apps",
                Component: Apps
            },
            {
                path: "installation",
                Component: Installation
            },
            {
                path: "app-details/:id",
                Component: AppDetails
            },
        ]
    }
])

export default router;