import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {  loginUser } from '../../Redux/Slice/LoginSlice';
import { AppDispatch } from '../../Redux/store/store';



const Login:React.FC = () => {
    const dispatch=useDispatch<AppDispatch>()
    const navigate=useNavigate()
    const [username,setUsername]=useState<string>("")
    const [password,setPassword]=useState<string>("")
    
    const handleLogin=()=>{
      dispatch(loginUser({username,password}))
      //navigate('/')
    }
  return (
    <>
        <div className="login-box">
  <h2>Login</h2>
  <form onSubmit={(e)=>e.preventDefault()}>
    <div className="user-box">
      <input type="text" name="" value={username} onChange={(e)=>setUsername(e.target.value)} />
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name="" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <label>Password</label>
    </div>
    <button onClick={handleLogin}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </button>
  </form>
</div>
    </>
  )
}


export default Login;