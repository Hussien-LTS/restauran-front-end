import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../api";
const initialState = {
  items: [],
  loading: false,
  error:''
};

export const itemsFetch = createAsyncThunk("items/itemsFetch", async () => {
  const response = await axios.get(`${url}/item/`);
  return response.data;
});

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(itemsFetch.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(itemsFetch.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
      state.error = '';
    });
    builder.addCase(itemsFetch.rejected, (state, action) => {
      state.items = [];
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default itemsSlice.reducer;
