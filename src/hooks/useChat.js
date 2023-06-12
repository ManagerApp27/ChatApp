import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChats } from "store/thunk/fetchChat";

export const useChat = () => {
  const dispatch = useDispatch();
  const { channel_id } = useSelector((state) => state.channel);

  const { isLoding, chats, error } = useSelector((state) => state.chat);

  const handleChat = (id) => {};

  useEffect(() => {
    if (channel_id) {
      dispatch(fetchChats(channel_id));
    }
  }, [dispatch, channel_id]);

  return {
    isLoding,
    chats,
    error,
    handleChat,
  };
};
