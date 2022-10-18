import React from "react";
import Switch from "react-switch";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

import { useStateContext } from "../context/ContextProvider";

const NavButton = ({ customFunc, icon, color, dotColor }) => (
  <button
    type='button'
    onClick={() => customFunc()}
    style={{ color }}
    className='text-2xl rounded-full p-2 hover:bg-light-gray'
  >
    <span style={{ background: dotColor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />
    {icon}
  </button>
);

const Navbar = () => {
  const { setIsMenuOpened, themeColor, isDarkMode, setIsDarkMode } = useStateContext();

  return (
    <div className='flex flex-row items-center justify-between m-4'>
      <NavButton
        icon={<AiOutlineMenu />}
        color={themeColor}
        customFunc={() => setIsMenuOpened((prevIsMenuOpened) => !prevIsMenuOpened)}
      />
      <Switch
        onChange={() => {
          setIsDarkMode((prevIsDarkMode) => {
            localStorage.setItem("isDarkMode", JSON.stringify(!prevIsDarkMode));
            return !prevIsDarkMode;
          });
        }}
        checked={isDarkMode}
        uncheckedIcon={false}
        checkedIcon={false}
        onColor={themeColor}
        offColor={themeColor}
        checkedHandleIcon={
          <div className='flex items-center justify-center w-full h-full'>
            <BsSunFill className='text-gray-500' />
          </div>
        }
        uncheckedHandleIcon={
          <div className='flex items-center justify-center w-full h-full'>
            <BsMoonFill className='text-gray-500' />
          </div>
        }
      />
    </div>
  );
};

export default Navbar;
