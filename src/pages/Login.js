import React, { useState } from "react";
import { useCookies } from "react-cookie";

import { Footer } from "../components";
import { loginApi } from "../api";
import { useStateContext } from "../context/ContextProvider";

const Login = () => {
  const { setIsLogin } = useStateContext();
  const [isLoginFailed, setisLoginFailed] = useState(false);
  const [cookies, setCookie] = useCookies(["accessToken"]); // eslint-disable-line no-unused-vars
  const InputFields = document.getElementsByTagName("input");

  const handleSetCookie = (accessToken) => {
    setCookie("accessToken", accessToken, { path: "/" });
  };

  return (
    <div className='flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-br from-[#80ffdb] to-[#0077b6]'>
      <div className='bg-white p-3 md:p-10 md:my-0 my-10 rounded-xl min-w-[90%] md:min-w-[600px] flex flex-col gap-4'>
        {isLoginFailed && (
          <div className='bg-red-500 text-white font-semibold mx-5 py-2 rounded-xl text-center'>
            <p>登录失败</p>
          </div>
        )}
        <div className='w-full text-center font-semibold text-3xl md:text-4xl text-gray-500'>
          <h1>请先登录</h1>
        </div>
        <InputField name='username' placeholder='用户名' />
        <InputField name='password' placeholder='密码' />
        <div className='w-full text-center'>
          <button
            className='py-3 px-10 rounded-xl bg-[#FF0063] text-white font-semibold'
            onClick={() => {
              if (InputFields[0].value.length === 0)
                InputFields[0].closest(".form-element").querySelector(".err-msg").innerText = "用户名不能为空哦";
              else InputFields[0].closest(".form-element").querySelector(".err-msg").innerText = "";
              if (InputFields[1].value.length === 0)
                InputFields[1].closest(".form-element").querySelector(".err-msg").innerText = "密码不能为空哦";
              else InputFields[1].closest(".form-element").querySelector(".err-msg").innerText = "";
              if (InputFields[0].value.length && InputFields[1].value.length) {
                loginApi(InputFields[0].value, InputFields[1].value, (data) => {
                  if (data.status) {
                    setIsLogin(true);
                    handleSetCookie(data.message);
                  } else {
                    setIsLogin(false);
                    setisLoginFailed(true);
                  }
                });
              }
            }}
          >
            登录
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const InputField = ({ name, placeholder }) => {
  return (
    <div className='flex flex-col gap-2 px-4 w-full form-element'>
      <label htmlFor={name} className='pl-4'>
        {placeholder}
      </label>
      <input
        type='text'
        id={name}
        name={name}
        required
        placeholder={placeholder}
        className='p-4 bg-slate-100 rounded-xl outline-none'
      />
      <div className='pl-4 text-red-500 err-msg'></div>
    </div>
  );
};

export default Login;
