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
import BrokerSimple from './pages/BrokerSimple';
import News from './pages/News';
import AboutTest from './pages/AboutTest';
import NewsDetails from './components/Detailpage/NewsDetails';

function App() {


  return (
    
    <BrowserRouter>
    <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="aboutus" element={<About />} />
        {/* <Route path="careers" element={<AboutTest />} /> */}
        <Route path="careers" element={<Career />} />
        <Route path="register" element={<BrokerSimple />} />
        <Route path="newsroom" element={<News />} />
        <Route path='newsroom/newsdetails' element={<NewsDetails />} />
    </Routes>
    
  </BrowserRouter>
  )
}

export default App