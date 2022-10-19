import React from "react";

const InputField = ({ name, placeholder }) => {
  return (
    <div className='flex flex-col gap-2 px-4 w-full'>
      <label for={name} className='pl-4'>
        {placeholder}
      </label>
      <input
        type='text'
        id={name}
        name={name}
        placeholder={placeholder}
        className='p-4 bg-slate-100 rounded-xl outline-none'
      />
      <div className='pl-4 text-red-500'></div>
    </div>
  );
};

const Login = () => {
  return (
    <div className='flex flex-col gap-1 items-center justify-center w-screen min-h-screen bg-gradient-to-br from-[#80ffdb] to-[#0077b6]'>
      <div className='bg-white p-10 rounded-xl w-[600px] flex flex-col gap-4'>
        <div className='w-full text-center font-semibold text-4xl text-gray-500'>
          <h1>请先登录</h1>
        </div>
        <InputField name='username' placeholder='用户名' />
        <InputField name='password' placeholder='密码' />
        <div className='w-full text-center'>
          <button className='py-3 px-10 rounded-xl bg-[#FF0063] text-white font-semibold'>登录</button>
        </div>
        <div className='text-center text-[#8750A1]'>
          <a href='/login' className='text-sm underline'>
            返回提交页面
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
