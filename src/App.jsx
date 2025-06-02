import React from 'react'
import "./App.css"
import { createHashRouter } from 'react-router-dom'
import Home from './pages/Home'
import Country from './pages/Country'
import About from './pages/About'
import Contact from './pages/Contact'
import CountryDetail from './components/Layouts/CountryDetails'
import { RouterProvider } from 'react-router-dom'
import AppLayout from './components/Layouts/AppLayout'
import ErrorPage from './pages/ErrorPage'
const router = createHashRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children  :[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/country",
        element: <Country />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/country/:id",
        element: <CountryDetail />,
      },
    ]
  }
  
])
const App = () => {
  return (
    <RouterProvider router={router} />

  )
}

export default App