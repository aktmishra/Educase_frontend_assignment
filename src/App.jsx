import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

 
import './App.css'
import Welcome from './page/Welcome'
import Login from './component/auth/Login'
import Register from './component/auth/Register'
import Profile from './page/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcome></Welcome>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/profile' element={<Profile></Profile>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
