import React from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "../components";

const SubmitLayout = () => {
  return (
    <div className='flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-br from-[#80ffdb] to-[#0077b6]'>
      <Outlet />
      <Footer />
    </div>
  );
};

export default SubmitLayout;
