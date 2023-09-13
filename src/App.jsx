import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home.jsx';
import Projects from './Pages/Projects.jsx';
import Experiences from './Pages/Experiences.jsx';
import default_profile_pic from './Assets/profile_pic.jpg'

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <div className="top_section">
          <img id="profile_img" src={default_profile_pic} />
          <div className="basic_info">
            <h1>Name</h1>
            <h3>Junior, Computer Science</h3>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;