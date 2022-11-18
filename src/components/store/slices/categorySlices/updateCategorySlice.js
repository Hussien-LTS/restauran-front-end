import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { url } from "../../api";

const initialState = {
  updateCategory: [],
  error: "",
  loading: false,
};

export const updateCategoryFetch = createAsyncThunk("category/updateCategoryFetch", async (category,{rejectWithValue}) => {
  try {
    const response = await axios.put(`${url}/category`,category);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }

});

const addCategorySlice = createSlice({
  name: "updateCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateCategoryFetch.pending, (state, action) => {
        state.loading = true;
      });
    builder.addCase(updateCategoryFetch.fulfilled, (state, action) => {
      state.updateCategory = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(updateCategoryFetch.rejected, (state, action) => {
      state.updateCategory = [];
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default addCategorySlice.reducer;
