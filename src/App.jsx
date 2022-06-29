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
      <Route path="/" element={<Main />}>
        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />

      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App