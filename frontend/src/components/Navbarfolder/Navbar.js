import React from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import './Navbar.css'
const Navbarfile = () => {
    // const navigate = useNavigate();
    return (
        <>
            <div className='nav-bar1 bg-[#6d65ef] h-[35px] text-white flex justify-center items-center relative w-full' >AI voice call</div>   
            <div className='nav-bar2 bg-[#ebebe8] h-[75px] border-b-2 border-white text-stone-600 flex justify-between items-center relative w-full p-2 gap-4	' >
                <div className="logo"> <span className='text-2xl text-black'>Our AI</span></div>
                <li className=' flex justify-around items-center gap-5 '>
                    <ul> <Link className='flex justify-around items-center no-underline ht-10 w-20 text-lg font-body text-[#93999a]  hover:text-black hover:rounded-full hover:bg-white' to="/Home">Home</Link> </ul>
                    <ul> <Link className='flex justify-around items-center  no-underline ht-10 w-20 text-lg font-body group-hover:underline text-[#93999a] hover:text-black hover:rounded-full hover:bg-white' to="/Contact">Contact</Link> </ul>
                    <ul> <Link className='flex justify-around items-center  no-underline ht-10 w-20 text-lg font-body group-hover:underline text-[#93999a] hover:text-black hover:rounded-full hover:bg-white' to="/About">About us</Link> </ul>
                    <ul> <a href="/pages/login"> <button  className='flex justify-around items-center text-white w-24 h-12 text-lg border-2 rounded-lg border-[#6d65ef] bg-[#6d65ef] hover:bg-violet-400 hover:border-violet-400'>Login</button> </a></ul>
                </li>     {/*onClick={()=> navigate('/pages/Login')} */}

            </div>   

        </>
    )
}
export default Navbarfile
