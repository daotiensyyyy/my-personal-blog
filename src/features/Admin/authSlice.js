import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminApi from "../../api/adminApi";

export const login = createAsyncThunk(
    'login',
    async (value) => {
        const response = await adminApi.login(value);
        localStorage.setItem('accessToken', response.data.accessToken);
    }
);

export const logout = createAsyncThunk(
    'logout',
    async () => {
        localStorage.removeItem('accessToken');
    }
);

const initialState = {}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.auth = action.payload;
        })
        builder.addCase(logout.fulfilled, (state, action) => {
            state.auth = [];
        })
    }
})

export default authSlice.reducer;