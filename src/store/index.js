import { configureStore } from "@reduxjs/toolkit";
import authSlices from "./slices/authSlices";

export default configureStore({
  reducer: {auth: authSlices},
});
