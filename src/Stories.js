import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Stories() {

  const [stories, setStories] = useState([]);
  const navigate = useNavigate()

  useEffect(()=>{
    fetch("http://localhost:3001/stories")
    .then((data)=>data.json())
    .then((data)=>setStories(data))
    .catch((error)=>console.log(error))
  }, []);


  
    

  return (
    <div className='story-bar d-flex pt-3 ps-1 overflow-hidden m-0'>
      {stories.length>0?(
        stories.map((story)=>(
          <div key={story.id} className='d-flex flex-column justify-content-center align-items-center mx-1' style={{width:"75px"}}>
            <div className='story-ring' role='button' onClick={()=>{navigate(`/story/${story.id}/${stories.length}`)}}>
                <img className='img img-fluid story-dp border border-2' src={story.user.profilePic}/>
            </div>
            <small className='text-truncate w-100 user-select-none' style={{fontWeight:"500"}} >{story.user.username}</small>
          </div>
        ))
      )
      :(<p>Loading</p>)
      }
    </div>
  )
}
