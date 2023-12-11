import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "saurav2942",
    userData: null,
  },
  reducers: {
    searchUser: (state, action) => {
      state.username = action.payload.userName;
      state.userData = action.payload.userData;
    },
  },
});

export const { searchUser } = userSlice.actions;
export default userSlice.reducer;
