import React from 'react'
import Navbarfile from '../components/Navbarfolder/Navbar';
import Footer from '../components/Footer';

function About() {

  return (
    <>
    <Navbarfile/>
    <div>About</div>
    <div className="heroText bg-blend-color font-medium	leading-10 text-[1.6vw] text-[#f9b49b] w-[90%] h-[60%] mt-14">
                    <p>Experience the future of communication with our AI-powered voice call service. Engage in natural conversations as our advanced AI assistant answers questions, completes tasks, and provides seamless interaction. Whether you're seeking information, managing appointments, or simply curious, our AI is here to enhance your experience with intuitive and intelligent responses</p>
                </div>
    <Footer/>
    </>
  )
}
export default About