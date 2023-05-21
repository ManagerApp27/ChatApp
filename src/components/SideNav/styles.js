import styled from "styled-components";


export const SideNavWrapper = styled.div`
  min-width: 70px;
  max-width: 70px;
  height: 100vh;
  min-height: 570px;
  background-color: ${({theme}) => theme.COLORS.light};
  display: flex;
  z-index: 9;
  box-shadow: 0 2px 4px rgb(15 34 58 / 12%);
  flex-direction: column;
  padding: 10px 0px 15px 0px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
`;

export const SideNavContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Avatar = styled(SideNavContent)`
  height: 40px;
  width: 40px;
  background-color: gray;
  border-radius: 20px;
`;

export const MidIcon = styled(SideNavContent)`
  height: 60%;
  color: #6f7178;
`;

export const BottomIcon = styled(SideNavContent)`
  height: 10%;
  color: #6f7178;
`;

export const SideNavSVG = styled.i`
  cursor: pointer;
  font-size: 1.7rem;
`;
