import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useStateContext } from "./context/ContextProvider";
import { Home, Help, Settings, Insight } from "./pages";
import { Others } from "./data";

const App = () => {
  const { isMenuOpened, isDarkMode, screenSize } = useStateContext();
  return (
    <Router>
      <div className={isDarkMode ? "dark" : ""} style={{ display: "flex", position: "relative" }}>
        {isMenuOpened ? (
          <div className='fixed w-72 dark:bg-secondary-dark-bg dark:text-white text-slate-900'>
            <Sidebar />
          </div>
        ) : (
          <div className='fixed w-0 dark:bg-secondary-dark-bg dark:text-white text-slate-900'></div>
        )}
        <div
          className={
            isMenuOpened && screenSize > Others.breakPoint
              ? "flex flex-col dark:bg-main-dark-bg w-full min-h-screen ml-72"
              : "flex flex-col dark:bg-main-dark-bg w-full min-h-screen"
          }
        >
          <Navbar />
          <div className='m-4 dark:text-white'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/insight' element={<Insight />} />
              <Route path='/help' element={<Help />} />
              <Route path='/logout' />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
