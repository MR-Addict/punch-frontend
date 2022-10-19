import React, { useState } from "react";

const InputField = ({ name, placeholder }) => {
  const [inputError, setinputError] = useState(() => new Set());

  return (
    <div className='flex flex-col gap-2 px-4 w-full form-element'>
      <label htmlFor={name} className='pl-4'>
        {placeholder}
      </label>
      <input
        type='text'
        id={name}
        name={name}
        placeholder={placeholder}
        className='p-4 bg-slate-100 rounded-xl outline-none'
        onChange={(e) => {
          if (e.target.value.length === 0) {
            setinputError((prev) => new Set(prev).add(e.target));
            e.target.closest(".form-element").querySelector(".err-msg").innerText = `${placeholder}不能为空哦`;
          } else if (e.target.value.length > 100) {
            setinputError((prev) => new Set(prev).add(e.target));
            e.target.closest(".form-element").querySelector(".err-msg").innerText = `${placeholder}太长啦`;
          } else {
            setinputError((prev) => {
              const next = new Set(prev);
              next.delete(e.target);
              return next;
            });
            e.target.closest(".form-element").querySelector(".err-msg").innerText = "";
          }
          console.log(inputError);
        }}
      />
      <div className='pl-4 text-red-500 err-msg'></div>
    </div>
  );
};

const Login = () => {
  return (
    <div className='bg-white p-3 md:p-10 md:my-0 my-10 rounded-xl min-w-[90%] md:min-w-[600px] flex flex-col gap-4'>
      <div className='w-full text-center font-semibold text-3xl md:text-4xl text-gray-500'>
        <h1>请先登录</h1>
      </div>
      <InputField name='username' placeholder='用户名' />
      <InputField name='password' placeholder='密码' />
      <div className='w-full text-center'>
        <button className='py-3 px-10 rounded-xl bg-[#FF0063] text-white font-semibold'>登录</button>
      </div>
      <div className='text-center text-[#8750A1]'>
        <a href='/' className='text-sm underline'>
          返回提交页面
        </a>
      </div>
    </div>
  );
};

export default Login;
