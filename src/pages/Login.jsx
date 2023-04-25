import React, { useState } from "react";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";

import { Footer } from "../components";
import { loginApi } from "../api";
import { useStateContext } from "../context/ContextProvider";

const Login = () => {
  const { setIsLogin } = useStateContext();
  const [isLogging, setIsLogging] = useState(false);
  const [isLoginFailed, setisLoginFailed] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });

  const onUpdateInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmitForm = (e) => {
    e.preventDefault();
    setIsLogging(true);

    if (form.username.length && form.username.length) {
      loginApi(form.username, form.password, (data) => {
        if (data.status) {
          setIsLogin(true);
          setisLoginFailed(false);
        } else {
          setIsLogin(false);
          setisLoginFailed(true);
        }
        setIsLogging(false);
      });
    }
  };

  return (
    <div className='bg-gray-100 flex-1 flex flex-col gap-2 items-center justify-between w-full bg-main-bg'>
      <div className='w-full max-w-md flex-1 flex flex-col items-center justify-center px-4'>
        <form
          onSubmit={onSubmitForm}
          className='w-full bg-white p-5 md:p-10 shadow-lg border border-gray-300 rounded-md flex flex-col items-center justify-center gap-4'
        >
          {isLoginFailed && <div className='text-red-500 underline'>用户名或密码错误</div>}
          <div className='w-full text-center font-semibold mb-5 text-3xl text-gray-700'>
            <h1>请先登录</h1>
          </div>
          <div className='flex flex-col gap-0.5 w-full'>
            <label htmlFor='password' className='text-gray-500 flex flex-row items-center gap-1'>
              <AiOutlineUser />
              <span>用户名</span>
            </label>
            <input
              required
              type='text'
              name='username'
              placeholder='用户名'
              maxLength={100}
              value={form.username}
              onChange={onUpdateInput}
              className='py-3 px-4 rounded-md outline-none border border-black focus:border-blue-600'
            />
          </div>

          <div className='flex flex-col w-full'>
            <label htmlFor='password' className='flex flex-row items-center gap-1 text-gray-500'>
              <AiOutlineLock />
              <span>密码</span>
            </label>
            <input
              required
              type='password'
              name='password'
              placeholder='密码'
              maxLength={100}
              value={form.password}
              onChange={onUpdateInput}
              className='py-3 px-4 rounded-md outline-none border border-black focus:border-blue-600'
            />
          </div>

          <div className='w-full text-center pt-3'>
            <button
              type='submit'
              disabled={isLogging}
              className='disabled:cursor-not-allowed py-3 border border-black w-full rounded-md bg-green-600 hover:bg-green-700 duration-200 text-white font-semibold'
            >
              登录
            </button>
          </div>

          <div className='text-center'>
            <a href='https://punch.mraddict.top' className='text-xs underline text-center text-[#0d0f82]'>
              返回提交页面
            </a>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
