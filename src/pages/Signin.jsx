import React, { useEffect, useState } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { base_url } from '../utils';


const Signin = () => {
  const [username,setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/signup");
  }

  const handleLogin = async() => {
    const url = base_url + "/api/v1/user/login"
    const response = await axios.post(url,{
      username,
      password
    });
    // console.log(response);
    if(response.data.token){
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("userId", response.data.userId);
      navigate("/dashboard");
    }
    
  }

  return (
    <div className='h-screen w-full flex justify-center items-center bg-gray-400 dark:text-white dark:bg-slate-800 '>
      <div className='h-auto w-80 p-4 bg-white border-solid border-2 flex flex-col rounded-md dark:text-white dark:bg-slate-800'>
        <HeaderTitle title={"Sign In"} />
        <div className='px-2 text-center text-slate-500 dark:text-slate-200'>Enter your credentials to access your account</div>
        <div className='my-3'>
          <InputField onChange={(e) => { setUsername(e.target.value) }}  fieldName={"Email"} fieldType={"email"} fieldPlacehoder={"johndoe@email.com"} />
          <InputField onChange={(e) => { setPassword(e.target.value)}}  fieldName={"Password"} fieldType={"password"} fieldPlacehoder={""} />
          <Button onClick={handleLogin} btnText={"Sign In"} bg={"slate-900"} borderColor={"slate-900"} />
        </div>
        <div className='text-center my-2'>
          Don't have an account?<span  onClick={handleSignup} className='text-blue-400 underline px-2 cursor-pointer'>Sign Up</span>
        </div>
      </div>
    </div>
  )
}

export default Signin