import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AdminLayout, LoginLayout } from "./layout";
import { Home, Settings, Table, Login } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LoginLayout />}>
          <Route path='/login' element={<Login />} />
        </Route>
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
