import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Menu toggle state
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger Icon */}
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} size-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* Close Icon */}
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} size-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
              </button>
            </div>

            {/* Logo and main menu */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link to="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Dashboard</Link>
                  <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
                  <Link to="todolist" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">todolist</Link>
                  <Link to="/login" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Login</Link>
                </div>
              </div>
            </div>

        
            <div className="absolute inset-y-0 right-0 flex items-end pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 2xl:mb-0 xl:mb-0 md:mb-0 sm:mb-0 mb-3">
             

              {/* User menu */}
              <div className="relative ml-3">
                  <div className='bg-amber-500 w-10 h-10 rounded-full flex justify-center items-center' onClick={()=>{setProfileOpen(true)}}>

                   <h2 className='text-2xl'>B</h2>
                  </div>
                 
                  
               
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">todolist</a>
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">login</a>
            </div>
          </div>
        )}
      </nav>
    </div>


        {
          profileOpen &&(

                  <div className='w-[200px] h-[150px] me-6 bg-blue-600 z-10 block absolute end-[20px]'>
                    
                      <div className='bg-fuchsia-700 absolute end-0 w-7 h-7 flex justify-center rounded-full' onClick={()=>{setProfileOpen(false)}}>
                        <button className='text-1xl '><RxCross1 /></button>
                      </div>
                        <div className="flex flex-col justify-center bg-neutral-100 h-38">
                          <span>bmudu</span>
                          <span>Logout</span>
                          <span>Acoount Delete</span>
                        </div>
                    
                  
                  </div>
          )
        }

        </>
  );
};

export default Navbar;
