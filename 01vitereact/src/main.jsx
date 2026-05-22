import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'
// importing direct Chai component in main.jsx file
// rather than imprting it in App.jsx 


 const anotherElement = (<a href='https://www.Google.com' target='_blank'>Visit Google</a>)

 const anotherUser = "Chai Aur Biskates"

const reactElement = React.createElement(
    "a",
    {href: 'https://google.com', target: '_blank'},
    'Click me to visit your favorite website',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // Fragment tags
    <> 
    <Chai /> 
    <App />
    </>
    // you can use a div container instead of fragment tags

    // if you want show reactElement and anotherUser user reactElement in render and remove all tags inside render
)