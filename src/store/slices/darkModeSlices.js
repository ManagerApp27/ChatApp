import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDarkMode: false,
};

const darkModeSlices = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { toggleTheme } = darkModeSlices.actions;
export default darkModeSlices.reducer;
