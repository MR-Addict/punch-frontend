import React, { createContext, useContext, useState } from "react";
import { ThemeColorsData, Others } from "../data";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(true);
  const [themeColor, setThemeColor] = useState(ThemeColorsData[0].color);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [screenSize, setScreenSize] = useState(Others.breakPoint);
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
