import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-weight: bold;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  color: ${(props) => props.theme.COLORS.light};

  &:hover {
    background-color: ${(props) => props.theme.COLORS.secondary};
  }

  ${(props) => {
    switch (props.color) {
      case "info":
        return `background: ${props.theme.COLORS.info}`;
      case "success":
        return `background: ${props.theme.COLORS.success}`;
      case "warning":
        return `background: ${props.theme.COLORS.warning}`;
      case "danger":
        return `background: ${props.theme.COLORS.danger}`;
      case "light":
        return `background: ${props.theme.COLORS.light};
                color: ${props.theme.COLORS.dark};`;
      case "dark":
        return `background: ${props.theme.COLORS.dark}`;
      default:
        return `background: ${props.theme.COLORS.primary}`;
    }
  }}
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  font-size: 14px;
`;

export default GlobalStyle;
