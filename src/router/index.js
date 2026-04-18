// 路由配置
import { createBrowserRouter } from "react-router-dom";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import { AuthRoute } from "@/components/AuthRoute";
// 配置路由
const router = createBrowserRouter([
    {
        path:'/',
        element: <AuthRoute> <Layout /> </AuthRoute>
    },
    {
        path:'/login',
        element: <Login />
    },
])

export default router