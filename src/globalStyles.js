import styled, { createGlobalStyle, css } from "styled-components";

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

const getFontStyles = (sizeMap, size) => css`
  font-weight: bold;
  font-size: ${sizeMap[size]}px;
`;

const getColorStyle = (colorMap, color) => css`
  color: ${colorMap[color] || colorMap.dark};
`;

const createHeadingComponent = (tag) => {
  return styled[tag]`
    ${({ theme }) => getFontStyles(theme.SIZES, tag.toLowerCase())}
    ${({ theme, color }) => getColorStyle(theme.COLORS, color)}
  `;
};

export const H1 = createHeadingComponent("h1");
export const H2 = createHeadingComponent("h2");
export const H3 = createHeadingComponent("h3");
export const H4 = createHeadingComponent("h4");
export const H5 = createHeadingComponent("h5");

export const P = styled.p`
  ${({ theme }) => getFontStyles(theme.SIZES, "p")}
  ${({ theme, color }) => getColorStyle(theme.COLORS, color)}
    line-height: 1.6;
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
  color: ${({ theme, color }) =>
    color === "light" ? theme.COLORS.dark : theme.COLORS.light};

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.secondary};
  }

  ${({ theme, color }) => {
    switch (color) {
      case "info":
        return `background: ${theme.COLORS.info}`;
      case "success":
        return `background: ${theme.COLORS.success}`;
      case "warning":
        return `background: ${theme.COLORS.warning}`;
      case "danger":
        return `background: ${theme.COLORS.danger}`;
      case "light":
        return `background: ${theme.COLORS.light};`;
      case "dark":
        return `background: ${theme.COLORS.dark}`;
      default:
        return `background: ${theme.COLORS.primary}`;
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
