import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "store/slices/darkModeSlices";
import { DARK, LIGHT, SIZES } from "utils/theme";

export const useDarkTheme = () => {
  const { isDarkMode } = useSelector((state) => state.isDarkMode);

  const dispatch = useDispatch();

  const handleDarkTheme = () => {
    dispatch(toggleTheme(!isDarkMode));
  };

  const theme = {
    COLORS: isDarkMode ? DARK : LIGHT,
    SIZES: SIZES,
  };

  return {
    isDarkMode,
    theme,
    handleDarkTheme,
  };
};
