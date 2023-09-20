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
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const [openLogin, setOpenLogin] = useState(false)
  const [signedIn, signIn] = useState(false)

  return (
    <div>
      <BrowserRouter>
        <Sidebar>
          <Topbar signedIn={signedIn} openLoginPage={setOpenLogin} signIn={signIn} />
          <Routes>
            <Route path="/" element={<Home signedIn={signedIn} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experiences" element={<Experiences signedIn={signedIn} />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
      {openLogin && <Login signIn={signIn} closeLogin={setOpenLogin} />}
    </div>
  );
};

export default App;