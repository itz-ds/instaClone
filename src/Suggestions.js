import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Suggestions() {

  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate()
  
      useEffect(()=>{
  
          fetch("http://localhost:3001/profile")
          .then((data)=>data.json())
          .then((data)=>setProfile(data))
          .catch((err)=>console.log(err))
          
          fetch("http://localhost:3001/suggestions")
          .then((data)=>data.json())
          .then((data)=>setSuggestions(data))
          .catch((err)=>console.log(err))
      
      },[]);
      
  
  return (
    <>
        <div className='ms-5 ps-5 my-3 flex-column gap-3 end-side d-none d-xl-flex bg-white ' style={{width:"275px"}}>
            <div className='profile-area'>
                {            
                    profile?(
                        <div id={profile.id} className='d-flex align-items-center justify-content-between' style={{width:"275px"}}>
                            <img src={profile.profilePic} role='button' className='rounded-circle img img-fluid dp' onClick={()=>navigate('/profile')}/>
                            <div className='d-flex flex-column align-items-start ps-2'>
                                <strong>{profile.username}</strong>
                                <small>{profile.fullName}</small>
                            </div>
                            <a href='#' className='text-decoration-none pg-primary ms-auto'>Switch</a>
                        </div>
                    ):(
                        <div>
                            Loading!
                        </div>
                    )
                }
            </div>
            <div className='suggestion-area d-flex' style={{width:"275px"}}>
                <strong>Suggested for you</strong>
                <b className='ms-auto'>
                    <a href='#' className='text-decoration-none text-dark'>See all</a>
                </b>
            </div>
            <div className='suggestionList-area'>
                {
                    suggestions.length>0?(
                        <div>
                            {suggestions.map((suggestion)=>(
                                <div id={suggestion.id} className='d-flex align-items-center pb-3' style={{width:"275px"}}>
                                    <img src={suggestion.profilePic} className='rounded-circle img img-fluid dp'/>
                                    <div className='d-flex flex-column ps-2'>
                                        <strong>{suggestion.username}</strong>
                                        {
                                            suggestion.mutualFollowers.length>0?(
                                                <small className='text-nowrap mutual-list'>Followed by {suggestion.mutualFollowers[0].username}</small>
                                            ):(<></>)
                                        }
                                    </div>
                                    <a href='#' className='text-decoration-none pg-primary ms-auto'>Follow</a>
                                </div>
                            ))}
                        </div>
                    ):(
                        <div>Loading</div>
                    )
                }

            </div>
            <div style={{width:"275px"}}>
                <small>
                    <a href='#' className='text-decoration-none text-secondary'>
                        About </a>
                    <a href='#' className='text-decoration-none text-secondary'>
                        Help </a>
                    <a href='#' className='text-decoration-none text-secondary'>
                        Press </a>
                    <a href='#' className='text-decoration-none text-secondary'>
                        API </a>
                    <a href='#' className='text-decoration-none text-secondary'>
                        Jobs </a>
                    <a href='#' className='text-decoration-none text-secondary'>
                        Privacy </a>
                    <a href='#' className='text-decoration-none text-secondary'>
                        Terms </a>
                    <a href='#' className='text-decoration-none text-secondary'>
                        Locations </a>
                    <a href='#' className='text-decoration-none text-secondary'>
                        Language </a>
                    <a href='#' className='text-decoration-none text-secondary'>
                        Meta Verified </a>
                </small>
            </div>

            <div>
                <small>
                    &copy; 2026 Instagram from Meta
                </small>
            </div>
        </div>
    </>
  )
}
