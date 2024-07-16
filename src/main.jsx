import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './home/Home.jsx'
import Register from './register/Register.jsx'
import Login from './Login/Login.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/register" element={<Register />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)