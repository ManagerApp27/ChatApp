import { createAsyncThunk } from "@reduxjs/toolkit";

const API_PATH = process.env.REACT_APP_API_PATH;

const fetchChats = createAsyncThunk("chats/fetch", async (channel_id) => {
  const accessToken = await JSON.parse(localStorage.getItem("access"));
  
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const response = await fetch(`${API_PATH}/chat/?channel_id=${channel_id}`, params);

  const result = await response.json();

  if (response.status !== 200) throw result;

  return result.results;
});

export { fetchChats };