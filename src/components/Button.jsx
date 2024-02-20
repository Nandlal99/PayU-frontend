import React from 'react'

const Button = ({onClick,btnText}) => {
  return (
    <div className=' my-3 '>
        <button onClick={onClick} className={`border-solid border-2 border-slate-900 bg-slate-900 w-full text-white text-sm px-2 sm:px-5 py-1 rounded-md dark:bg-rose-400  dark:border-rose-400 `}>{btnText}</button>
    </div>
  )
}

export default Button