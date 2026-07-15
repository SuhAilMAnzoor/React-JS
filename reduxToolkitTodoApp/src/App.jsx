import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="bg-gray-500 min-h-screen py-12 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-2xl mx-auto flex flex-col">
        <div className="self-center">
          <AddTodo />
        </div>
        <Todos />
      </div>
    </div>
  )
}


export default App
