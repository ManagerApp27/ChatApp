import { configureStore } from "@reduxjs/toolkit";
import authSlices from "./slices/authSlices";
import contactSlices from "./slices/contactSlices";
import darkModeSlices from "./slices/darkModeSlices";

export default configureStore({
  reducer: {
    auth: authSlices,
    contact: contactSlices,
    isDarkMode: darkModeSlices,
  },
});
