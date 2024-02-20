
import React, { useState } from 'react'
import HeaderTitle from '../components/HeaderTitle'
import InputField from '../components/InputField'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { base_url } from '../utils'

const Signup = () => {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const navigate = useNavigate();
  const handleSignin = () => {
    navigate("/signin");
  }

  const handleSignup = async() => {
    const url = base_url + "/api/v1/user/signup";
    const response = await axios.post(url, {
      username,
      firstName,
      lastName,
      password
    });
    if(response.data.userId){
      navigate("/signin");
    }
  }

  return (
    <div className='h-screen w-full flex justify-center items-center bg-gray-400 dark:text-white dark:bg-slate-800'>
      <div className='h-auto w-80 p-4 bg-white border-solid border-2 flex flex-col rounded-md dark:text-white dark:bg-slate-800 '>
        <HeaderTitle title={"Sign Up"} />
        <div className='px-2 text-center text-slate-500 dark:text-slate-200'>Enter your information to create an account</div>
        <div className='my-2'>
          <InputField onChange={(e) => {
            setFirstName(e.target.value);
          }} fieldName={"First Name"} fieldType={"text"} fieldPlacehoder={"John"} />
          <InputField onChange={(e) => {
            setLastName(e.target.value);
          }} fieldName={"Last Name"} fieldType={"text"} fieldPlacehoder={"Deo"} />
          <InputField onChange={(e) => {
            setUsername(e.target.value);
          }} fieldName={"Email"} fieldType={"email"} fieldPlacehoder={"johndoe@email.com"} />
          <InputField onChange={(e) => {
            setPassword(e.target.value);
          }} fieldName={"Password"} fieldType={"password"} fieldPlacehoder={"123456"} />
        </div>
        <Button onClick={handleSignup} btnText={"Sign Up"} />
        <div className='text-center my-2'>
          Already have an account?<span onClick={handleSignin} className='text-blue-400 underline px-2 cursor-pointer'>Login</span>
        </div>
      </div>
    </div>
  )
}

export default Signup