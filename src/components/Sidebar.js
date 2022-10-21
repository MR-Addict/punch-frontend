import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { useCookies } from "react-cookie";

import { useStateContext } from "../context/ContextProvider";
import { SidebarData, Others } from "../data";
import { logoutApi } from "../api";

const Sidebar = () => {
  const { themeColor, setIsMenuOpened, screenSize, setIsLogin } = useStateContext();
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]); // eslint-disable-line no-unused-vars
  return (
    <div className='min-h-screen shadow-lg flex flex-col'>
      <div className='font-bold text-xl text-center mt-2'>
        <span className=''>值班笔记</span>
        {screenSize <= Others.breakPoint && (
          <button
            type='button'
            onClick={() => setIsMenuOpened((prevIsMenuOpened) => !prevIsMenuOpened)}
            style={{ color: themeColor }}
            className='text-xl rounded-full p-3 hover:bg-light-gray absolute top-1 right-1'
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
                onClick={() => {
                  screenSize <= Others.breakPoint && setIsMenuOpened((prevIsMenuOpened) => !prevIsMenuOpened);
                }}
                className='flex flex-row items-center text-xl gap-4 pl-5 m-1 rounded-md p-2 hover:bg-light-gray dark:hover:text-gray-400 dark:hover:bg-white'
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </NavLink>
            </div>
          );
        })}
        <div
          onClick={() => {
            if (document.cookie.includes("accessToken")) removeCookie("accessToken");
            logoutApi((data) => data);
            setIsLogin(false);
          }}
          className='flex flex-row items-center text-xl gap-4 pl-5 m-1 rounded-md p-2 hover:bg-light-gray dark:hover:text-gray-400 dark:hover:bg-white cursor-pointer'
        >
          <span>
            <IoMdLogOut />
          </span>
          <span>退出</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
