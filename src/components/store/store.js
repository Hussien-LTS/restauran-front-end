import React from "react";

import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import itemsSlice from "./slices/itemSlices/itemsSlice";
import addCategorySlice from "./slices/categorySlices/addCategorySlice";
import getCategoriesSlice from "./slices/categorySlices/getCategoriesSlice";
import updateCategorySlice from "./slices/categorySlices/updateCategorySlice";
import getCategoryItemsSlice from "./slices/itemSlices/getCategoryItemsSlice";


const store = configureStore({
  reducer: {
    auth:authReducer,
    items:itemsSlice,
    getCategories:getCategoriesSlice,
    addCategory:addCategorySlice,
    updatedCategory: updateCategorySlice,
    getCategoryItems:getCategoryItemsSlice
  },
});

export default store;
