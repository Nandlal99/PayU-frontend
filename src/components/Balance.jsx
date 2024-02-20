import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { base_url } from '../utils';

const Balance = () => {
  const [balance,setBalance] = useState(0);
  useEffect(() => {
    getBalance();
  },[]);

  const getBalance = async() => {
    const config = {
      url: base_url + "/api/v1/account/balance",
      method:"GET",
      headers:{
        "Authorization":"Bearer "+ sessionStorage.getItem("token")
      }
    };
    const response = await axios(config);
    setBalance(response.data.balance.toFixed(2));
  }

  return (
    <div className='flex p-5'>
        <h2 className='text-xl font-semibold'>Your balance Rs<span className='px-1'>{balance}</span></h2>
    </div>
  )
}

export default Balance