import React, { useState } from 'react';
import Navbarfile from '../components/Navbarfolder/Navbar';
import { Link } from 'react-router-dom';






const DrawerComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };


  const Menu = () => {
   return (
   <div className="text-left ">
         {/* Drawer init and show */}
         <Link
           className="text-black bg-pink-200 hover:bg-pink-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-[pink] dark:hover:bg-pink-300 focus:outline-none dark:focus:ring-blue-800"
           type="Link"
           onClick={toggleDrawer}
         >
           Menu 
         </Link>
   
         {/* Drawer component */}
         <div
           id="drawer-navigation"
           className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${
             isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
           } bg-[#f9e9de] `}
           tabIndex="-1"
           aria-labelledby="drawer-navigation-label"
         >
           <h5
             id="drawer-navigation-label"
             className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
           >
             Menu
           </h5>
           <Link
             type="Link"
             onClick={toggleDrawer}
             aria-controls="drawer-navigation"
             className="text-gray-400 bg-transparent hover:bg-[#f9b49b] hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
           >
             <svg
               aria-hidden="true"
               className="w-5 h-5"
               fill="currentColor"
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path
                 fillRule="evenodd"
                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                 clipRule="evenodd"
               />
             </svg>
             <span className="sr-only">Close menu</span>
           </Link>
           <div className="py-4 overflow-y-auto">
             <ul className="space-y-2 font-medium">
               <li>
                 <a
                   href="#"
                   className="flex items-center p-2 rounded-lg text-gray-400 hover:bg-[#f9b49b] hover:text-black group"
                 >
                   <svg
                     className="w-5 h-5 text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor"
                     viewBox="0 0 22 21"
                   >
                     <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                     <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                   </svg>
                   <span className="ms-3">Dashboard</span>
                 </a>
               </li>
               <li>
                 <a
                   href="#"
                   className="flex items-center p-2 text-gray-400 hover:bg-[#f9b49b] hover:text-black group"
                 >
                   <svg
                     className="flex-shrink-0 w-5 h-5 text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor"
                     viewBox="0 0 18 18"
                   >
                     <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                   </svg>
                   <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
                   
                 </a>
               </li>
               <li>
                 <a
                   href="#"
                   className="flex items-center p-2 text-gray-400 hover:bg-[#f9b49b] hover:text-black group"
                 >
                   <svg
                     className="flex-shrink-0 w-5 h-5 text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor"
                     viewBox="0 0 20 20"
                   >
                     <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                   </svg>
                   <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                   
                 </a>
               </li>
               <li>
                 <a
                   href="#"
                   className="flex items-center p-2 text-gray-400 hover:bg-[#f9b49b] hover:text-black group"
                 >
                   <svg
                     className="flex-shrink-0 w-5 h-5 text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor"
                     viewBox="0 0 20 20"
                   >
                     <path d="M10 0a2 2 0 0 0-2 2v6.586a1 1 0 0 1-.293.707L5.414 11.586a2 2 0 1 0 2.828 2.828l.293-.293V18a2 2 0 0 0 4 0v-3.879l.293.293a2 2 0 1 0 2.828-2.828l-2.293-2.293a1 1 0 0 1-.293-.707V2a2 2 0 0 0-2-2Z" />
                   </svg>
                   <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                 </a>
               </li>
               <li>
                 <a
                   href="#"
                   className="flex items-center p-2 text-gray-400 hover:bg-[#f9b49b] hover:text-black group"
                 >
                   <svg
                     className="flex-shrink-0 w-5 h-5 text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor"
                     viewBox="0 0 18 20"
                   >
                     <path d="M14 6h-4V4a2 2 0 0 1 4 0v2Zm4 3.5V17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V9.5A1.5 1.5 0 0 1 1.5 8H4V4a4 4 0 0 1 8 0v4h2.5a1.5 1.5 0 0 1 1.5 1.5ZM9 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-4 1a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm10 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z" />
                   </svg>
                   <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                 </a>
               </li>
               <li>
                 <a
                   href="#"
                   className="flex items-center p-2 text-gray-400 hover:bg-[#f9b49b] hover:text-black group"
                 >
                   <svg
                     className="flex-shrink-0 w-5 h-5 text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor"
                     viewBox="0 0 20 20"
                   >
                     <path d="m17.414 6.586-4-4A2 2 0 0 0 12 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-.586-1.414ZM12 3.414 16.586 8H12V3.414ZM16 18H4V4h6v5a1 1 0 0 0 1 1h5v8Z" />
                   </svg>
                   <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                 </a>
               </li>
               <li>
                 <a
                   href="#"
                   className="flex items-center p-2 text-gray-400 hover:bg-[#f9b49b] hover:text-black group"
                 >
                   <svg
                     className="flex-shrink-0 w-5 h-5 text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor"
                     viewBox="0 0 20 20"
                   >
                     <path d="M17 16a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1a1 1 0 0 1 1-1h14Zm-7-6a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM10 0a5 5 0 0 1 5 5c0 2.694-1.536 4.937-4.001 4.993L11 10H9a5 5 0 0 1-5-5A5 5 0 0 1 10 0Z" />
                   </svg>
                   <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                 </a>
               </li>
             </ul>
           </div>
         </div>
       </div>
       )
   }
   
   
   




  return (
   <>
   
     <nav className='bg-sky-100 h-8'>
          <Menu />
     </nav>
     <div className="container h-80 w-[30rem] my-5 border-2 border-cyan-500 fixed left-[10%]">
           <div className="text flex flex-col m-8 ">
            <h3 className='text-2xl'>
               Send a Phone call
            </h3>
            <p>Use our Ai to get a call</p>
            </div>
            <Link className='flex justify-center items-center absolute bottom-[10%] right-[10%] w-36 h-12 text-lg text-white border-2 rounded-lg border-[#3e5172] bg-[#3e5172] hover:bg-[#9fb6c3] hover:border-[#9fb6c3] hover:text-black transition delay-50 duration-100 ease-linear'> Get started</Link>
     </div>

    </>
  );
};

export default DrawerComponent;
