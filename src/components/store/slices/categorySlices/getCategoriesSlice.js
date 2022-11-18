import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { url } from "../../api";

const initialState = {
  categories: [],
  error: "",
  loading: false,
};

export const getCategoriesFetch = createAsyncThunk("category/addCategory", async () => {




  try {
    const response = await axios.get(`${url}/category/`);
    return response.data;
  } catch (error) {
    return error;
  }
});

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoriesFetch.pending, (state, action) => {
        state.loading = true;
      });
    builder.addCase(getCategoriesFetch.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(getCategoriesFetch.rejected, (state, action) => {
      state.categories = [];
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default categorySlice.reducer;
