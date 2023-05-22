import { createAsyncThunk } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const API_PATH = process.env.REACT_APP_API_PATH;

const fetchContacts = createAsyncThunk("contacts/fetch", async () => {
  const accessToken = await JSON.parse(localStorage.getItem("access"));
  const { user_id } = jwtDecode(accessToken);
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const response = await fetch(`${API_PATH}/contact/?user=${user_id}`, params);

  const result = await response.json();

  if (response.status !== 200) throw result;

  return result.results;
});

export { fetchContacts };