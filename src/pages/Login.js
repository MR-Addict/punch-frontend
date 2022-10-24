import React, { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";

import { Footer } from "../components";
import { loginApi } from "../api";
import { useStateContext } from "../context/ContextProvider";

const Login = () => {
  const { setIsLogin } = useStateContext();
  const [isLoginFailed, setisLoginFailed] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });
  const onUpdateInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (form.username.length && form.username.length) {
      loginApi(form.username, form.password, (data) => {
        if (data.status) {
          setIsLogin(true);
          setisLoginFailed(false);
        } else {
          setIsLogin(false);
          setisLoginFailed(true);
        }
      });
    }
  };

  return (
    <div className='flex flex-col gap-2 items-center justify-center w-screen min-h-screen bg-gradient-to-br from-[#80ffdb] to-[#0077b6]'>
      <form
        onSubmit={onSubmitForm}
        className='bg-white p-3 md:p-10 md:my-0 my-10 rounded-xl min-w-[90%] md:min-w-[500px] flex flex-col gap-4'
      >
        {isLoginFailed && (
          <div className='bg-red-500 text-white font-semibold mx-5 py-2 rounded-xl text-center'>
            <p>登录失败</p>
          </div>
        )}
        <div className='w-full text-center font-semibold mb-5 text-3xl md:text-4xl text-gray-500'>
          <h1>请先登录</h1>
        </div>
        <div className='flex flex-col w-full form-element'>
          <label htmlFor='password' className='pl-2 flex flex-row items-center gap-2'>
            <FaUserAlt />
            <span className='text-gray-500 font-semibold'>用户名</span>
          </label>
          <input
            required
            type='text'
            name='username'
            placeholder='用户名'
            maxLength={100}
            value={form.username}
            onChange={onUpdateInput}
            className='p-4 bg-slate-100 rounded-xl outline-none'
          />
        </div>
        <div className='flex flex-col w-full form-element'>
          <label htmlFor='password' className='pl-2 flex flex-row items-center gap-2'>
            <FaLock />
            <span className='text-gray-500 font-semibold'>密码</span>
          </label>
          <input
            required
            type='password'
            name='password'
            placeholder='密码'
            maxLength={100}
            value={form.password}
            onChange={onUpdateInput}
            className='p-4 bg-slate-100 rounded-xl outline-none'
          />
        </div>
        <div className='w-full text-center pt-3'>
          <button className='py-3 w-full rounded-xl bg-green-500 hover:bg-green-700 duration-200 text-white font-semibold'>
            登录
          </button>
        </div>
        <a href='https://punch.mraddict.top' className='text-xs underline text-center text-[#0d0f82]'>
          返回提交页面
        </a>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
