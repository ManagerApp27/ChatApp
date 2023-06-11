import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdLanguage } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { useAuth } from "hooks/useAuth";
import {
  Avatar,
  BottomIcon,
  MidIcon,
  SideNavChannelWrapper,
  SideNavContent,
  SideNavWrapper,
} from "./styles";
import { IconContext } from "react-icons";
import { useTheme } from "styled-components";
import { useDarkTheme } from "hooks/useDarkTheme";
import { useState } from "react";
import SelectComponent from "components/cammon/SelectComponent";
import { useChannel } from "hooks/useChannel";

const SideNav = ({ channels }) => {
  const [open, setOpen] = useState(false);
  const { handleLogout } = useAuth();
  const { COLORS } = useTheme();
  const { handleDarkTheme, isDarkMode } = useDarkTheme();

  const handleSideNavChannel = () => {
    setOpen(!open);
  };

  const { channel_id, handleChannel } = useChannel();

  return (
    <>
      <IconContext.Provider value={{ color: COLORS.dark, size: "20px" }}>
        <SideNavWrapper>
          <SideNavContent>
            <Avatar />
          </SideNavContent>
          <MidIcon>
            <div onClick={handleSideNavChannel}>
              <HiOutlineUserCircle />
            </div>
            <HiOutlineUserGroup />
            <AiOutlineSetting />
          </MidIcon>
          <BottomIcon>
            <MdLanguage onClick={handleLogout} />
            {isDarkMode ? (
              <BsFillSunFill onClick={handleDarkTheme} />
            ) : (
              <BsFillMoonFill onClick={handleDarkTheme} />
            )}
          </BottomIcon>
        </SideNavWrapper>
      </IconContext.Provider>
      {open && (
        <SideNavChannelWrapper show={open}>
          <SelectComponent
            data={channels}
            handleOptionClick={handleChannel}
            value={channel_id}
            text="Selecciona un canal"
          />
        </SideNavChannelWrapper>
      )}
    </>
  );
};

export default SideNav;
