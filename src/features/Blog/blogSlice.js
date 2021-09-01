import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
};



export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: { },
    extraReducers: (builder) => { },
});

export default blogSlice.reducer;
