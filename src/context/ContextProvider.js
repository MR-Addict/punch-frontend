import React, { createContext, useContext, useState, useEffect } from "react";

import { ThemeColorsData, Config } from "../data";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(true);
  const [themeColor, setThemeColor] = useState(ThemeColorsData[0].color);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [screenSize, setScreenSize] = useState(Config.breakPoint);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (screenSize <= Config.breakPoint) setIsMenuOpened(false);
    else setIsMenuOpened(true);
    // eslint-disable-next-line
  }, [screenSize]);

  useEffect(() => {
    const currentColor = JSON.parse(localStorage.getItem("themeColor"));
    const currentMode = JSON.parse(localStorage.getItem("isDarkMode"));
    if (currentColor) setThemeColor(currentColor);
    if (currentMode) setIsDarkMode(currentMode);
    // eslint-disable-next-line
  }, []);

  return (
    <StateContext.Provider
      value={{
        isMenuOpened,
        setIsMenuOpened,
        themeColor,
        setThemeColor,
        isDarkMode,
        setIsDarkMode,
        screenSize,
        setScreenSize,
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
