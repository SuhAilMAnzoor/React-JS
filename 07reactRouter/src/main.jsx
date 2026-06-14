import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import RouteDirectory from './RouteDirectory.jsx'
import Contact from './components/Contacts/Contacts.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RouteDirectory/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//             {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

// Recommended Way to Intialize Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RouteDirectory/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route
       loader={githubInfoLoader}
       path='github'
      element={<Github/>}
      />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
