import React from "react";
import { BsCheck } from "react-icons/bs";

import { ThemeColorsData } from "../data";
import { useStateContext } from "../context/ContextProvider";

const Settings = () => {
  const { themeColor, setThemeColor } = useStateContext();
  return (
    <div className='flex items-center justify-center w-full'>
      <div className='w-full md:w-[90%] bg-white dark:bg-secondary-dark-bg p-4 rounded-xl'>
        <p className='font-semibold text-xl'>可选主题颜色</p>
        <div className='flex gap-3'>
          {ThemeColorsData.map((item, index) => (
            <div className='mt-2 cursor-pointer flex gap-5 items-center' key={item.name}>
              <button
                type='button'
                className='h-10 w-10 rounded-full cursor-pointer'
                style={{ backgroundColor: item.color }}
                onClick={() => {
                  setThemeColor(item.color);
                  localStorage.setItem("themeColor", JSON.stringify(item.color));
                }}
              >
                <BsCheck className={`ml-2 text-2xl text-white ${item.color === themeColor ? "block" : "hidden"}`} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
