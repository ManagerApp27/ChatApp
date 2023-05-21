import { createSlice } from "@reduxjs/toolkit";
import { fetchLogin } from "../thunk/fetchAuth";
import jwtDecode from "jwt-decode";

const getUserId = () => {
  const token = localStorage.getItem("access");
  if (token) {
    const decodedToken = jwtDecode(token);
    return decodedToken.user_id;
  }
  return null;
};

const initialState = {
  user_id: getUserId(),
  isLoding: false,
  error: null,
};

const authSlices = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      state.user_id = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state) => {
      state.isLoding = true;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.user_id = action.payload;
      state.isLoding = false;
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoding = false;
    });
  },
});
export const { logout } = authSlices.actions;
export default authSlices.reducer;
