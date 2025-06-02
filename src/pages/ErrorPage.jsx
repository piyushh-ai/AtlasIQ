import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
  return (
    <div style={{height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#2e86c1",padding:"2.4rem",borderRadius:"0.3rem"}}>
        <h1 style={{color:"#fff",fontSize:"2.4rem",fontWeight:"bold"}}>Oops! Something went wrong</h1>
        <p style={{color:"#fff",fontSize:"1.6rem"}}>{error.data}</p>
        <p style={{color:"#fff",fontSize:"1.6rem"}}>{error.status}</p>
        <NavLink to="/"><button>Go Home</button></NavLink>
    </div>
  )
}

export default ErrorPage