import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='p-70'>
   <h1 className='bg-green-400 text-white p-4 text-center rounded-xl'>Code ke sath chai aur men</h1>
   </div>
    </>
  )
}

export default App
