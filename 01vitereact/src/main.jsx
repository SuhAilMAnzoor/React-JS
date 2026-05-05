import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'
// importing direct Chai component in main.jsx file
// rather than imprting in App.jsx

ReactDOM.createRoot(document.getElementById('root')).render(
    // Fragment tags
    <> 
    <Chai /> 
    <App />
    </>

    // you can use a div container instead of fragment tags
)
