import React, { useEffect, useState } from 'react'

export default function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{

        fetch("http://localhost:3001/posts")
        .then((data)=>data.json())
        .then((data)=>setPosts(data))
        .catch((err)=>console.log(err))
    
    },[]);
    
  return (
    <div className='post-feed d-flex flex-column align-items-center mt-3'>
        {            
            posts.length>0?(
                <>
                    {posts.map((post)=>(
                        <div key={post.id} className='d-flex flex-column gap-1 pb-2 post-space w-100 p-1'>
                            <div className='d-flex gap-1 align-items-center mx-1'>
                                <img className='rounded-circle img img-fluid dp' src={post.user.profilePic} />
                                <h6>{post.user.username}</h6>
                                <h6 className='ms-auto'><i className="bi bi-three-dots "></i></h6>
                            </div>
                            <div className='post-card'>
                                <img className='img img-fluid post-pic' src={post.image}/>
                            </div>
                            <div className='d-flex mx-1 gap-2'>
                                <i className="bi bi-heart"><span className='fst-normal'> {post.likes.length>0
                                        ?(<span>{post.likes.length}</span>)
                                        :(<span>{""}</span>)
                                        }</span></i>
                                <i className="bi bi-chat"><span className='fst-normal'> {post.comments.length>0
                                        ?(<span>{post.comments.length}</span>)
                                        :(<span>{""}</span>)
                                        }
                                </span></i>
                                <i className="bi bi-arrow-repeat"></i>
                                <i className="bi bi-send"></i>
                                <i className="bi bi-bookmark ms-auto"></i>
                            </div>
                            <div className='mx-1'>
                                {post.likes.length>0?(
                                    <div>Liked by <b>{post.likes[0].username}</b>{post.likes.length>1?(
                                        <span> and <b>{post.likes.length-1} other</b></span>
                                    ):(
                                        <></>
                                    )}</div>
                                ):(
                                    <></>
                                )}
                            </div>
                            <div className='text-wrap post-caption'>
                                <p className='text-truncate'><b>{post.user.username} </b>{post.caption}</p>
                            </div>
                        </div>
                    ))}    
                </>
            ):(
                <div>
                    Loading Posts
                </div>
            )
        }
    </div>
  )
}
