import { IoIosNotifications } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import {
  ContactListWrapper,
  NotificationContainer,
  RecentChatContainer,
  RecentUserContainer,
  SearchContainer,
  SearchInput,
} from "./styles";
import { H4, H2 } from "globalStyles";
import Chat from "components/Chat";
import { useTheme } from "styled-components";
import { useChat } from "hooks/useChat";

const ChatList = () => {
  const {chats} = useChat()
  const { COLORS } = useTheme();

  return (
    <ContactListWrapper>
      <NotificationContainer>
        <H2 color="primary">Chats</H2>
        <IoIosNotifications color={COLORS.dark} size="20px" />
      </NotificationContainer>
      <SearchContainer>
        <FiSearch />
        <SearchInput type="text" placeholder="Buscar contactos" />
      </SearchContainer>
      <RecentChatContainer>
        <H4>Reciente</H4>
        <RecentUserContainer>
          {chats.map((el, index) => (
            <Chat key={el.id} {...el} index={index} />
          ))}
        </RecentUserContainer>
      </RecentChatContainer>
    </ContactListWrapper>
  );
};

export default ChatList;
