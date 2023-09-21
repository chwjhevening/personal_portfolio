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
            {/* TODO: create route paths for ./, /home, ./projects, and ./experiences 
            passing in attribute signed in to communicate to the page whether you are currently signed in */}
          </Routes>
        </Sidebar>
      </BrowserRouter>
      {openLogin && <Login signIn={signIn} closeLogin={setOpenLogin} />}
    </div>
  );
};

export default App;