import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useStateContext } from "./context/ContextProvider";
import { Home, Help, Settings, Insight } from "./pages";

const App = () => {
  const { isMenuOpened } = useStateContext();
  return (
    <Router>
      <div className='flex relative'>
        {isMenuOpened ? (
          <div className='fixed w-72'>
            <Sidebar />
          </div>
        ) : (
          <div className='w-0'></div>
        )}
        <div className={isMenuOpened ? "flex flex-col ml-72 w-full" : "flex flex-col w-full"}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/help' element={<Help />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/insight' element={<Insight />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
