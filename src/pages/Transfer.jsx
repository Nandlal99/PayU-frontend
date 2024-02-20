import React, { useEffect, useState } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import InputField from '../components/InputField';
import { useNavigate } from 'react-router-dom';
import { useTransferMoney } from '../hooks/useTransferMoney';

const Transfer = () => {
  const navigate = useNavigate();
  
  const to = sessionStorage.getItem("to");
  const amount = sessionStorage.getItem("amount");
  
  const {data,loading} = useTransferMoney(to,amount);
  console.log(data,loading);

  return (
    <div className='h-screen w-full flex justify-center items-center bg-gray-400 dark:text-white dark:bg-slate-800'>
      <div className='h-auto w-96 border-solid border-2 bg-white p-6 rounded-md dark:text-white dark:bg-slate-800'>
        <HeaderTitle title={"Transfer Money"} />
        <div className='flex flex-col justify-center items-center my-3 gap-2'>
          { loading &&
          <div className='flex flex-col justify-center items-center'>
            <div className=' border-solid border-8 border-gray-200 border-t-8 border-t-blue-500 rounded-full h-28 w-28 animate-spin-slow '></div>
            <h3 className='text-xl my-2'>Transfer money process...</h3>
          </div>}
          
          { data.statusCode === 200 &&
            <div className='flex flex-col justify-center items-center'> 
              <div className=' border-solid border-8 border-green-400  rounded-full h-28 w-28  '>
                <i className="fa fa-check text-8xl text-green-400 "></i>
              </div>
              <h3 className='text-xl text-green-400 my-2'>{data.message}</h3>
            </div> 
          }
          { data.statusCode === 411 &&
              <div className='flex flex-col justify-center items-center'> 
                <div className='flex justify-center items-center border-solid border-8 border-red-400  rounded-full h-28 w-28  '>
                  <i className="fa fa-close text-8xl text-red-400"></i>
                </div>
                <h3 className='text-xl text-red-400 my-2'>{ data.message ? data.message : "Oops! Something went wrong"} </h3>
              </div>
          }
        </div>
        <button onClick={() => {
            navigate("/dashboard");
          }} className={`border-solid border-2 border-slate-900 bg-slate-900 w-full text-white text-sm mt-3 px-2 sm:px-5 py-1 rounded-md dark:bg-rose-400  dark:border-rose-400 `}>
            Home
          </button>
      </div>
    </div>
  )
}

export default Transfer