import React from "react";
import { useState, useEffect } from "react";

import { HomeCards } from "../data";
import { AreaChart, BarChart } from "../components";
import { useStateContext } from "../context/ContextProvider";
import { getStatusCards } from "../api";

const Home = () => {
  const { themeColor, setIsLogin } = useStateContext();
  const [statusCards, setStatusCards] = useState({});

  useEffect(() => {
    getStatusCards((data) => {
      if (data.status) setStatusCards(JSON.parse(data.message)[0]);
      else {
        setIsLogin(false);
        console.log(data.message);
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className='flex flex-col gap-10 items-center justify-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:w-[90%] w-full'>
        {HomeCards.map((item) => (
          <div
            key={item.title}
            className='flex flex-row items-center justify-between rounded-xl w-full p-5 bg-white dark:bg-secondary-dark-bg hover:scale-105 duration-300 cursor-pointer'
          >
            <div className='flex flex-col items-center justify-center gap-5'>
              <span className='text-5xl' style={{ color: themeColor }}>
                {item.icon}
              </span>
              <span className='text-sm text-gray-400 whitespace-nowrap'>{item.title}</span>
            </div>
            <div className='w-full text-center text-5xl font-semibold' style={{ color: item.color }}>
              <span>{statusCards[item.title]}</span>
            </div>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center w-full h-[350px] md:h-[500px]'>
        <div className='h-full md:w-[90%] w-full p-4 overflow-x-auto bg-white dark:bg-secondary-dark-bg rounded-xl'>
          <AreaChart />
        </div>
      </div>
      <div className='flex items-center justify-center w-full h-[350px] md:h-[500px]'>
        <div className='h-full md:w-[90%] w-full p-4 bg-white dark:bg-secondary-dark-bg rounded-xl'>
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
