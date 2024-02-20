import React, { useEffect, useState } from 'react'
import User from './User'
import axios from 'axios';
import { base_url } from '../utils';

const Users = () => {
  const [users,setUsers]= useState([]);
  const [filter,setFilter] = useState("");
  
  useEffect(() => {
    const getData = setTimeout(() => {
      getUser();
    }, 1500);
    
    return () => clearTimeout(getData);

  }, [filter]);

  const getUser = async() => {
    const config = {
      url: base_url + "/api/v1/user/bulk?filter="+ filter,
      method:"GET",
      headers:{
        "Authorization":"Bearer "+ sessionStorage.getItem("token")
      }
    }
    const response = await axios(config);
    setUsers(response.data.user);
  }

  return (
    <div className='w-full p-5'>
        <h2 className='text-xl font-semibold mb-3'>Users</h2>
        <input onChange={(e) => {
          setFilter(e.target.value)
        }} type='text' placeholder='Search users...' className='border-solid border-2 w-full rounded-md px-3 py-1 mb-3 focus:outline-none focus:border-blue-400 text-slate-800' />
        {/* <User /> */}
        <div>
            {users.map(user => <User key={user?._id} firstName={user?.firstName} lastName={user?.lastName} id={user?._id} /> )}
        </div> 
    </div>
  )
}

export default Users