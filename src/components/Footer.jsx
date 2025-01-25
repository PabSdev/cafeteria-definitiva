import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs' // Cambié BsTwitterX por BsTwitter porque X no existe en react-icons

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-5 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-5 gap-5">
                <p className="text-sm md:text-base m-0">2024 Coffee Shop</p>
                <div className="flex gap-3">
                    <a
                        href="https://www.facebook.com"
                        className="text-white text-xl transition-transform duration-300 hover:text-blue-500 hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsFacebook />
                    </a>
                    <a
                        href="https://www.instagram.com"
                        className="text-white text-xl transition-transform duration-300 hover:text-pink-500 hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsInstagram />
                    </a>
                    <a
                        href="https://www.twitter.com"
                        className="text-white text-xl transition-transform duration-300 hover:text-blue-400 hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsTwitter />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
