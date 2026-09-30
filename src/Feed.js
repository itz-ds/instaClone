import React from 'react'
import Stories from './Stories'
import Posts from './Posts'

export default function Feed() {
  return (
    <div className='d-flex flex-column' style={{maxWidth:"630px", width:"100%"}}>
        <div><Stories/></div>
        <div><Posts/></div>
    </div>
  )
}
