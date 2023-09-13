import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home.jsx';
import Projects from './Pages/Projects.jsx';
import Experiences from './Pages/Experiences.jsx';
import Login from './Components/Login';
import { useState } from "react"
import Topbar from './Components/Topbar';

const App = () => {

  const [openLogin, setOpenLogin] = useState(false)

  return (
    <div>
      <BrowserRouter>
        <Sidebar>
          <Topbar openLoginPage={setOpenLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experiences" element={<Experiences />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
      {openLogin && <Login closeLogin={setOpenLogin} />}
    </div>
  );
};

export default App;