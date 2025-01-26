import Home from '../src/public/Home'
import Login from './public/Login'
import Register from './public/Register'
import Productos from './public/Products'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Carrito" element={<Productos />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
