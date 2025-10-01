import React, { useContext, useEffect, useState } from 'react';
import { CaptainContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainProtectedWrapper = ({ children }) => {
  const { setCaptain } = useContext(CaptainContext);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate('/captainlogin');
      return;
    }

 
    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        setCaptain(res.data.captain);
        setIsLoading(false);
      } else {
        localStorage.removeItem('token');
        navigate('/captainlogin');
      }
    })
    .catch(() => {
      localStorage.removeItem('token');
      navigate('/captainlogin');
    });
  }, [token, navigate, setCaptain]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
