import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import {addUser,addToken,login} from '../../Redux/Slice/LoginSlice';


const Profile:React.FC = () => {
    const userdetails=useSelector((state:any)=>state.LoginSlice)
    const [user,setUser]=useState<login | undefined>()
    useEffect(() => {     
    console.log(userdetails);
    }, [])
    useEffect(()=>{
        setUser(userdetails)
    },[userdetails])
  return (
    <>
        {/* {user&&user.firstName}
        {user&&user.lastName}
        {user&&user.gender}
        {user&&<img src={user.image}/>}
        {user&&user.email} */}
        <section style={{backgroundColor: '#eee'}}>
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">User</a></li>
                  <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                 {user&& <img src={user.image} alt="avatar" className="rounded-circle img-fluid" style={{width: '150px'}} />}
                  <h5 className="my-3"> {user&&user.firstName} {user&&user.lastName}</h5>
                 
                  <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                  <div className="d-flex justify-content-center mb-2">
                  
                  </div>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                 
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">  {user&&user.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(097) 234-5678</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(098) 765-4321</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
           
                
              
             
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile;