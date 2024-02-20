import React, { useState } from 'react'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'
import Users from '../components/Users'

const Dashboard = () => {
  // const [user,setUser] = useState("");
  return (
    <div className='flex flex-col h-screen w-full dark:text-white dark:bg-slate-800'>
      <Appbar />
      <Balance />
      <Users  />
    </div>
  )
}

export default Dashboard