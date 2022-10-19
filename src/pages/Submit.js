import React, { useState } from "react";

import { FormData } from "../data";

const Submit = () => {
  const [currentDepartment, setCurrentDepartment] = useState(Object.keys(FormData)[0]);
  return (
    <div className='flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-br from-[#80ffdb] to-[#0077b6]'>
      <div className='bg-white p-5 md:p-10 md:my-0 my-10 rounded-xl min-w-[90%] md:min-w-[600px] flex flex-col form'>
        <div className='w-full text-center font-semibold text-3xl md:text-4xl text-gray-500'>
          <h1>值班笔记</h1>
        </div>
        <div className='my-6'>
          <select
            id='department'
            name='department'
            className='w-full p-4 bg-slate-100 outline-none rounded-xl'
            onChange={(e) => setCurrentDepartment(e.target.value)}
          >
            {Object.keys(FormData).map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select id='group' name='group' className='w-full p-4 bg-slate-100 outline-none rounded-xl'>
            {FormData[currentDepartment].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className='form-element'>
          <div className='pl-3 text-red-500 h-7 flex items-center'></div>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='姓名'
            className='w-full p-4 bg-slate-100 rounded-xl outline-none'
          />
        </div>

        <div className='form-element'>
          <div className='pl-3 text-red-500 h-7 flex items-center'></div>
          <textarea
            id='notes'
            name='notes'
            placeholder='今天的值班笔记内容'
            className='bg-slate-100 rounded-xl outline-none p-4 w-full h-[200px]'
          ></textarea>
          <div class='err-msg'></div>
        </div>

        <div className='w-full text-center mt-6 mb-2'>
          <button className='py-3 px-10 rounded-xl bg-[#FF0063] text-white font-semibold'>提交</button>
        </div>
        <div className='text-center text-[#8750A1]'>
          <a href='/login' className='text-sm underline'>
            我是管理员
          </a>
        </div>
      </div>
    </div>
  );
};

export default Submit;
