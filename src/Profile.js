import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Feed from './Feed'
import Sidebar from './Sidebar'
import { Navigate, useNavigate } from 'react-router-dom'

function Profile() {

    const [profile, setProfile] = useState(null)
    const [posts, setPosts] = useState([])
    const [highlights, setHighlights] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/profile")
        .then((data)=> setProfile(data.data));

        axios.get("http://localhost:3001/profilePosts")
        .then((data)=> setPosts(data.data));

        axios.get("http://localhost:3001/highlights")
        .then((data)=> setHighlights(data.data));

    },[])
    
    const navigate = useNavigate();
    
  return (
    <div className='d-flex justify-content-center'>
        <div><Sidebar/></div>
        {
            profile?(
                <div className='d-flex flex-column align-items-center px-4 px-md-0' style={{maxWidth:"630px", width:"100%"}}>
                    <div className='d-flex flex-column py-5 gap-3'>
                        <div className='row justify-content-start'>
                            <div className='col-4 cal-md-2'>
                                <img src={profile.profilePic} className='rounded-circle img img-fluid w-100'/>
                            </div>
                            <div className='col-8 d-flex flex-column '>
                                <h3 className='d-inline-block'>{profile.username} <i className="bi bi-gear-wide"></i></h3>
                                <small className='pb-2'>{profile.fullName}</small>
                                <div className='d-flex gap-3'>
                                    <span><b>{profile.postsCount}</b> posts</span>
                                    <span><b>{profile.followersCount}</b> followers</span>
                                    <span><b>{profile.followingCount}</b> following</span>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className=''>
                                <small className='text-secondary'>{profile.bio}</small>
                            </div>
                        </div>
                        <div className='row gap-1'>
                            <button className='btn btn-primary col' onClick={()=>{navigate("/editprofile")}}>Edit Profile</button>
                            <button className='btn btn-primary col'>View archive</button>
                        </div>
                        <div>
                            {
                                highlights.length>0?(
                                    <div className='row pt-2'>
                                        {highlights.map((highlight)=>(
                                            <div id={highlight.id} className='col-3 col-md-2 d-flex flex-column align-items-center' >
                                                <div className='story-ring'>
                                                    <img src={highlight.coverImage} className='rounded-circle img img-fluid h-100 bg-white border border-white border-2'/>
                                                </div>
                                                <p>{highlight.title}</p>
                                            </div>
                                        ))}
                                    </div>
                                ):(
                                    <div>
                                        
                                    </div>
                                )
                            }
                        </div>
                        <div>
                            {
                                posts.length>0?(
                                    <div className='row pt-3 justify-content-left'>
                                        {
                                            posts.map((post)=>(
                                                <div id={post.id} className='col-5 col-md-4 d-flex bg-secondary px-0 m-1'>
                                                    <img src={post.image} className='img img-fluid'/>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ):(
                                    <div>

                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            ):(
                <div>
                    No profile found!
                </div>
            )
        }
    </div>
  )
}

export default Profile