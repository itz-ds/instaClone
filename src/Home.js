import React from 'react'
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Suggestions from "./Suggestions";

function Home() {
  return (
    <div className="d-flex flex-column-reverse flex-lg-row justify-content-center ">
        <Sidebar/>
        <Feed/>
        <Suggestions/>
    </div>
  )
}

export default Home