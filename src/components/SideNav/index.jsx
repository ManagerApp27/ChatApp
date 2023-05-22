import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdLanguage } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { useAuth } from "hooks/useAuth";
import {
  Avatar,
  BottomIcon,
  MidIcon,
  SideNavContent,
  SideNavWrapper,
} from "./styles";
import { IconContext } from "react-icons";
import { useTheme } from "styled-components";
import { useDarkTheme } from "hooks/useDarkTheme";

const SideNav = () => {
  const { handleLogout } = useAuth();
  const { COLORS } = useTheme();
  const { handleDarkTheme, isDarkMode } = useDarkTheme();

  console.log(isDarkMode)

  return (
    <IconContext.Provider value={{ color: COLORS.dark, size: "20px" }}>
      <SideNavWrapper>
        <SideNavContent>
          <Avatar />
        </SideNavContent>
        <MidIcon>
          <HiOutlineUserCircle />
          <BiMessageDetail />
          <HiOutlineUserGroup />
          <AiOutlineSetting />
        </MidIcon>
        <BottomIcon>
          <MdLanguage onClick={handleLogout} />
          {isDarkMode ? (
            <BsFillSunFill onClick={handleDarkTheme} />
          ) : (
            <BsFillMoonFill onClick={handleDarkTheme}/>
          )}
        </BottomIcon>
      </SideNavWrapper>
    </IconContext.Provider>
  );
};

export default SideNav;
