import { useAuth } from "hooks/useAuth";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { user_id, handleLogout } = useAuth();

  console.log(user_id, "tt")

  if (!user_id) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <h1>Home</h1>
      <button onClick={handleLogout}>cerrar sesión</button>
    </>
  );
};

export default Home;
