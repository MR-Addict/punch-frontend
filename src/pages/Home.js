import React from "react";

import { HomeCards, ChartData } from "../data";
import AreaChart from "../components/AreaChart";
import BarChart from "../components/BarChart";
import HappyImg from "../data/Happy.png";
import { useStateContext } from "../context/ContextProvider";

const Home = () => {
  const { themeColor } = useStateContext();
  return (
    <div className='flex flex-col gap-10 items-center justify-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:w-[90%] w-full'>
        {HomeCards.map((item) => (
          <div
            key={item.title}
            className='flex flex-row items-center justify-between rounded-xl w-full p-5 bg-white dark:bg-secondary-dark-bg'
          >
            <div className='flex flex-col items-center justify-center gap-5'>
              <span className='text-3xl sm:text-5xl' style={{ color: themeColor }}>
                {item.icon}
              </span>
              <span className='text-sm text-gray-400 whitespace-nowrap'>{item.title}</span>
            </div>
            <div className='w-full text-center text-3xl sm:text-5xl font-semibold' style={{ color: item.color }}>
              <span>{item.value}</span>
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col gap-4 w-full md:w-[40%] rounded-xl p-4 bg-white dark:bg-secondary-dark-bg'>
        <img src={HappyImg} alt='Happy' className='object-cover rounded-xl' />
        <h1 className='text-xl font-semibold w-full dark:text-gray-400'>
          <span>{`截至${new Date().getMonth()}-${new Date().getDate()}为止`}</span>，同学们已经坚持提交了<span>75</span>
          天，总共提交了<span>200</span>6次，总计<span>1520</span>个字。
        </h1>
      </div>
      <div className='flex items-center justify-center w-full h-[500px]'>
        <div className='h-full md:w-[70%] w-full p-4 overflow-x-auto bg-white dark:bg-secondary-dark-bg rounded-xl'>
          <AreaChart title='每日提交' data={ChartData.AreaData} />
        </div>
      </div>
      <div className='flex items-center justify-center w-full h-[500px]'>
        <div className='h-full md:w-[70%] w-full p-4 bg-white dark:bg-secondary-dark-bg rounded-xl'>
          <BarChart title='组别汇总' data={ChartData.BarData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
