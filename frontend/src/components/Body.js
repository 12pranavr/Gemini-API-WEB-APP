import React, { Component } from 'react';
import Navbar from './Navbarfolder/Navbar';
import Footer from './Footer';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state={
            //1-logged in & 0-not loggedin
            auth : false,
        };
    }

    authHandler = () =>{
        this.setState({ auth: !this.state.auth })
    };

    render(props) {
        return (
            <>
                <Navbar login={this.authHandler} status={this.state.auth} />

                <div className="main bg-hero-pattern bg-cover bg-top flex justify-around items-center flex-col h-[100%] bg-[#f9e9de] w-full max-[1120px]:flex max-[1120px]:flex-col">
                
                <div className="heroText bg-blend-color font-medium	leading-10 text-[1.6vw] text-[#f9b49b] w-[90%] h-[60%] mt-14">
                    <p>Experience the future of communication with our AI-powered voice call service. Engage in natural conversations as our advanced AI assistant answers questions, completes tasks, and provides seamless interaction. Whether you're seeking information, managing appointments, or simply curious, our AI is here to enhance your experience with intuitive and intelligent responses</p>
                </div>

                <div className="container w-[40%] h-[60%] rounded-xl flex justify-center items-center flex-col p-0.5 m-8 overflow-hidden ">
                    <div className="content">
                        <h1 className='text-[3vw] text-white'>Want A Call from AI? Fill!</h1>
                    </div>
                    <div className="form w-[90%] ">
                        <form action="" className='my-2 py-2 '>
                            <div className="name glassmorphism  my-5 h-24 rounded-2xl flex items-start flex-col px-6 text-white">
                                <h2 className='text-[2vw]'>What's your Name?</h2>
                                <input type="tel" placeholder='Name' className='border-b-2 w-60 h-48 my-2 pl-1 text-[1.3vw] bg-transparent placeholder-white placeholder-opacity-60 outline-none' />
                            </div>


                            <div className="name glassmorphism my-5 h-24 rounded-2xl flex items-start flex-col px-6 text-white">
                                <h2 className='text-[2vw]'>What's your phone number?</h2>
                                <input type="tel" placeholder='123-456-789-0' className='border-b-2 w-60 h-10 my-2 text-[1.3vw] bg-transparent placeholder-white placeholder-opacity-60 outline-none' />
                            </div>

                            <div className="name glassmorphism my-5 h-24 rounded-2xl flex items-start flex-col px-6 text-white">
                                <h2 className='text-[2vw]'>Where do you work?</h2>
                                <input type="text" placeholder='Ai' className='border-b-2 w-60 h-10 my-2 pl-1 text-[1.3vw] bg-transparent placeholder-white placeholder-opacity-60 outline-none' />
                            </div>



                             

                                    <div>
                                    <input type="submit" className='bg-indigo-500 text-white w-[100%] h-14 rounded-xl text-[2vw] text-left px-8 hover:bg-violet-400' value='Talk to AI' />
                                  </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
            
        );
    }
}

export default Body;
