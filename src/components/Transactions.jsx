import React, { useEffect, useState } from 'react'
import Transaction from './Transaction';
import { base_url } from '../utils';
import axios from 'axios';

const Transactions = () => {
  const [transactions,setTransactions] = useState([]);

  useEffect(() => {
    getAllTransaction();
  }, []);

  const getAllTransaction = async() => {
    const config = {
      url: base_url + "/api/v1/account/transactions",
      method:"GET",
      headers:{
        "Authorization":"Bearer "+ sessionStorage.getItem("token")
      }
    }
    const response = await axios(config);
    setTransactions(response.data.transaction);
    // console.log(response.data.transaction);
  }

  return (
    <div className='w-full p-5'>
        <h2 className='text-xl font-semibold mb-3'>Transactions</h2>
        <div>
          {transactions.length === 0 ? (
            <h2>No transaction, let do some transaction!!!</h2>
          ) : (
            transactions.map(val => <Transaction key={val._id} name={val.name} amount={val.amount} date={val.date} time={val.time} />)
          )}
            {/* <Transaction /> */}
        </div>
    </div>
  )
}

export default Transactions