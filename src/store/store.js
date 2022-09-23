import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice';
import indPostReducer from '../features/indPost/indPostSlice'

const store = configureStore({
    reducer: {
        posts: postsReducer,
        indPost: indPostReducer
    }
});

export default store