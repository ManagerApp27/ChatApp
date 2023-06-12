import { createSlice } from "@reduxjs/toolkit";
import { fetchChats } from "../thunk/fetchChat";

const initialState = {
  isLoding: false,
  chats: [],
  error: null,
};

const chatsSlices = createSlice({
  name: "chats",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchChats.pending, (state) => {
      state.isLoding = true;
    });
    builder.addCase(fetchChats.fulfilled, (state, action) => {
      state.chats = action.payload;
      state.isLoding = false;
    });
    builder.addCase(fetchChats.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoding = false;
    });
  },
});

export default chatsSlices.reducer;