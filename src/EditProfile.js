import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios';

function EditProfile() {

    const [profile, setProfile] = useState(null);
    const [change, setChange] = useState(false);

    useEffect(()=>{
        axios("http://localhost:3001/profile")
        .then((data)=>setProfile(data.data));


    },[change])

    function HandleOnChange(event){
        setProfile(
            prev => ({
                ...prev,
                [event.target.name]: event.target.value
            })
        )
    }

    async function handleUpdate() {
        axios.put("http://localhost:3001/profile", profile)
        .catch(error=>console.log(error))

        setChange(!change)
    }

  return (
    <div className='d-flex justify-content-center '>
        <div>
            <Sidebar/>
        </div>
        <div className='p-5 d-flex flex-column gap-4'>
            <h5>Edit Profile</h5>
            {
                profile?(
                    <div className='d-flex flex-column gap-4' style={{width:"350px"}}>
                        <div className='d-flex gap-2 bg-light border p-2 rounded rounded-4 justify-content-start align-items-center'>
                            <img src={profile.profilePic} className='rounded-circle' style={{width:"55px", height:"55px"}}/>
                            <div className='d-flex flex-column justify-content-center'>
                                <b>{profile.username}</b>
                                <small>{profile.fullName}</small>
                            </div>
                        </div>
                        <form className='w-100'>
                            <label className='form-label'>Full Name</label><br/>
                            <input className='form-control'
                                type='text'
                                value={profile.fullName}
                                name="fullName"
                                onChange={HandleOnChange}
                            /><br/>
                            <label className='form-label'>Username</label><br/>
                            <input className='form-control'
                                type='text'
                                value={profile.username}
                                name="username"
                                onChange={HandleOnChange}
                            /><br/>
                            <label className='form-label'>Bio</label><br/>
                            <textarea className='form-control'
                                type='text'
                                name="bio"
                                value={profile.bio}
                                onChange={HandleOnChange}
                            rows="3"></textarea><br/>
                            <label className='form-label'>Change photo</label><br/>
                            <input className='form-control'
                                placeholder="Paste image's URL"
                                type='text'
                                name='profilePic'
                                onChange={HandleOnChange}
                            /><br/>
                            <button class="btn btn-primary"
                                onClick={()=>handleUpdate()}>Update</button>
                        </form>
                    </div>
                ):(
                    <div>

                    </div>
                )
            }
        </div>
    </div>
  )
}

export default EditProfile