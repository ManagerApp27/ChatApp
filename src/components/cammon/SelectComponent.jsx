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
  ${({ isSelected, theme, isDarkMode }) => css`
    background-color: ${isSelected ? "#e6ebf5" : "transparent"};
    color: ${isSelected
      ? isDarkMode
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
          isSelected={value === option.id}
          onClick={() => handleOptionClick(option.id)}
          isDarkMode={isDarkMode}
        >
          {option.name}
        </Option>
      ))}
    </SelectContainer>
  );
};

export default SelectComponent;
