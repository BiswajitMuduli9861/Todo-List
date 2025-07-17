import { useState } from 'react'
import './App.css'
import Signup from './components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/todolist" element={<TodoList/>} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
