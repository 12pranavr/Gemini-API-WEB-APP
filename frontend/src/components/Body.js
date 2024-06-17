import React from 'react'
import './Body.css'
function Body() {
    return (
        <>
            <div className="main flex justify-around items-center h-[100%] bg-[#ebebe8] w-full max-[1120px]:flex max-[1120px]:flex-col">
                <div className="left  flex flex-col justify-center items-center bg-[#ebebe8] h-[60%] w-[50%] p-5 m-5">
                    <div className="sec1 text-[60px] ml-8"><h1 >Build Test & scale AI Phone calls </h1></div>
                    <div className="sec2 text-left ml-8">Bland is the infrastructure for building AI phone calling applications at scale</div>
                    <div className="sec3 ml-8 flex justify-around items-center gap-20 m-8 w-[100%]">
                        <button className='flex justify-around items-center text-white w-[35%] h-14 text-[1.5vw] border-2 rounded-lg border-[#6d65ef] bg-[#6d65ef] hover:bg-violet-400 hover:border-violet-400'>Get Started for free</button>
                        <button className='flex justify-around items-center text-white w-[35%] h-14 text-[1.5vw] border-2 rounded-lg border-[#6d65ef] bg-[#6d65ef] hover:bg-violet-400 hover:border-violet-400'>Talk to sales</button>
                    </div>
                </div>


                <div className="right w-[50%] h-[60%] rounded-xl bg-white flex justify-center items-center flex-col p-5 m-8 overflow-hidden ">
                    <div className="content">
                        <h1 className='text-[3.5vw]'>Recieve a Phone call from AI</h1>
                    </div>
                    <div className="form w-[90%] ">
                        <form action="" className='my-2 py-2 '>
                            <div className="name bg-[#f3f3f1] my-5 h-24 rounded-2xl flex items-start flex-col px-6">
                                <h2 className='text-[2vw]'>What's your Name?</h2>
                                <input type="tel" placeholder='Name' className='w-60 h-10 my-2 rounded-xl bg-[#f3f3f1] outline-none' />
                            </div>


                            <div className="name bg-[#f3f3f1] my-5 h-24 rounded-2xl flex items-start flex-col px-6">
                                <h2 className='text-[2vw]'>What's your phone number?</h2>
                                <input type="tel" placeholder='123-456-789-0' className='w-60 h-10 my-2 rounded-xl bg-[#f3f3f1] outline-none' />
                            </div>

                            <div className="name bg-[#f3f3f1] my-5 h-24 rounded-2xl flex items-start flex-col px-6">
                                <h2 className='text-[2vw]'>Where do you work?</h2>
                                <input type="text" placeholder='Ai' className='w-60 h-10 my-2 rounded-xl bg-[#f3f3f1] outline-none' />
                            </div>

                            <div className="">
                                <input type="submit" className='bg-indigo-500 text-white w-[100%] h-14 rounded-xl text-[2vw] text-left px-8 hover:bg-violet-400' value='Talk to AI' />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Body