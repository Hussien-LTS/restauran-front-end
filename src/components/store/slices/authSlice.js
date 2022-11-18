import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../api";

const initialState = {
  token: "",
  email: "",
  username: "",
  _id: "",
  isAdmin: "",
  isCashier: "",
  isVerified: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}/auth/registerUser`, {
        username: values.username,
        email: values.email,
        password: values.password,
      });
      const userToken = token.data.message.user.token;

      return userToken;
    } catch (error) {
      console.log(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}/auth/login`, {
        email: values.email,
        password: values.password,
      });
      const userToken = token.data.message.user.token;
      localStorage.setItem("token",userToken)
      return token.data.message.user;
    } catch (error) {
      console.log(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        console.log(action.payload);
        return {
          ...state,
          _id: action.payload._id,
          email: action.payload.email,
          username: action.payload.username,
          isAdmin: action.payload.isAdmin,
          isCashier: action.payload.isCashier,
          isVerified: action.payload.isVerified,
          token: action.payload.token,
          loginStatus: "success",
        };
      } else return state;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      console.log("==================", action.payload);
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    });
  },
});

// export const {  logoutUser } = authSlice.actions;

export default authSlice.reducer;
