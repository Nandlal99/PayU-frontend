import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const User = ({id,firstName="john",lastName="doe"}) => {
  const nagivate = useNavigate();
  const handleSendMoney = () => {
    nagivate("/send/"+id);
  }

  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center'>
            <div className='h-8 w-8 rounded-full bg-slate-200 flex justify-center items-center font-semibold text-sm dark:bg-gray-400 dark:border-white'>
                <div>{firstName[0].toLocaleUpperCase()}</div>
            </div>
            <h2 className='mx-3 text-sm font-semibold'>{firstName+" "+lastName}</h2>
        </div>
        <Button onClick={handleSendMoney} btnText={"Send Money"} bg={"slate-900"} borderColor={"slate-900"} />
    </div>
  )
}

export default User