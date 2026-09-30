import React, { useEffect, useState } from 'react'
import logo from "./assets/insta-logo.png"
import { useNavigate } from 'react-router-dom'

function Sidebar() {

    const navigate = useNavigate()
    const [profile, setProfile] = useState(null);
    
    useEffect(()=>{
        fetch("http://localhost:3001/profile")
        .then((data)=>data.json())
        .then((data)=>setProfile(data))
        .catch((error)=>console.log(error))
    })


  return (
    <div>
        <nav className='sidebar navbar d-flex d-lg-none position-fixed bottom-0 start-0 justify-content-center align-items-end bg-white w-100' >
            <ul className='nav-navbar d-flex flex-lg-column align-items-center justify-content-center p-0'>
                <li className='nav-item btn' role='button' onClick={()=>{navigate("/")}}><i className="bi bi-house-door"></i></li>
                <li className='nav-item btn'><i className="bi bi-play-btn"></i></li>
                <li className='nav-item btn'><i className="bi bi-chat-dots"></i></li>
                <li className='nav-item btn'><i className="bi bi-search"></i></li>
                {/* <li className='nav-item btn'><i className="bi bi-compass"></i></li> */}
                <li className='nav-item btn'><i className="bi bi-heart"></i></li>
                <li className='nav-item btn'><i className="bi bi-plus-lg"></i></li>
                <li className='nav-item btn ' onClick={()=>{navigate("/profile")}}>
                    {
                        profile?(
                            <img src={profile.profilePic} className='rounded-circle my-2'/>
                        ):(
                            <i className="bi bi-profile"></i>
                        )
                    }
                    <span style={{paddingLeft:"10px"}}></span>
                </li>
            </ul>
        </nav>
        <nav className='sidebar navbar d-none d-lg-flex flex-column justify-content-between align-items-start position-fixed start-0 p-2 vh-100' >
            <h1 className='navbar-brand btn mb-auto' onClick={()=>{navigate("/")}}><i className="bi bi-instagram"></i></h1>
            <ul className='nav-navbar d-flex flex-column align-items-start p-0'>
                <li className='nav-item btn' role='button' onClick={()=>{navigate("/")}}><i className="bi bi-house-door"></i>Home</li>
                <li className='nav-item btn'><i className="bi bi-play-btn"></i>Reels</li>
                <li className='nav-item btn'><i className="bi bi-chat-dots"></i>Messages</li>
                <li className='nav-item btn'><i className="bi bi-search"></i>Search</li>
                <li className='nav-item btn'><i className="bi bi-compass"></i>Explore</li>
                <li className='nav-item btn'><i className="bi bi-heart"></i>Notifications</li>
                <li className='nav-item btn'><i className="bi bi-plus-lg"></i>Create</li>
                <li className='nav-item btn'><i className="bi bi-bar-chart-fill"></i>Dashboard</li>
                <li className='nav-item btn mt-2' onClick={()=>{navigate("/profile")}}>
                    {
                        profile?(
                            <img src={profile.profilePic} className='rounded-circle'/>
                        ):(
                            <i className="bi bi-profile"></i>
                        )
                    }
                    <span style={{paddingLeft:"10px"}} className='text-baseline'>Profile</span>
                </li>
            </ul>
            <ul className='d-flex flex-column align-items-start mt-auto p-0'>
                <li className='nav-item btn'><i className="bi bi-threads"></i>Threads</li>
                <li className='nav-item btn'><i className="bi bi-list"></i>More</li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar