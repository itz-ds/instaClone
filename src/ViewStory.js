import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function ViewStory() {

    const {id, tot} = useParams();

    const [story, setStory] = useState(null);

    const navigate = useNavigate()
    

    useEffect(()=>{
        fetch(`http://localhost:3001/stories/${id}`)
        .then((data)=>data.json())
        .then((data)=>setStory(data))
        .catch((error)=>console.log(error))
    },[id])

    if (id>tot || id<=0) {
        navigate('/')
    }

  return (
    <div>
        {
            story
            ?(
                <div className='d-flex justify-content-center align-items-center gap-3 text-white py-5 vh-100'>
                    
                    <button className='btn btn-close position-fixed top-0 end-0 p-3 p-md-4' onClick={()=>{navigate('/')}}></button>
                    <Link to={`http://localhost:3000/story/${Number(id)-1}/${tot}`}><i className="bi bi-arrow-left-circle"></i></Link>
                    <div className='d-flex justify-content-center position-relative h-100'>
                        <img className='img img-fluid d-block shadow rounded' src={story.stories.image}/>
                        <div className='position-absolute d-flex p-3 w-100 px-2 gap-2 align-items-center'>
                            <img src={story.user.profilePic} className='rounded-circle' style={{width:"36px"}}/>
                            <span className='pe-none'>{story.user.username}</span>
                            <i className="bi bi-three-dots ms-auto"></i>
                        </div>
                        <div className='position-absolute bottom-0 d-flex p-3 w-100 px-2 gap-2 shadow align-items-center'>
                            <input type='text' className='rounded-pill border border-white p-2 w-75 text-truncate' placeholder={`Reply to ${story.user.username}`} style={{backgroundColor:"transparent", color:"white"}}/>
                            <div className='ms-auto d-flex gap-2 pe-2' style={{fontSize:"24px"}}>
                                <i className="bi bi-heart"></i>
                                <i className="bi bi-send"></i>
                            </div>
                        </div>

                    </div>
                    <Link to={`http://localhost:3000/story/${Number(id)+1}/${tot}`}><i className="bi bi-arrow-right-circle"></i></Link>
                </div>
            ):(
                <div>Loading</div>
            )
        }
        
    </div>
  )
}

export default ViewStory