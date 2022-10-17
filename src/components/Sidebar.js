import React from "react";

import { SidebarData } from "../data";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import { MdOutlineCancel } from "react-icons/md";
import { Others } from "../data";

const Sidebar = () => {
  const { themeColor, setIsMenuOpened, screenSize } = useStateContext();
  return (
    <div className='min-h-screen bg-white shadow-lg flex flex-col dark:bg-secondary-dark-bg'>
      <div className='font-bold text-xl text-center mt-2 text-slate-900 dark:text-white'>
        <span>值班笔记</span>
        {screenSize <= Others.breakPoint && (
          <button
            type='button'
            onClick={() => setIsMenuOpened((prevIsMenuOpened) => !prevIsMenuOpened)}
            style={{ color: themeColor }}
            className='text-xl rounded-full p-3 hover:bg-light-gray absolute top-2 right-1'
          >
            <MdOutlineCancel />
          </button>
        )}
      </div>
      <div className='mt-10 flex flex-col gap-2'>
        {SidebarData.map((item, index) => {
          return (
            <div key={item.title}>
              <NavLink
                end
                to={item.to}
                key={item.title}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? themeColor : "",
                  color: isActive ? "white" : "",
                })}
                onClick={() =>
                  screenSize <= Others.breakPoint && setIsMenuOpened((prevIsMenuOpened) => !prevIsMenuOpened)
                }
                className='flex flex-row items-center text-xl text-gray-400 gap-4 pl-5 m-1 rounded-md p-2 hover:bg-light-gray dark:text-white dark:hover:text-gray-400 dark:hover:bg-white'
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
