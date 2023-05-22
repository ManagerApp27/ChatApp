import styled from "styled-components";

export const ContactListWrapper = styled.div`
  width: 26%;
  height: 100vh;
  min-width: 270px;
  background-color: ${({theme}) => theme.COLORS.background};
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e6ebf5;
  padding: 5px;
  width: 87%;
  margin: auto;
  border-radius: 5px;
  margin-top: 10px;
`;

export const SearchInput = styled.input`
  outline: none;
  border: none;
  background-color: inherit;
  width: 87%;
  padding: 10px;
  font-size: 14px;
`;

export const NotificationContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: space-between;
  width: 80%;
  margin-top: 10px;
`;


export const RecentChatContainer = styled.div`
  width: 100%;
  margin: auto;
  
  h1 {
    margin: 15px 25px;
  }
`;

export const RecentUserContainer = styled.div`
  /* border: 2px solid red; */
  overflow-y: scroll;
  box-sizing: border-box;
  height: 75vh;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #c4ccdbb2;
    border-radius: 10px;
  }
`;
