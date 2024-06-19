import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext     } from '../../App';

const Navbarfile = () => {
    const {state,dispatch} = useContext(UserContext)

    const RenderMenu = () =>{
        if(state){
            return(
                <>
                    <li className='flex justify-around items-center gap-5'>
                    <ul>
                        <Link className='flex justify-around items-center no-underline ht-10 w-20 text-lg font-body text-[#3e5172] hover:text-black hover:rounded-full hover:bg-white hover:p-2' to="/">Home</Link>
                    </ul>
                    <ul>
                        <Link className='flex justify-around items-center no-underline ht-10 w-20 text-lg font-body group-hover:underline text-[#3e5172] hover:text-black hover:rounded-full hover:bg-white hover:p-2' to="/Contact">Contact</Link>
                    </ul>
                    <ul>
                        <Link className='flex justify-around items-center no-underline ht-10 w-24 text-lg font-body group-hover:underline text-[#3e5172] hover:text-black hover:rounded-full hover:bg-white hover:py-2 hover:px-1' to="/About">About us</Link>
                    </ul>
                   
                    <ul>
                        <Link to={'./pages/logout'} className='flex justify-around items-center text-white w-24 h-12 text-lg border-2 rounded-lg border-[#3e5172] bg-[#3e5172] hover:bg-[#9fb6c3] hover:border-[#9fb6c3] hover:text-black transition delay-100 duration-200 ease-linear'>
                            Logout
                        </Link>
                    </ul>

                    
                </li>
                </>
            )
        }
        else {
            return (
                <>
                    <li className='flex justify-around items-center gap-5'>
                    <ul>
                        <Link className='flex justify-around items-center no-underline ht-10 w-20 text-lg font-body text-[#3e5172] hover:text-black hover:rounded-full hover:bg-white hover:p-2' to="/">Home</Link>
                    </ul>
                    <ul>
                        <Link className='flex justify-around items-center no-underline ht-10 w-20 text-lg font-body group-hover:underline text-[#3e5172] hover:text-black hover:rounded-full hover:bg-white hover:p-2' to="/Contact">Contact</Link>
                    </ul>
                    <ul>
                        <Link className='flex justify-around items-center no-underline ht-10 w-24 text-lg font-body group-hover:underline text-[#3e5172] hover:text-black hover:rounded-full hover:bg-white hover:py-2 hover:px-1' to="/About">About us</Link>
                    </ul>
                    <ul>
                        <Link to={'./pages/login'} className='flex justify-around items-center text-white w-24 h-12 text-lg border-2 rounded-lg border-[#3e5172] bg-[#3e5172] hover:bg-[#9fb6c3] hover:border-[#9fb6c3] hover:text-black transition delay-100 duration-200 ease-linear'>
                           Login
                        </Link>
                    </ul>
                 

                    
                </li>
                </>
            )
        }

        
    }

    return (
        <>
            <div className='nav-bar1 bg-[#3e5172] h-[35px] text-[#f9b49b] flex justify-center items-center relative w-full'>AI voice call</div>
            <div className='nav-bar2 bg-[#f9e9de] h-[75px] text-stone-600 flex justify-between items-center relative w-full p-2 gap-4'>
                <div className="logo">
                    <span className='text-2xl text-black'>Our AI</span>
                </div>
                <RenderMenu/>
            </div>
        </>
    );
};

export default Navbarfile;
