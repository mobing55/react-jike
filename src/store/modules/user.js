// 用户相关模块管理
import { createSlice } from "@reduxjs/toolkit";
import { request, setToken as _setToken, getToken, removeToken } from "@/utils";

const userStore = createSlice({
    name:'user',
    initialState: {
        // token持久化
        token: getToken() || '',
        userInfo: {}
    },
    //同步修改方法
    reducers: {
        setToken(state, action) {
            state.token = action.payload
            // locatStory存一份 ( token持久化 )
            _setToken(action.payload)
        },
        setuserInfo(state, action) {
            state.userInfo = action.payload
        },
        clearUserInfo(state) {
            state.token = ''
            state.userInfo = {}
            removeToken()
        }
    }
})

//解构actionCreate
const { setToken, setuserInfo, clearUserInfo } =  userStore.actions

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

//获取个人信息异步方法
const fetchUserInfo = () => {
    return async (dispatch) => {
        const res = await request.get('/user/profile')
        dispatch(setuserInfo(res.data))
    }

}


export { fetchLogin, fetchUserInfo, clearUserInfo }

export default userReducer