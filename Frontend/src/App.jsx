import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/UserHome'
import Userlogin from './pages/Userlogin'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper'
import Start from './pages/Start'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserHome from './pages/UserHome'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/login' element={<Userlogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path='/captainlogin' element={<Captainlogin />} />
        <Route path='/captainsignup' element={<CaptainSignup />} />
        <Route path='/home' element={<UserProtectedWrapper><UserHome /></UserProtectedWrapper>} />
        <Route path='/captain-home' element={<CaptainProtectedWrapper><UserHome /></CaptainProtectedWrapper>} />
      </Routes>
    </div>
  )
}

export default App