import React from "react";
import { AiOutlineMenu, AiFillGithub } from "react-icons/ai";
import { useStateContext } from "../context/ContextProvider";

const NavButton = ({ customFunc, icon, color, dotColor }) => (
  <button
    type='button'
    onClick={() => customFunc()}
    style={{ color }}
    className='relative text-2xl rounded-full p-3 hover:bg-light-gray'
  >
    <span style={{ background: dotColor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />
    {icon}
  </button>
);

const Navbar = () => {
  const { isMenuOpened, setIsMenuOpened } = useStateContext();
  return (
    <div className='flex flex-row justify-between'>
      <NavButton
        icon={<AiOutlineMenu />}
        color='blue'
        customFunc={() => setIsMenuOpened((prevIsMenuOpened) => !prevIsMenuOpened)}
      />
      <NavButton icon={<AiFillGithub />} color='gray' />
    </div>
  );
};

export default Navbar;
