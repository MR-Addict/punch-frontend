import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(true);
  return (
    <StateContext.Provider
      value={{
        isMenuOpened,
        setIsMenuOpened,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
