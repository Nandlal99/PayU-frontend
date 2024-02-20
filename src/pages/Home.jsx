import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token){
      console.log(token);
    }else{
      console.log(token);
      navigate("/signin");
    }
  }, []);

  return (
    <div>Home</div>
  )
}

export default Home