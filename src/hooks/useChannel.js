import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChannel } from "store/thunk/fetchChannel";

export const useChannel = () => {
  const dispatch = useDispatch();
  const { isLoding, error, channels } = useSelector((state) => state.channel);

  useEffect(() => {
    (async () => {
      dispatch(fetchChannel());
    })();
  }, [dispatch]);

  return {
    isLoding,
    channels,
    error,
  };
};