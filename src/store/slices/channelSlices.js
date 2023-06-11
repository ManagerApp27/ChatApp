import { createSlice } from "@reduxjs/toolkit";
import { fetchChannel } from "../thunk/fetchChannel";

const initialState = {
  isLoding: false,
  channel_id: null,
  channels: [],
  error: null,
};

const channelSlices = createSlice({
  name: "channels",
  initialState,
  reducers: {
    selectChannel: (state, action) => {
      state.channel_id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChannel.pending, (state) => {
      state.isLoding = true;
    });
    builder.addCase(fetchChannel.fulfilled, (state, action) => {
      state.channels = action.payload;
      state.isLoding = false;
    });
    builder.addCase(fetchChannel.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoding = false;
    });
  },
});

export const { selectChannel } = channelSlices.actions;
export default channelSlices.reducer;
