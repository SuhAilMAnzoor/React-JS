import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  // let myObj =  {username : "Sohail",
  //   age : 22
  // }

  // let newArrary  = [3,4,5]

  return (
    <>
    
    <div className='bg-white-500 flex flex-col h-screen items-center justify-center gap-4'>
   <h1 className='bg-green-400 text-white p-2 text-center rounded-xl'>Code ke sath chai aur men</h1>
   <Card username="TYPE YOUR NAME" btnText = "Click me"/>
   <Card username="TYPE YOUR NAME HERE"/>

   </div>
    </>
  )
}

export default App
