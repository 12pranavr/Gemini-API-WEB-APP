import React from 'react';
import { Route ,Routes} from 'react-router-dom'

// import './App.css';
// import { Footerfile } from './components/Footerfolder/Footerfile';
// import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
// import Navbar from './components/Navbarfolder/Navbar';
import Body from './components/Body';
import Login from './pages/Login';
function App() {
  return (
    <>
        
          <Routes>
            
            <Route path='/' element={<Body />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/pages/login' element={<Login />} />


          </Routes>
       
        
        
      
    </>
  );
}

export default App;