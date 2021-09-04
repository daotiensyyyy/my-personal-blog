import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';

export const fetchAllPosts = createAsyncThunk(
    'users/fetchAllPosts',
    async () => {
        const response = await userApi.getAllPosts();
        return response.data;
    }
)

const initialState = {
    posts: [
        // {
        //     id: 1,
        //     photo: '',
        //     title: ' Lorem ipsum dolor sit amet consectetur',
        //     date: '02/09/2021',
        //     field: 'Draft',
        //     content: 'lorem Ipsum is simply dummy text of the printing and typesetting industry  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sed!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sed!',
        // },
    ],
};



export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
        })
    },
});

const { reducer, actions } = blogSlice;
export const { addPost } = actions;
export default reducer;
