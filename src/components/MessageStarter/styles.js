import styled from "styled-components";

export const ChattingPage = styled.div`
  background-color: white;
  width: 70%;
  box-shadow: 0 2px 4px rgb(15 34 58 / 12%);
  height: 100vh;
`;

export const StartMsg = styled(ChattingPage)`
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: absolute; */
`;

export const StartMsgContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StartMsgText = styled.p`
  color: #7a7f9a;
  margin: 10px;
`;

export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 15px;
`;
