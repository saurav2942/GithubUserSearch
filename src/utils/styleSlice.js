import { createSlice } from "@reduxjs/toolkit";

const styleSlice = createSlice({
  name: "style",
  initialState: {
    col1: "#2B3442",
    col2: "#4B6A9B",
    shadow: "#cbd5e1",
  },
  reducers: {
    changeStyle: (state, action) => {
      state.col1 = action.payload.col1;
      state.col2 = action.payload.col2;
      state.shadow = action.payload.shadow;
    },
  },
});

export const { changeStyle } = styleSlice.actions;
export default styleSlice.reducer;
