import React from 'react'

const InputField = ({onChange,fieldName,fieldType,fieldPlacehoder}) => {
  return (
    <div>
        <div className='flex flex-col justify-start'>
            <h2 className='my-2 font-semibold text-sm'>{fieldName}</h2>
            <input onChange={onChange}  className='border-solid border-2 border-slate-300 px-3 py-1 rounded-md w-full focus:outline-none focus:border-blue-400 text-slate-800' type={fieldType} placeholder={fieldPlacehoder} />
        </div>
    </div>
  )
}

export default InputField