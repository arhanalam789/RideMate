import React, { useEffect } from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
const UserProtectedWrapper = ({children}) => {

    const {user} = useContext(UserContext);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect(()=>{ 
    if(!token){
        navigate('/login');
        return;
    }
},[token,navigate])
  return (
    <>
    {children}
    </>
  )
}

export default UserProtectedWrapper