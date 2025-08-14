// src/store/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategoryKey: "", // 'hair' | 'shower' | 'bath'
  selectedCategoryLabel: "", // 'HAIR' | 'SHOWER' | 'BATH'
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCategory(state, action) {
      const { key, label } = action.payload; // { key:'hair', label:'HAIR' }
      state.selectedCategoryKey = key;
      state.selectedCategoryLabel = label ?? key.toUpperCase();
    },
    clearCategory(state) {
      state.selectedCategoryKey = "";
      state.selectedCategoryLabel = "";
    },
  },
});

export const { setCategory, clearCategory } = productSlice.actions;
export default productSlice.reducer;
