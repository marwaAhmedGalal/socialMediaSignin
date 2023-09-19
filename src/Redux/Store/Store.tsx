import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../Slices/CounterSlice";
import { userSlice } from "../Slices/UserSlice";
import {stateSlice} from "../Slices/stateSlice";


// ...

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    user: userSlice.reducer,
    mode:stateSlice.reducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
