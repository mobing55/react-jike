// 用户相关模块管理
import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";

const userStore = createSlice({
    name:'user',
    initialState: {
        token:''
    },
    //同步修改方法
    reducers: {
        setToken( state, action) {
            state.token = action.payload
        }
    }
})

//解构actionCreate
const { setToken } =  userStore.actions

//获取reducer函数
const userReducer = userStore.reducer

//异步请求 完成登录获取token
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        // 1.发送异步请求
        const res = await request.post('/authorizations', loginForm)
        // 2.提交同步方法进行token存入
        dispatch(setToken(res.data.token))
    }
}


export { fetchLogin, setToken }

export default userReducer