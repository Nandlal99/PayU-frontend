import React from 'react'

const Transaction = ({name, date, time, amount}) => {
    const months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    // const date = "25/11/2024";
    // const time = "10:10";
    // const amount = "+100";
    // const name = "Nandlal Jaiswal";

    const dateFormate = (date, time) => {
        const dateArr = date.split("/");
        let str1 = months[parseInt(dateArr[1])] + " " + dateArr[0] + ", " + dateArr[2];
        return str1;
    }

    const timeFormate = (time) => {
        const timeArr = time.split(":");
        let str2 = `${parseInt(timeArr[0]) > 12 ? (parseInt(timeArr[0]) - 12 +":"+parseInt(timeArr[1]) +" PM") : (timeArr[0]+":"+timeArr[1]+" AM")}`;
        return str2;
    }

  return (
    <div className='flex justify-between items-center my-3'>
        <div className='flex items-center'>
            <div className='h-10 w-10 rounded-full bg-slate-200 flex justify-center items-center font-semibold text-sm dark:bg-gray-400 dark:border-white'>
                <div>{name[0].toUpperCase()}</div>
            </div>
            <div className='flex flex-col mx-5'>
                <h2 className='text-sm font-semibold'>{name}</h2>
                <p className='text-sm'>{dateFormate(date) + " at " + timeFormate(time)}</p>
            </div>
        </div>
        <div className={`flex flex-row mx-3 gap-3 text-lg font-semibold ${amount[0]==="+" ? "text-green-400" : "text-red-400"}`}>
            <h2>{amount[0]}</h2>
            <h2>{`₹${amount[0]==="-" ? amount*-1 : amount.slice(1)}`}</h2>
        </div>
    </div>
  )
}

export default Transaction