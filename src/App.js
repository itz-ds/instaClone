import React from "react";
import Home from "./Home";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ViewStory from "./ViewStory";
import Profile from "./Profile";
import EditProfile from "./EditProfile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/story/:id/:tot" element={<ViewStory/>}/>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/editprofile" element={<EditProfile/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;