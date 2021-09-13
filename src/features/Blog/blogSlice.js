import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import adminApi from '../../api/adminApi';
import userApi from '../../api/userApi';

export const fetchAllPosts = createAsyncThunk(
    'users/fetchAllPosts',
    async () => {
        const response = await userApi.getAllPosts();
        return response.data;
    }
);

export const fetchPostBySlug = createAsyncThunk(
    'users/fetchPostBySlug',
    async (value) => {
        const response = await userApi.getPostBySlug(value);
        return response.data;
    }
);

export const createPost = createAsyncThunk(
    'admin/newPost',
    async (value) => {
        const response = await adminApi.createPost(value);
        return response.data;
    }
);

export const deletePost = createAsyncThunk(
    'admin/deletePost',
    async (value) => {
        const response = await adminApi.deletePost(value);
        return response.data;
    }
);

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
    detail: {},
};



export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        // addPost: (state, action) => {
        //     state.posts.push(action.payload);
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
        });
        builder.addCase(createPost.fulfilled, (state, action) => {
            state.posts.push(action.payload);
        });
        builder.addCase(fetchPostBySlug.fulfilled, (state, action) => {
            state.detail = action.payload[0];
        });
        builder.addCase(deletePost.fulfilled, (state, action) => {
            const removePostId = action.payload._id;
            state.posts = state.posts.filter(post => post._id !== removePostId);
        });
    },
});

// const { reducer, actions } = blogSlice;
// export const { addPost } = actions;
export default blogSlice.reducer;
