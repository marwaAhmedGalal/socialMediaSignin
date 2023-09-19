import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store/Store";
import axios_common from "../../Services/api";

// Define a type for the slice state
interface UserState {
  errors: string;
  loading: boolean;
  socialData: {
    userName: string;
    code: string;
  };
}

// Define the initial state using that type
const initialState: UserState = {
  errors: "",
  loading: false,
  socialData: {
    userName: "",
    code: "",
  },
};

export const sendSocialData = createAsyncThunk(
  "user/sendSocialData",
  async (socialData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios_common.post(`register/google`, socialData);
      return data;
    } catch (error) {
      return console.log(rejectWithValue(error));
    }
  }
);

// Define the initial state using that type

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendSocialData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(sendSocialData.fulfilled, (state, action) => {
      const socialData = action.payload;
      state.socialData = socialData;
      state.loading = false;
    });
    builder.addCase(sendSocialData.rejected, (state) => {
      state.loading = false;
      // state.errors = action.payload;
    });
  },
});

// export const { login } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const userData = (state: RootState) => state.user;

export default userSlice.reducer;
