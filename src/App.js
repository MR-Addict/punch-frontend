import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SubmitLayout, AdminLayout } from "./layout";
import { Home, Settings, Table, Login, Submit, Fail, Success } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<SubmitLayout />}>
          <Route path='/' element={<Submit />} />
          <Route path='/login' element={<Login />} />
          <Route path='/fail' element={<Fail />} />
          <Route path='/success' element={<Success />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path='/admin' element={<Home />} />
          <Route path='/table' element={<Table />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
