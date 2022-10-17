import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeColorsData, Others } from "../data";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(true);
  const [themeColor, setThemeColor] = useState(ThemeColorsData[0].color);
  const [isDarkMode, setIsDarkMode] = useState(Others.isDarkMode);
  const [screenSize, setScreenSize] = useState(Others.breakPoint);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (screenSize <= Others.breakPoint) setIsMenuOpened(false);
    else setIsMenuOpened(true);
    // eslint-disable-next-line
  }, [screenSize]);

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
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
