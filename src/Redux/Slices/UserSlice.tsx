import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store/Store";
import axios_common from "../../Services/api";
export interface socialUser {
  username: string;
  code: string;
}
export interface UserState {
  userData: object;
  loading: boolean;
  socialLoginData: socialUser;
  error: string | undefined;
  token: string;
}
const initialState: UserState = {
  userData: {},
  loading: false,
  socialLoginData: {
    code: "",
    username: "",
  },
  error: undefined,
  token: "",
};

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (scialData: socialUser, { rejectWithValue }) => {
    return await axios_common
      .post(`social-auth`, scialData)
      .then(({ data }) => {
        console.log(data.data, data.data.access_token);
        localStorage.setItem("token", data.data.access_token);
        localStorage.setItem("user", data.data);
        return data.data;
      })
      .catch((err) => rejectWithValue(err.response?.data));
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    //socialUser
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<socialUser>) => {
        console.log("full", action.payload);
        state.userData = action.payload;
        state.token = `${action.payload}`;
        console.log(state.token);

        state.loading = false;
        state.socialLoginData = action.payload;
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      console.log("rejected", action.payload);
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

export const User = (state: RootState) => state.user;

export default userSlice.reducer;
