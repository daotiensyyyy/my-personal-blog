import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminApi from "../../api/adminApi";

export const login = createAsyncThunk(
    'login',
    async (value) => {
        const response = await adminApi.login(value);
        localStorage.setItem('userLogin', response.data.username);
        // console.log(response.data);
    }
);

export const logout = createAsyncThunk(
    'logout',
    async () => {
        const response = await adminApi.logout();
        localStorage.removeItem('userLogin');
    }
);

const initialState = {
    isLogin: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLogin = true;
        })
        builder.addCase(logout.fulfilled, (state, action) => {
            state.isLogin = false;
        })
    }
})

export default authSlice.reducer;