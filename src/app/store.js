import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../features/Blog/blogSlice';

export const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});
