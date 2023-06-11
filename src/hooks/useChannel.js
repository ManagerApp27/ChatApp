import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectChannel } from "store/slices/channelSlices";
import { fetchChannel } from "store/thunk/fetchChannel";

export const useChannel = () => {
  const dispatch = useDispatch();
  const { isLoding, error, channels, channel_id } = useSelector(
    (state) => state.channel
  );

  const handleChannel = (id) => {
    dispatch(selectChannel(id));
  };

  useEffect(() => {
    (async () => {
      dispatch(fetchChannel());
    })();
  }, [dispatch]);

  return {
    channel_id,
    isLoding,
    channels,
    error,
    handleChannel,
  };
};
