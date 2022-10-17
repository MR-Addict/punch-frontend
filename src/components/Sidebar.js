import React from "react";

import { SidebarData } from "../data";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='min-h-screen bg-pri-black text-white shadow-lg flex flex-col'>
      <div className='font-bold text-2xl text-center mt-2'>Sidebar</div>
      <div className='mt-5 flex flex-col gap-2'>
        {SidebarData.map((item) => {
          return (
            <div>
              <NavLink
                end
                to={item.to}
                key={item.title}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#323f4f" : "",
                  color: isActive ? "#4ADE80" : "",
                })}
                className='flex flex-row items-center text-xl gap-4 pl-5 m-1 rounded-md p-2 hover:bg-pri-gray'
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
