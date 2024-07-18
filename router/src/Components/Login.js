import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const path = useNavigate();
    function handlelogin() {

        path("/dashboard")
    }
  return (
    <div>
        <h2>Login</h2>
        <button onClick={handlelogin}>Login</button>
    </div>
  )
}

export default Login