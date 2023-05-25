import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from '../../Redux/Slice/LoginSlice';


const Logout = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleLogout=()=>{
        localStorage.setItem("token","")
        dispatch(logout)
        navigate("/login")
    }

  return (
    <div>
      <button className='auth' onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Logout;