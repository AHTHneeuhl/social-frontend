import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      return {
        ...state,
        mode: state.mode === "light" ? "dark" : "light",
      };
    },
    setLogin: (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    },
    setLogout: (state) => {
      return {
        ...state,
        user: null,
        token: null,
      };
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("User friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      return {
        ...state,
        posts: action.payload.posts,
      };
    },
    setPost: (state, action) => {
      const updatedPost = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      return {
        ...state,
        posts: updatedPost,
      };
    },
  },
});

export const { setFriends, setLogin, setLogout, setMode, setPost, setPosts } =
  auth.actions;

export default auth.reducer;
