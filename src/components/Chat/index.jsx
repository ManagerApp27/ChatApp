import {
  ContactInfo,
  ContactName,
  LastMessageTime,
  ProfileImage,
  SelectWrapper,
  ChatWrapper,
} from "./styles";

const Chat = ({ id, name, phone }) => {
  const profileImage = "https://picsum.photos/id/1/200/200";
  return (
    <ChatWrapper>
      <SelectWrapper>
        <ProfileImage src={profileImage} alt={`${name}'s profile`} />
        <ContactInfo>
          <ContactName>{name}</ContactName>
          <LastMessageTime>Número: {phone}</LastMessageTime>
        </ContactInfo>
      </SelectWrapper>
    </ChatWrapper>
  );
};

export default Chat;
