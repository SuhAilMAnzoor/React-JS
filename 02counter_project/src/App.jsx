import { useState } from 'react'  // import hooks
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counterValue, setCounter] =  useState(0)
 
 // let counterValue = 0   // not in use now

   function addValue ()  {
  // counterValue = counterValue + 1
  if(counterValue < 20){
   setCounter(counterValue + 1)
  }
   }

   const removeValue = () => {
        if (counterValue > 0) {  // condtion to avoid negative values
      setCounter(counterValue - 1)
    }
   }
  return (
    <>
    <h1>Chai aur Chai ke sath men</h1>
    <h2>Counter value : {counterValue}</h2>
    <button onClick={addValue}>
      Add Value {counterValue}
    </button>
    <br/>
    <br />
    <button 
    onClick={removeValue}>
      Minus Value {counterValue}
    </button>
    
    </>
  )
}

export default App
