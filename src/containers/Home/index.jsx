import ChatList from "components/ChatList";
import MessageStarter from "components/MessageStarter";
import SideNav from "components/SideNav";
import { Section } from "globalStyles";
import { useAuth } from "hooks/useAuth";
import { Navigate } from "react-router-dom";


const Home = () => {
  const { user_id } = useAuth();

  if (!user_id) {
    return <Navigate to="/login" />;
  }
  return (
    <Section>
      <SideNav />
      <ChatList />
      <MessageStarter />
    </Section>
  );
};

export default Home;
