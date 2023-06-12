import { H3 } from "globalStyles";
import { useDarkTheme } from "hooks/useDarkTheme";
import styled, { css } from "styled-components";

const SelectContainer = styled.div`
  width: 100%;
`;

const Option = styled.div`
  padding: 10px;
  border-radius: 7px;
  cursor: pointer;
  width: 100%;
  ${({ isselected, theme, isdarkmode }) => css`
    background-color: ${isselected ? "#e6ebf5" : "transparent"};
    color: ${isselected
      ? isdarkmode
        ? theme.COLORS.light
        : theme.COLORS.dark
      : theme.COLORS.dark};
  `}
`;

const SelectComponent = ({ data, handleOptionClick, value, text }) => {
  const { isDarkMode } = useDarkTheme();
  return (
    <SelectContainer>
      <H3>{text}</H3>
      {data.map((option) => (
        <Option
          key={option.id}
          isselected={value === option.id ? "isselected" : undefined}
          onClick={() => handleOptionClick(option.id)}
          isdarkmode={isDarkMode ? "isdarkmode" : undefined}
        >
          {option.name}
        </Option>
      ))}
    </SelectContainer>
  );
};

export default SelectComponent;
