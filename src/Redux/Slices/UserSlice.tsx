import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store/Store";
import axios_common from "../../Services/api";
export interface User {
  username: string;
  code: string;
}
export interface UserState {
  loading: boolean;
  socialLoginData: User;
  error: string | undefined;
}
const initialState: UserState = {
  loading: false,
  socialLoginData: {
    code: "",
    username: "",
  },
  error: undefined,
};
export const fetchUsers = createAsyncThunk(
  "auth/signin",
  async (scialData: User, { rejectWithValue }) => {
    try {
      const { data } = await axios_common.post(`social-auth/google`, scialData);
      return data;
    } catch (error) {
      return console.log(rejectWithValue(error));
    }
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.socialLoginData = action.payload;
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.socialLoginData = {
        code: "",
        username: "",
      };
      state.error = action.error.message;
    });
  },
  reducers: {},
});

export const userData = (state: RootState) => state.user;

export default userSlice.reducer;
