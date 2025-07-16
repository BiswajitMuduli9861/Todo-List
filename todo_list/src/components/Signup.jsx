import React, { act, useReducer, useState } from 'react';
import axios from 'axios';
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [signup, setSignup] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [submitted, setSubmitted] = useState(false)
    // console.log(submitted)
    const [checkEmail, setCheckEmail] = useState(false);
    const [matchPassword, setMatchPassword] = useState(false);
    


    const handleChange = (e) =>{
        const { name, value } = e.target;
        setSignup((prev)=>({...prev, [name]:value}))
        
    }




    const handleSubmit = async(e) => {
        e.preventDefault();
        setSubmitted(true);
        if(signup.fullName.trim().length === 0 || signup.email.trim().length === 0 || signup.password.trim().length === 0 || signup.confirmPassword.trim().length === 0){
            return;
        }
        if(signup.password !== signup.confirmPassword){
            setMatchPassword(true);
            return;
        }


        try {

            const res =await axios.post('http://localhost:5000/av1/signup',signup,)
            console.log(res);
            if(res.status === 201){
                console.log('User created successfully');
                setSignup({
                    fullName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                })
                setSubmitted(false)
                setCheckEmail(false)
                setMatchPassword(false);
                toast.success('User created successfully', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setTimeout(() => {
                    
                    navigate('/login');
                }, 4000);
            }
        
            
        } catch (error) {
            if (error.response && error.response.status === 409) {
            // console.log("Email already exists");
            setCheckEmail(true);
            }
            console.log(error)
        }
       
        
        
    
    }

    const reducer = (state,action) =>{
        // console.log(state.passwordType)
       switch(action.type){
        case "togglePassword":
            return{
                ...state,   
                passwordType: state.passwordType === 'password'? 'text' : 'password'  
            }
        case "toggleConfirmPassword" :
            return{
                ...state,
                confirmPasswordType : state.confirmPasswordType === 'password' ? 'text' : 'password'
            }

            default:
            return state;
       }
    }
const initialState = {
    passwordType:"password",
    confirmPasswordType:"password"
}
    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log(state)
    

    


    return (
        <div className="h-screen">

       
        <div className="h-full flex justify-center items-center bg-[#101828]">
            
             <ToastContainer/>
            <form className="flex flex-col gap-2.5 bg-[#1E2939] p-8 w-[450px] rounded-2xl font-sans shadow" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label className="text-gray-100 font-semibold">Name</label>
                </div>
                <div className="bg-[#364153] flex items-center border border-gray-200 rounded-xl h-12 pl-2.5 transition-colors focus-within:border-blue-600" style={submitted && signup.fullName.trim().length === 0 ? {border: '1px solid red'} : {}}>
                    <svg height={60} viewBox="0 -9 32 32" width={40} xmlns="http://www.w3.org/2000/svg">
                        <g id="Layer_3" data-name="Layer 3">
                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                        </g>
                    </svg>
                    <input
                        type="text"
                        className="ml-[-11px] rounded-xl border-none w-11/12 h-full focus:outline-none font-sans placeholder:font-sans placeholder:text-gray-400 text-white"
                        placeholder="Enter your Name"
                        autoComplete='off'
                        name="fullName"
                        value={signup.fullName}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-100 font-semibold">Email</label>
                </div>
                <div className="bg-[#364153] flex items-center border border-gray-200 rounded-xl h-12 pl-2.5 transition-colors focus-within:border-blue-600" style={submitted && signup.email.trim().length === 0 ? {border: '1px solid red'} : {}}>
                    <svg height={20} viewBox="0 0 32 32" width={20} xmlns="http://www.w3.org/2000/svg">
                        <g id="Layer_3" data-name="Layer 3">
                            <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
                        </g>
                    </svg>
                    <input
                        type="email"
                        className="ml-2.5 rounded-xl border-none w-11/12 h-full focus:outline-none font-sans placeholder:font-sans placeholder:text-gray-400 text-white"
                        placeholder="Enter your Email"
                        autoComplete='off'
                        name="email"
                        value={signup.email}
                        onChange={handleChange}
                    />
                </div>
                {
                   checkEmail ? <p className='text-amber-500 text-sm'>Email already exists</p> : "" //or checkEmail && <p className='text-red-500 text-sm'>Email already exists</p> 
                }
                <div className="flex flex-col">
                    <label className="text-gray-100 font-semibold">Password</label>
                </div>
                <div className="bg-[#364153] flex items-center border border-gray-200 rounded-xl h-12 pl-2.5 transition-colors focus-within:border-blue-600" style={submitted && signup.password.trim().length === 0 ? {border: '1px solid red'} : {}}>
                    <svg height={20} viewBox="-64 0 512 512" width={20} xmlns="http://www.w3.org/2000/svg">
                        <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
                        <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
                    </svg>
                    <input
                        type={state.passwordType}
                        className="ml-2.5 rounded-xl border-none w-11/12 h-full focus:outline-none font-sans placeholder:font-sans placeholder:text-gray-400 text-white"
                        placeholder="Enter your Password"
                        autoComplete='off'
                        name="password"
                        value={signup.password}
                        onChange={handleChange}
                    />
                    
                    <span className='me-4 cursor-pointer' onClick={()=>{dispatch({type:"togglePassword"})}}>{state.passwordType === 'password' ? <VscEyeClosed /> : <VscEye/>}</span>
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-100 font-semibold">Confirm Password</label>
                </div>
                <div className="bg-[#364153] flex items-center border border-gray-200 rounded-xl h-12 pl-2.5 transition-colors focus-within:border-blue-600" style={submitted && signup.confirmPassword.trim().length === 0 ? {border: '1px solid red'} : {}}>
                    <svg height={20} viewBox="-64 0 512 512" width={20} xmlns="http://www.w3.org/2000/svg">
                        <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
                        <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
                    </svg>
                    <input
                        type={state.confirmPasswordType}
                        className="ml-2.5 rounded-xl border-none w-11/12 h-full focus:outline-none font-sans placeholder:font-sans placeholder:text-gray-400 text-white"
                        placeholder="Enter your Password"
                        autoComplete='off'
                        name="confirmPassword"
                        value={signup.confirmPassword}
                        onChange={handleChange}
                    />
                    <span className='me-4 cursor-pointer' onClick={()=>dispatch({type:"toggleConfirmPassword"})}>{state.confirmPasswordType === 'password' ? <VscEyeClosed /> : <VscEye/>}</span>
                </div>
                {
                    matchPassword ? <p className='text-red-500 text-sm'>Password not Match</p> : ""
                }
                <button
                    type="submit"
                    className="my-5 bg-blue-600 border-none text-white text-base font-medium rounded-xl h-12 w-full cursor-pointer transition-colors duration-200 hover:bg-blue-700"

                >
                    Sign Up
                </button>
                <p className="text-center text-gray-100 text-sm my-1.5">
                    Already have a account?
                    <Link to="/login">
                    <span className="text-blue-600 font-medium ml-1 cursor-pointer text-sm" >login</span>
                    </Link>
                </p>
               
            </form>
        </div>
         </div>
    );
};

export default Signup;
