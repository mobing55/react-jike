// 封装高阶组件
// 核心逻辑： 有token 正常跳转 无token 返回login

import { getToken } from "@/utils";
import { Navigate } from "react-router-dom";

export function AuthRoute ({ children }) { // 原本要跳转的界面
    const token = getToken()
    if(token) {
        return <>{children}</>
    } else {
        return <Navigate to={'/login'} replace/> //replace替换原则,表示不要之前的记录
    }
}