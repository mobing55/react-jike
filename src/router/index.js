// 路由配置
import { createBrowserRouter, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Login from "../pages/Login";

// 配置路由
const router = createBrowserRouter([
    {
        path:'/',
        element:'<Layout />'
    },
    {
        path:'/login',
        element:'<Login />'
    },
])

export default router