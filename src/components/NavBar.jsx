import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleLogin = () => {
        navigate('/login')
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="flex justify-between items-center font-poppins p-5 px-[10%] relative bg-transparent">
            <h2 className="text-xl text-[#f39c12]">Cafeteria Loli</h2>
            <nav className="flex-grow flex justify-center">
                <ul
                    className={`list-none flex gap-4 m-0 p-0 ${
                        isMenuOpen ? 'flex-col' : 'hidden'
                    } sm:flex sm:flex-row sm:gap-6 sm:justify-center sm:items-center`}
                >
                    <li className="inline-block p-2 m-4">
                        <a
                            href="#Inicio"
                            className="text-[#2c3e50] font-medium hover:text-[#ecf0f1] hover:bg-[#f39c12] hover:rounded-md hover:px-2 hover:py-1 transition-transform duration-300"
                        >
                            Inicio
                        </a>
                    </li>
                    <li className="inline-block p-2 m-4">
                        <a
                            href="#Menu"
                            className="text-[#2c3e50] font-medium hover:text-[#ecf0f1] hover:bg-[#f39c12] hover:rounded-md hover:px-2 hover:py-1 transition-transform duration-300"
                        >
                            Menu
                        </a>
                    </li>
                    <li className="inline-block p-2 m-4">
                        <a
                            href="#Sobre Nosotros"
                            className="text-[#2c3e50] font-medium hover:text-[#ecf0f1] hover:bg-[#f39c12] hover:rounded-md hover:px-2 hover:py-1 transition-transform duration-300"
                        >
                            Sobre Nosotros
                        </a>
                    </li>
                    <li className="inline-block p-2 m-4">
                        <a
                            href="#Contacto"
                            className="text-[#2c3e50] font-medium hover:text-[#ecf0f1] hover:bg-[#f39c12] hover:rounded-md hover:px-2 hover:py-1 transition-transform duration-300"
                        >
                            Contacto
                        </a>
                    </li>
                </ul>
            </nav>
            <button
                onClick={handleLogin}
                className="absolute right-[10%] bg-[#f39c12] text-white border-none p-2 px-4 cursor-pointer rounded-md text-lg transition-bg-color duration-300 hover:bg-[#e67e22]"
            >
                Login / Register
            </button>

            {/* Botón hamburguesa para móvil */}
            <button
                className="sm:hidden text-[#f39c12] focus:outline-none"
                onClick={toggleMenu}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
            </button>
        </header>
    )
}

export default NavBar
