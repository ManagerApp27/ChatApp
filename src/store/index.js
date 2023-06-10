import { configureStore } from "@reduxjs/toolkit";
import authSlices from "./slices/authSlices";
import contactSlices from "./slices/contactSlices";
import darkModeSlices from "./slices/darkModeSlices";
import channelSlices from "./slices/channelSlices";

export default configureStore({
  reducer: {
    auth: authSlices,
    contact: contactSlices,
    channel: channelSlices,
    isDarkMode: darkModeSlices,
  },
});
