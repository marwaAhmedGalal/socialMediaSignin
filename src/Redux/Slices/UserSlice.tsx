import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store/Store";
import axios_common from "../../Services/api";

// Define a type for the slice state
interface UserState {

  errors: any;
  loading: boolean;
  socialUserName: string
}

// Define the initial state using that type
const initialState: UserState = {
  errors: "",
  loading: false,
  socialUserName: ""
};

export const sendSocialData = createAsyncThunk(
  "user/sendSocialData",
  async (socialUserName, thunkAPI) => {
    
    await axios_common({
      url: "register/google",
      method: "POST",
    })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
);

// Define the initial state using that type

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendSocialData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(sendSocialData.fulfilled, (state, action) => {
  
      const socialUserName = action.payload;
      state.socialUserName = socialUserName;
      state.loading = false;
    });
    builder.addCase(sendSocialData.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
  },
});

// export const { login } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const userData = (state: RootState) => state.user;

export default userSlice.reducer;
