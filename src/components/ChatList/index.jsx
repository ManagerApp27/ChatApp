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
import { H4, H2, P } from "globalStyles";
import Chat from "components/Chat";

import { useContact } from "hooks/useContact";
import { useTheme } from "styled-components";

const ChatList = () => {
  const { contacts } = useContact();

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
        <H4>Recent</H4>
        <RecentUserContainer>
          {contacts.map((el, index) => (
            <Chat key={el.id} {...el} index={index} />
          ))}
        </RecentUserContainer>
      </RecentChatContainer>
    </ContactListWrapper>
  );
};

export default ChatList;
