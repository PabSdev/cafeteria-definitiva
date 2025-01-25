import Home from '../src/public/Home'
import Login from './public/Login'
import Register from './public/Register'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
