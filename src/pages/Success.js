import React from "react";

import CheckImg from "../data/images/check.png";

const Success = () => {
  return (
    <div className='flex flex-col items-center p-20 gap-10 bg-white rounded-xl w-[90%] md:w-[600px]'>
      <h1 className='text-gray-600 text-4xl md:text-5xl font-bold'>提交失败</h1>
      <img src={CheckImg} alt='check' className='w-32 md:w-44' />
      <button className='bg-[#FF0063] text-white py-3 px-10 font-semibold rounded-xl'>返回</button>
    </div>
  );
};

export default Success;
