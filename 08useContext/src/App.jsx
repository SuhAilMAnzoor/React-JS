import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider/UserContextProvider'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'

function App() {

  return (
    <div className='bg-gradient-to-br from-blue-50 to-green-300 min-h-screen'>
      <UserContextProvider >
        <Login/>
        <Profile/>
      </UserContextProvider>
    </div>
  )
}

export default App
