import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useStateContext } from "./context/ContextProvider";
import { Home, Settings, Table, Login, Submit } from "./pages";
import { Others } from "./data";
import Footer from "./components/Footer";

const App = () => {
  const { isMenuOpened, isDarkMode, screenSize } = useStateContext();
  if (true)
    return (
      <div className=''>
        <Submit />
      </div>
    );
  else
    return (
      <Router>
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
              isMenuOpened && screenSize > Others.breakPoint
                ? "flex flex-col bg-light-gray dark:bg-main-dark-bg w-full min-h-screen ml-72"
                : "flex flex-col bg-light-gray dark:bg-main-dark-bg w-full min-h-screen"
            }
          >
            <Navbar />
            <div className='m-4 dark:text-white'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/table' element={<Table />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/logout' />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    );
};

export default App;
