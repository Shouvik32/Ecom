import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import {addUser,addToken,login} from '../../Redux/Slice/LoginSlice';


const Profile:React.FC = () => {
    const userdetails=useSelector((state:any)=>state.LoginSlice)
    const [user,setUser]=useState<login|undefined>()
    useEffect(() => {     
    console.log(userdetails);
    }, [])
    useEffect(()=>{
        setUser(userdetails)
    },[userdetails])
  return (
    <div>
        {user&&user.firstName}
        {user&&user.lastName}
        {user&&user.gender}
        {user&&<img src={user.image}/>}
        {user&&user.email}
    </div>
  )
}

export default Profile