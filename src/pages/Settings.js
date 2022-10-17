import React from "react";
import { BsCheck } from "react-icons/bs";

import { ThemeColorsData } from "../data";
import { useStateContext } from "../context/ContextProvider";

const Settings = () => {
  const { themeColor, setThemeColor } = useStateContext();
  return (
    <div>
      <p className='font-semibold text-xl dark:text-white'>可选主题颜色</p>
      <div className='flex gap-3'>
        {ThemeColorsData.map((item, index) => (
          <div className='mt-2 cursor-pointer flex gap-5 items-center' key={item.name}>
            <button
              type='button'
              className='h-10 w-10 rounded-full cursor-pointer'
              style={{ backgroundColor: item.color }}
              onClick={() => setThemeColor(item.color)}
            >
              <BsCheck className={`ml-2 text-2xl text-white ${item.color === themeColor ? "block" : "hidden"}`} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
