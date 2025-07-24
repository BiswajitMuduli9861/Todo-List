import { useState,useEffect } from 'react'
import './App.css'
import Signup from './components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import TodoList from './components/TodoList'
import ProtectedRoute from './components/ProtectedRoute'
import PageNotFound from './components/PageNotFound'
import { Navigate } from 'react-router-dom'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
 


  useEffect(() => {
    const user = localStorage.getItem("userExist");
    if (user === "true") {
      setIsLoggedIn(true);
    }
    setTimeout(() => {
      localStorage.removeItem("userExist")
      localStorage.removeItem('token');
        localStorage.removeItem('Email-id')
        localStorage.removeItem('userId')
        Navigate('/login')
    }, 60 * 60 * 1000);
  }, []);

  const login = () => {
    localStorage.setItem("userExist", "true");
    setIsLoggedIn(true);
  };

  

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login Login={login}/>} />
        <Route path="/*" element={ <PageNotFound/>}/>
        <Route path="/todolist" element={<ProtectedRoute> <TodoList/> </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
