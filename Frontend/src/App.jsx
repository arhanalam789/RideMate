import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Userlogin from './pages/Userlogin'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'
import Start from './pages/Start'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/login' element={<Userlogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path='/captainlogin' element={<Captainlogin />} />
        <Route path='/captainsignup' element={<CaptainSignup />} />
        <Route path='/home' element={<UserProtectedWrapper><Home /></UserProtectedWrapper>} />
      </Routes>
    </div>
  )
}

export default App