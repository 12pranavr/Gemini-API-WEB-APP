import React from 'react'
// import './Body.css'
function Body() {
    return (
        <>
            <div className="main bg-hero-pattern bg-cover bg-top flex justify-around items-center h-[100%] bg-[#f9e9de] w-full max-[1120px]:flex max-[1120px]:flex-col">
                

                <div className="container w-[40%] h-[60%] rounded-xl flex justify-center items-center flex-col p-0.5 m-8 overflow-hidden ">
                    <div className="content">
                        <h1 className='text-[3vw] text-white'>Want A Call from AI? Fill!</h1>
                    </div>
                    <div className="form w-[90%] ">
                        <form action="" className='my-2 py-2 '>
                            <div className="name bg-[rgba(255,255,255,0.6)]  my-5 h-24 rounded-2xl flex items-start flex-col px-6">
                                <h2 className='text-[2vw]'>What's your Name?</h2>
                                <input type="tel" placeholder='Name' className='w-60 h-48 my-2 pl-1 text-[1.3vw] rounded-xl bg-transparent placeholder-black placeholder-opacity-60 outline-none' />
                            </div>


                            <div className="name bg-[rgba(255,255,255,0.6)] my-5 h-24 rounded-2xl flex items-start flex-col px-6">
                                <h2 className='text-[2vw]'>What's your phone number?</h2>
                                <input type="tel" placeholder='123-456-789-0' className='w-60 h-10 my-2 text-[1.3vw] rounded-xl bg-transparent placeholder-black placeholder-opacity-60 outline-none' />
                            </div>

                            <div className="name bg-[rgba(255,255,255,0.6)] my-5 h-24 rounded-2xl flex items-start flex-col px-6">
                                <h2 className='text-[2vw]'>Where do you work?</h2>
                                <input type="text" placeholder='Ai' className='w-60 h-10 my-2 pl-1 text-[1.3vw] rounded-xl bg-transparent placeholder-black placeholder-opacity-60 outline-none' />
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