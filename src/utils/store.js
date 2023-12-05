import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import themeSlice from "./themeSlice";
import styleSlice from "./styleSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    theme: themeSlice,
    style: styleSlice,
  },
});

export default store;
