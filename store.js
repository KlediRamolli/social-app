import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./src/features/auth-slice";

export const store = configureStore({
  reducer: {
    user: authSlice,
  },
});
