import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostState {
  posts: any[]; // Update the type as per your post structure
  isLoading: boolean;
}

const initialState: PostState = {
  posts: [],
  isLoading: false,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<any[]>) => {
      state.posts = action.payload;
    },
    getPostFetch: (state) => {
      state.isLoading = true;
    },
    getPostSuccess: (state, action: PayloadAction<any[]>) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    getPostFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setPosts, getPostFetch, getPostSuccess, getPostFailure } = postSlice.actions;
export default postSlice.reducer;




