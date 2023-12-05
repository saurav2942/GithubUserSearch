import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    themeType: "Dark",
    bgTheme: "#F6F8FF",
    compTheme: "#FEFEFE",
  },
  reducers: {
    changeTheme: (state, action) => {
      state.themeType = action.payload.themeType;
      state.bgTheme = action.payload.bgTheme;
      state.compTheme = action.payload.compTheme;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
