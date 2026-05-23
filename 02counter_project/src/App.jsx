import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let countervalue = 0

   function addValue () {
    countervalue = countervalue + 1
    console.log(countervalue)
   }

   const removeValue = () => {
        if (countervalue > 0) {
      countervalue = countervalue - 1
    }
    console.log(countervalue);
   }
  return (
    <>
    <h1>Chai aur Chai ke sath men</h1>
    <h2>Counter value : {countervalue}</h2>
    <button onClick={addValue}>
      Add Value
    </button>
    <br/>
    <br />
    <button 
    onClick={removeValue}>
      Minus Value
    </button>
    
    </>
  )
}

export default App
