//Nơi lưu trữ thông tin của mình
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'

export default configureStore({
    reducer: {
        user: userReducer,
    }
})