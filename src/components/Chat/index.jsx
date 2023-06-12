import {
  ContactInfo,
  ContactName,
  LastMessageTime,
  ProfileImage,
  SelectWrapper,
  ChatWrapper,
  ContactDate,
} from "./styles";

const Chat = ({ id, contact_data, last_message_data }) => {
  const profileImage = "https://picsum.photos/id/1/200/200";
  return (
    <ChatWrapper>
      <SelectWrapper>
        <ProfileImage
          src={profileImage}
          alt={`${contact_data.name}'s profile`}
        />
        <ContactInfo>
          <ContactName>{contact_data.name}</ContactName>
          <LastMessageTime>
            {last_message_data
              ? last_message_data.message.length > 8
                ? last_message_data.message.substring(0, 30) + " . . ."
                : last_message_data.message
              : ""}
          </LastMessageTime>
        </ContactInfo>
      </SelectWrapper>
      <ContactDate>
        <LastMessageTime>
          {last_message_data
            ? new Date(last_message_data.timestamp).getHours() +
              ":" +
              new Date(last_message_data.timestamp).getMinutes()
            : ""}
        </LastMessageTime>
      </ContactDate>
    </ChatWrapper>
  );
};

export default Chat;
