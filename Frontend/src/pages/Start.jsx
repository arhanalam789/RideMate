import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8  w-full bg-red-500 flex justify-between flex-col'>
        <img className='w-16 ml-8' src="https://1000logos.net/wp-content/uploads/2021/04/Uber-logo.png" alt="" />
        <div className='bg-white py-4 px-4 pb-7'>
          <h2 className='texl-3xl font-bold'>Get Started With RideMate</h2>
          <Link to={'/login'} className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4'>Continue</Link>
        </div>

      </div>
    </div>
  )
}

export default Start