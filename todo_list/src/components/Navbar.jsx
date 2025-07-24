import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
import { MdOutlineLogout } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineUserDelete } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useNavigate();

   const profile = localStorage.getItem('Email-id') ||'@'
   const show = localStorage.getItem('Email-id')
   const letter = profile.charAt(0).toLocaleUpperCase();
    const userId = localStorage.getItem('userId') 

   const logout = () =>{
       localStorage.removeItem('userExist');
        localStorage.removeItem('token');
        localStorage.removeItem('Email-id')
        localStorage.removeItem('userId')
        alert("Logout User")

                setTimeout(() => {
                    setProfileOpen(false)
                    navigate('/login');
                }, 1000);
   }

   const deleteAccount = async () => {
  try {
    await axios.delete(`https://todo-list-5jui.onrender.com/av1/user/delete/${userId}`);
    alert("Account deleted successfully");
    localStorage.removeItem('userExist');
        localStorage.removeItem('token');
        localStorage.removeItem('Email-id')
        setProfileOpen(false)
        navigate('/login');
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
};



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
                  <Link to="todolist" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">todolist</Link>
                  {
                    show ? <span></span> : <Link to="/login" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Login</Link>
                  }
                  
                </div>
              </div>
            </div>

        
            <div className="absolute inset-y-0 right-0 flex items-end pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 2xl:mb-0 xl:mb-0 md:mb-0 sm:mb-0 mb-3">
             

              {/* User menu */}
              {
                show ? <div className="relative ml-3">
                  <div className='bg-amber-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer' onClick={()=>{setProfileOpen(true)}}>

                   <h2 className='text-2xl'>{letter}</h2>
                  </div>
                 
                  
               
              </div> : <span></span>
              }
             
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <Link to="/" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</Link>
              <Link to="todolist" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">todolist</Link>
                 {
                    show ? <span></span> : <Link to="/login" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Login</Link>
                  }
            </div>
          </div>
        )}
      </nav>
    </div>


        {
          profileOpen &&(

                  <div className='w-[250px] h-[180px] me-6 bg-blue-600 z-10 block absolute end-[20px] rounded-2xl'>
                    
                      <div className=' absolute end-0 w-7 h-7 flex justify-center rounded-full me-2 mt-2 hover:bg-gray-50' onClick={()=>{setProfileOpen(false)}}>
                        <button className='text-1xl text-white  text cursor-pointer hover:text-black' ><RxCross1 /></button>
                      </div>
                        <div className="flex flex-col justify-center bg-black h-45 rounded-2xl">
                           <div className='flex m-1 cursor-pointer'>
                            <FaRegUser className='text-gray-50 mt-[5px] ms-1'/>
                            <span className='text-gray-50 font-medium ms-2'> {profile}</span>
                          </div>
                          <div className='flex m-1 cursor-pointer' onClick={logout}>
                            <MdOutlineLogout className='text-gray-50 mt-[5px] ms-1'/>
                            <span className='text-gray-50 font-medium ms-2'> Logout</span>
                          </div>
                          <div className='flex m-1 cursor-pointer' onClick={deleteAccount }>
                            <AiOutlineUserDelete className='text-gray-50 mt-[5px] ms-1'/>
                            <span className='text-gray-50 font-medium ms-2'> Accound Delete</span>
                          </div>
                  
                          
                          
                        </div>
                    
                  
                  </div>
          )
        }

        </>
  );
};

export default Navbar;
