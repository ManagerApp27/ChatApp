import { BsFillMoonFill } from "react-icons/bs";
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

const SideNav = () => {
  const { handleLogout } = useAuth();
  const {COLORS} = useTheme()
  return (
    <IconContext.Provider value={{color: COLORS.dark}}>
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
        <BsFillMoonFill />
      </BottomIcon>
    </SideNavWrapper>

    </IconContext.Provider>
    
  );
};

export default SideNav;
