import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import counterReducer from "./services/counterSlice";
import thunk from "redux-thunk";

// const middleWares = [thunk];
// const enhancer = applyMiddleware(...middleWares);

export const store = configureStore({
  middleware: [thunk],
  reducer: {
    counter: counterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
