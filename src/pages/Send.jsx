import React, { useEffect, useState } from 'react'
import HeaderTitle from '../components/HeaderTitle'
import InputField from '../components/InputField'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { base_url } from '../utils';

const Send = () => {
  const {id} = useParams();
  const [user,setUser] = useState("");
  const [amount,setAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
    // console.log(id);
  },[]);

  const getUser = async() => {
    const config = {
      url: base_url + "/api/v1/user/"+ id,
      method:"GET",
      headers:{
        "Authorization":"Bearer "+ sessionStorage.getItem("token")
      }
    };
    const response = await axios(config);
    setUser(response.data.user);
  };

  const handleTransferMoney = () => {
    console.log("transfer money", amount);
    sessionStorage.setItem("to", id);
    sessionStorage.setItem("amount", amount);
    navigate("/transfer");
  }

  return (
    <div className='h-screen w-full flex justify-center items-center bg-gray-400 dark:text-white dark:bg-slate-800'>
      <div className='h-auto w-96 border-solid border-2 bg-white p-6 rounded-md dark:text-white dark:bg-slate-800'>
        <HeaderTitle title={"Send Money"} />
        <div className='flex items-center text-xl font-medium mt-10 mb-3'>
          <div className='h-10 w-10 rounded-full bg-green-500 text-white flex justify-center items-center'>
            <div>{ user ? user?.firstName[0]?.toUpperCase() : "A"}</div>
          </div>
          <h2 className='mx-3 font-semibold'>{user ? user?.firstName +" "+user?.lastName : "Friend's Name"}</h2>
        </div>
        <InputField onChange={(e) => {
          setAmount(e.target.value);
        }} fieldName={"Amount in (Rs)"} fieldType={"text"} fieldPlacehoder={"Enter amount"} />
        <div className=' my-3 '>
          <button onClick={handleTransferMoney} className={`border-solid border-2 border-green-500 bg-green-500 w-full text-white text-sm px-2 sm:px-5 py-1 rounded-md`}>
            Initiate Transfer
          </button>
          <button onClick={() => {
            navigate("/dashboard");
          }} className={`border-solid border-2 border-slate-900 bg-slate-900 w-full text-white text-sm mt-3 px-2 sm:px-5 py-1 rounded-md dark:bg-rose-400  dark:border-rose-400`}>
            Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default Send