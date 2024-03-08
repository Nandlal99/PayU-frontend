import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { base_url } from '../utils';

const Appbar = () => {
  const [user,setUser] = useState(null);
  const nagivate = useNavigate();

  const {theme,setTheme} = useContext(ThemeContext);

  useEffect(() => {
    getUserDetail();
    if(theme){
        document.documentElement.classList.add("dark");
    }else{
        document.documentElement.classList.remove("dark");
    }
  },[theme]);

  const getUserDetail = async() => {
    const config = {
      url: base_url +"/api/v1/user/" + sessionStorage.getItem("userId"),
      method:"GET",
      headers:{
        "Authorization":"Bearer "+ sessionStorage.getItem("token")
      }
    };
    const response = await axios(config);
    setUser(response.data.user);
  };

  const handleLogout = () => {
    // console.log("logout");
    sessionStorage.clear();
    nagivate("/signin");
  }

  const handleTheme = () => {
    setTheme(!theme);
  }


  return (
    <>
        <div className='flex flex-row justify-between w-full p-3 dark:text-white dark:bg-slate-800'>
            <h2>PayU App</h2>
            <div className='flex items-center gap-4'>
                <h2 className='mx-2 invisible md:visible'>Namaste</h2>
                <div className='flex justify-center items-center bg-slate-200 h-8 w-8 rounded-full dark:bg-gray-400 dark:border-white'>
                    <div>{user?.firstName[0]?.toLocaleUpperCase()}</div>
                </div>
                <div  className='flex justify-center items-center bg-slate-200 h-8 w-20 rounded-md cursor-pointer dark:bg-rose-400 dark:border-rose-400'>
                  <div onClick={handleLogout}>Logout</div>
                </div>
                <div className='button flex justify-center items-center bg-slate-200 h-8 p-2 rounded-md dark:bg-rose-400 dark:border-rose-400'>
                  <button onClick={handleTheme} >{theme ? "light" : "dark"}</button>
                </div>
            </div>
        </div>
        <div className='h-[1px] w-full bg-slate-200 '></div>
    </>
    
  )
}

export default Appbar