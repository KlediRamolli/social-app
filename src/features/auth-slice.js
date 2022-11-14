import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload: { isSignedIn } }) => {
      state.isSignedIn = isSignedIn;
    },
  },
});

export default authSlice.reducer;
export const { setUser } = authSlice.actions;
