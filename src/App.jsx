import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { AdminLayout } from "./layout";
import { Home, Settings, Table, Login } from "./pages";
import { useStateContext } from "./context/ContextProvider";

const App = () => {
  const { isLogin } = useStateContext();
  if (!isLogin) return <Login />;

  return (
    <Router>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/table' element={<Table />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
