import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "store/thunk/fetchContact";

export const useContact = () => {
  const dispatch = useDispatch();
  const { isLoding, error, contacts } = useSelector((state) => state.contact);


  useEffect(() => {
    (async () => {
      dispatch(fetchContacts());
    })();
  }, [dispatch]);

  return {
    isLoding,
    contacts,
    error,
  };
};