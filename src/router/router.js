import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Layout from "../components/Layout/Layout";

const router = createBrowserRouter([
    {
        path: "/", element: <Layout />, children: [
            {
                index: true, element: <Home />
            }
        ]
    }
]);

export default router;