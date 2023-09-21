import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./Slices/userSlice";

const store = configureStore({
  reducer: {
    loginUser: userSlice,
  },
});

export default store;
