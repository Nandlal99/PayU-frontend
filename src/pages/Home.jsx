import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if(token){
      console.log(token);
      navigate("/dashboard");
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