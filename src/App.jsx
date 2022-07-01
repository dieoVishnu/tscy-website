import React from 'react'
import Main from './pages/Main'
import {
  HashRouter,
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
import Loader from './components/Loader';

function App() {


  return (
    
    <HashRouter hashType="hashbang">
    <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="*" exact element={<Loader />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="aboutus" element={<About />} />
        {/* <Route path="careers" element={<AboutTest />} /> */}
        <Route path="careers" element={<Career />} />
        <Route path="register" element={<BrokerSimple />} />
        <Route path="newsroom" element={<News />} />
        <Route path='newsroom/newsdetails' element={<NewsDetails />} />
    </Routes>
    
  </HashRouter>
  )
}

export default App