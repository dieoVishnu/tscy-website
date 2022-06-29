import React from 'react'
import Main from './pages/Main'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="aboutus" element={<About />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App