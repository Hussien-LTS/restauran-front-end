import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { url } from "../../api";

const initialState = {
  category: [],
  error: "",
  loading: false,
};




export const addCategoryFetch = createAsyncThunk("category/addCategoryFetch", async (category,{rejectWithValue}) => {
  try {
const userToken =localStorage.getItem("token")
    const config = {
      method: 'post',
      url: `${url}/category`,
      headers: {
          'Authorization': `bearer ${userToken}`,
      },
      data: category
  };
    const response = await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
      console.log(error);
      });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }

});

const addCategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addCategoryFetch.pending, (state, action) => {
        state.loading = true;
      });
    builder.addCase(addCategoryFetch.fulfilled, (state, action) => {
      state.category = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(addCategoryFetch.rejected, (state, action) => {
      state.category = [];
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default addCategorySlice.reducer;
