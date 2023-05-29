import {
  ProfileImage,
  StartMsg,
  StartMsgContent,
  StartMsgText,
} from "./styles";

const profileImage = "https://picsum.photos/id/1/200/200";

const MessageStarter = () => {
  return (
    <StartMsg>
      <StartMsgContent>
        <ProfileImage src={profileImage} alt="profile" />
        <h3>Welcome, Nombre</h3>
        <StartMsgText>Please select a chat to start messaging.</StartMsgText>
      </StartMsgContent>
    </StartMsg>
  );
};

export default MessageStarter;
