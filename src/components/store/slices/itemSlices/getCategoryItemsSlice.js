import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useParams } from "react-router-dom";
import { url } from "../../api";
const initialState = {
  categoryItems: [],
  loading: false,
  error: "",
};
export const getCategoryItemsFetch = createAsyncThunk(
  "items/getCategoryItemsFetch",
  async ({ categoryId }) => {
    const userToken =localStorage.getItem("token")
    const config = {
      method: 'get',
      url: `${url}/category/${categoryId}/items`,
      headers: {
          'Authorization': `bearer ${userToken}`,
      },
   
  };

    const response = await axios(config);
    return response.data;
  }
);


const getCategoryItemsSlice = createSlice({
  name: "categoryItems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoryItemsFetch.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCategoryItemsFetch.fulfilled, (state, action) => {
      state.categoryItems = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(getCategoryItemsFetch.rejected, (state, action) => {
      state.categoryItems = [];
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default getCategoryItemsSlice.reducer;
