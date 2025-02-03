import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './public/Home'
import Login from './public/Login'
import Register from './public/Register'
import Productos from './public/Products'
import Dashboard from './private/dashboard'
import Carrito from './private/Carrito'

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/productos" element={<Productos />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/Carrito" element={<Carrito />}></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App
