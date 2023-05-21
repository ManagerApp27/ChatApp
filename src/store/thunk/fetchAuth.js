import { createAsyncThunk } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const API_PATH = process.env.REACT_APP_API_PATH;
const headers = { "Content-Type": "application/json" };

const fetchRefershToken = async (token) => {
  const params = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ refresh: token }),
  };
  const response = await fetch(`${API_PATH}/auth/refresh_token/`, params);
  const result = await response.json();
  localStorage.setItem("access", JSON.stringify(result.access));
  return true;
};

const fetchLogin = createAsyncThunk("auth/login", async (data) => {
  const params = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  };
  const response = await fetch(`${API_PATH}/auth/login/`, params);

  if (response.status === 200) {
    const result = await response.json();
    const { access, refresh } = result;
    localStorage.setItem("access", JSON.stringify(access));
    localStorage.setItem("refresh", JSON.stringify(refresh));
    const { user_id } = jwtDecode(access);
    return user_id;
  } else {
    return null;
  }
});

export { fetchLogin, fetchRefershToken };
