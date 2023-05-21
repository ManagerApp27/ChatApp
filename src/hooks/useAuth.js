import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin, fetchRefershToken } from "store/thunk/fetchAuth";
import jwtDecode from "jwt-decode";
import { logout } from "store/slices/authSlices";

const hasExpired = async (token) => {
  if (!token) return false;
  const { exp } = jwtDecode(token);
  const currentDate = new Date().getTime();
  const expiredDate = new Date(exp * 1000).getTime();

  if (currentDate > expiredDate) {
    return true;
  }
  return false;
};

export const useAuth = () => {
  const [email, setEmail] = useState("managerappco@gmail.com");
  const [password, setPassword] = useState("ASdf12##");

  const dispatch = useDispatch();
  const { isLoding, error, user_id } = useSelector((state) => state.auth);

  const handleSignIn = async () => {
    dispatch(fetchLogin({ email, password }));
  };

  const handleLogout = async () => {
    dispatch(logout());
  };

  useEffect(() => {
    (async () => {
      const accessToken = await JSON.parse(localStorage.getItem("access"));
      const refreshToken = await JSON.parse(localStorage.getItem("refresh"));
      const accessExpired = await hasExpired(accessToken);

      if (accessExpired) {
        const refreshExpired = await hasExpired(refreshToken);
        if (refreshExpired) {
          dispatch(logout());
        } else {
          try {
            const result = await fetchRefershToken(refreshToken);
            if (result) dispatch();
          } catch (error) {
            console.log("useAuth - useEffect", error);
            //dispatch(logout());
          }
        }
      } else {
        if (accessToken) console.log(accessToken) //dispatch();
      }
    })();
  }, [dispatch]);

  return {
    isLoding,
    user_id,
    error,
    setEmail,
    setPassword,
    handleSignIn,
    handleLogout,
  };
};
