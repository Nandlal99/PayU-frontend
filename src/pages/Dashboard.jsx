import React, { useState } from 'react'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'
import Users from '../components/Users'
import Button from '../components/Button'
import Transactions from '../components/Transactions'

const Dashboard = () => {
  const [user,setUser] = useState(true);
  return (
    <div className='flex flex-col h-screen w-full overflow-y-scroll dark:text-white dark:bg-slate-800'>
      <Appbar />
      <Balance />
      <div className='flex flex-row px-5 gap-3'>
        <div  className='flex justify-center items-center bg-slate-200 h-8 w-20 rounded-md cursor-pointer dark:bg-rose-400 dark:border-rose-400'>
          <button onClick={() => {
            setUser(true);
          }}>User</button>
        </div>
        <div  className='flex justify-center items-center bg-slate-200 h-8 w-24  rounded-md cursor-pointer dark:bg-rose-400 dark:border-rose-400'>
          <button onClick={() => {
            setUser(false);
          }}>Transaction</button>
        </div>
      </div>
      {user ? <Users /> : <Transactions />}
      {/* <Users  /> */}
    </div>
  )
}

export default Dashboard