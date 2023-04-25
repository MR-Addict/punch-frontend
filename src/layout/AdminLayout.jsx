import React from "react";
import { Outlet } from "react-router-dom";

import { Navbar, Sidebar, Footer } from "../components";
import { useStateContext } from "../context/ContextProvider";
import { Config } from "../data";

const AdminLayout = () => {
  const { isMenuOpened, isDarkMode, screenSize } = useStateContext();

  return (
    <div className={isDarkMode ? "dark" : ""} style={{ display: "flex", position: "relative" }}>
      {isMenuOpened ? (
        <div className='fixed w-72 bg-white dark:bg-secondary-dark-bg dark:text-white text-slate-900 z-50'>
          <Sidebar />
        </div>
      ) : (
        <div className='fixed w-0 bg-white dark:bg-secondary-dark-bg dark:text-white text-slate-900 z-50'></div>
      )}
      <div
        className={
          isMenuOpened && screenSize > Config.breakPoint
            ? "flex flex-col bg-light-gray dark:bg-main-dark-bg w-full min-h-screen ml-72"
            : "flex flex-col bg-light-gray dark:bg-main-dark-bg w-full min-h-screen"
        }
      >
        <Navbar />
        <div className='dark:text-white flex-1 flex flex-col justify-between'>
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
