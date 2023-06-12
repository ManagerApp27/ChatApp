import { P } from "globalStyles";
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

    h5 {
      color: ${({ theme }) => theme.COLORS.gray};
    }
  }

  .selectUser {
    border-radius: 7px;
    background-color: #e6ebf5;
    h5 {
      color: ${({ theme }) => theme.COLORS.gary};
    }
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

export const ContactDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LastMessageTime = styled.span`
  text-align: right;
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.gray};
`;
