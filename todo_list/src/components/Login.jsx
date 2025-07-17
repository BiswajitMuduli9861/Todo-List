import React, { useReducer, useState } from 'react';
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import {  Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Login = ({Login}) => {

      const [login, setLogin] = useState({
        email:"",
        password:"",
    })
    const [isSubmmit, setIsSubmmited] = useState(false)
    const [credential ,setCredential] = useState(false)
    const navigate = useNavigate();
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setLogin((prev)=>({...prev, [name]:value}))
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        setIsSubmmited(true)
        if(login.email.trim().length === 0 || login.password.trim().length === 0){
            setCredential(false)
            return;
        }

        try {
            const res = await axios.post("http://localhost:5000/av1/login",login,{withCredentials: true});
            // console.log(res.statusText)
            console.log(res)
            setIsSubmmited(false)
           
                if(res.statusText === "OK"){

                    setLogin({
                        email:"",
                        password:""
                })
                setCredential(false)
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("Email-id", res.data.UserEmail);
                localStorage.setItem("userId", res.data.UserId);
                Login();
                toast.success("Login Successfully", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setTimeout(() => {
                    navigate('/')
                    
                }, 4000);

                }

            
        } catch (error) {
            if(error.response && error.response.status === 401){
                setCredential(true)
            }
            console.log(error)
        }

        
    }

    const reducer = (state,action) =>{
            if(action.type === 'togglePassword'){
                return{
                    passwordType: state.passwordType === 'password' ? 'text' : 'password'
                }
            }
            return state;
    }


    const initialState ={
        passwordType: 'password'
    }
   const [state, dispatch] = useReducer(reducer,initialState)

    
    return (
        <div className="h-screen">
            <div className="w-full h-full bg-[#212121] flex justify-center items-start ">
                <ToastContainer/>
            
        <div className="w-[450px] h-3/6 mt-45 relative rounded overflow-hidden text-white shadow-[1.5px_1.5px_3px_#0e0e0e,-1.5px_-1.5px_3px_rgba(95,94,94,0.25),inset_0_0_0_#0e0e0e,inset_0_-0_0_#5f5e5e]">
            <div className="flex w-[200%] relative transition-transform duration-300 ease-out peer-checked:-translate-x-1/2">
                <form className="flex flex-col justify-center items-center gap-8 py-6 px-12 w-1/2" onSubmit={handleSubmit}>
                    <span className="text-center font-bold text-2xl">Login</span>
                    {
                    credential ?  <span className='text-center text-amber-500 text-2xl '>Invalid Credentail</span> : <span></span> 
                }
                    <div className="w-full relative overflow-hidden" style={isSubmmit && login.email.trim().length===0 ? {border:"1px solid red", borderRadius:"5px"} :{}}>
                        <input
                            type="email"
                             autoComplete='off'
                                name="email"
                                value={login.email}
                                onChange={handleChange}
                            className="w-full bg-transparent border-none outline-none text-white p-2 text-sm rounded transition-shadow duration-200 shadow-[0_0_0_#0e0e0e,0_0_0_rgba(95,94,94,0.25),inset_1.5px_1.5px_3px_#0e0e0e,inset_-1.5px_-1.5px_3px_#5f5e5e] focus:shadow-[0_0_0_#0e0e0e,0_0_0_rgba(95,94,94,0.25),inset_3px_3px_4px_#0e0e0e,inset_-3px_-3px_4px_#5f5e5e] peer"
                            placeholder='email'
                        />
                        <label className="absolute top-1/2 left-2 transition-transform duration-200 ease-in transform -translate-y-1/2 text-xs select-none pointer-events-none text-gray-400 peer-focus:-translate-x-[150%] peer-valid:-translate-x-[150%]">
                            Email
                        </label>
                    </div>
                   <div className="w-full relative overflow-hidden" style={isSubmmit && login.password.trim().length===0 ? {border:"1px solid red",borderRadius:"5px"} :{}}>
  <input
    type={state.passwordType}
    autoComplete='off'
    name="password"
    value={login.password}
    onChange={handleChange}
    className="w-full bg-transparent border-none outline-none text-white p-2 text-sm rounded transition-shadow duration-200 shadow-[0_0_0_#0e0e0e,0_0_0_rgba(95,94,94,0.25),inset_1.5px_1.5px_3px_#0e0e0e,inset_-1.5px_-1.5px_3px_#5f5e5e] focus:shadow-[0_0_0_#0e0e0e,0_0_0_rgba(95,94,94,0.25),inset_3px_3px_4px_#0e0e0e,inset_-3px_-3px_4px_#5f5e5e] peer pr-10"
    placeholder="Password"
  />

  <label className="absolute top-1/2 left-2 transition-transform duration-200 ease-in transform -translate-y-1/2 text-xs select-none pointer-events-none text-gray-400 peer-focus:-translate-x-[150%] peer-valid:-translate-x-[150%]">
    Password
  </label>

  <span
    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
    onClick={() => dispatch({ type: "togglePassword" })}
  >
    {state.passwordType === 'password' ? <VscEyeClosed /> : <VscEye />}
  </span>
</div>

                    <button
                        type="submit"
                        className="w-full bg-transparent border-none outline-none text-white p-2 text-sm rounded transition-shadow duration-100 shadow-[1.5px_1.5px_3px_#0e0e0e,-1.5px_-1.5px_3px_rgba(95,94,94,0.25),inset_0_0_0_#0e0e0e,inset_0_-0_0_#5f5e5e] active:shadow-[0_0_0_#0e0e0e,0_0_0_rgba(95,94,94,0.25),inset_3px_3px_4px_#0e0e0e,inset_-3px_-3px_4px_#5f5e5e]"
                    >
                        Login
                    </button>
                    <span className="text-xs">
                        Don't have an account?{' '}
                        <label
                            htmlFor="register_toggle"
                            className="font-bold cursor-pointer"
                        >
                            <Link to="/signup">
                            Sign Up
                            </Link>
                        </label>
                    </span>
                </form>
                {/* Add your Sign Up form here if needed */}
            </div>
        </div>
        </div>
        </div>
    );
};

export default Login;
