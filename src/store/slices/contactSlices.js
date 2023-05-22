import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "../thunk/fetchContact";

const initialState = {
  isLoding: false,
  contacts: [],
  error: null,
};

const contactsSlices = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.isLoding = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
      state.isLoding = false;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoding = false;
    });
  },
});

export default contactsSlices.reducer;