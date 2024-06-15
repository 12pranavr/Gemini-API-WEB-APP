import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
// import { Footerfile } from './components/Footerfolder/Footerfile';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbarfile from './components/Navbarfolder/Navbar';
import Body from './components/Body';
// import Login from './pages/Login';
function App() {
  return (
    <>
      <div className="main">
        <Navbarfile />
        <div className="container">
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            {/* <Route path='/pages/login' element={<Login />} /> */}



          </Routes>
        </div>
        <Body />
      </div>
    </>
  );
}

export default App;