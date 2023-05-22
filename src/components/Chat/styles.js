import styled from "styled-components";

export const ChatWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 55px;
  margin-top: 3px;
  padding: 0px 13px;
  margin-left: 12px;

  &:hover {
    border-radius: 7px;
    background-color: #e6ebf5;
  }

  .selectUser {
    border-radius: 7px;
    background-color: #e6ebf5;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactName = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;

export const LastMessageTime = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.gray};
`;
