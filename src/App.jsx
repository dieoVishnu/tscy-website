import React from 'react'
import Main from './pages/Main'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Career from './pages/Career';
import BrokerRegistration from './pages/BrokerRegistration';
import BrokerSimple from './pages/BrokerSimple';
import News from './pages/News';
import AboutTest from './pages/AboutTest';
import { useEffect } from 'react';
import Loader from './components/Loader';
import { useState } from 'react';

function App() {


  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="aboutus" element={<About />} />
        {/* <Route path="aboutus" element={<AboutTest />} /> */}
        <Route path="careers" element={<Career />} />
        <Route path="register" element={<BrokerSimple />} />
        <Route path="newsroom" element={<News />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App