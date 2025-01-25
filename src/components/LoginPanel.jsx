import React, { useState } from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase/firebase'

const auth = getAuth(app)

const LoginPanel = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password)
            alert('Login successful')
        } catch (error) {
            alert(error.message)
        }
    }

    const handleCheckboxChange = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="w-[400px] p-8 bg-[#654321] rounded-xl shadow-xl text-center">
            <form onSubmit={handleLogin}>
                <h1 className="text-2xl text-[#f5deb3] mb-6 font-serif">
                    Login
                </h1>

                <div className="relative mb-5 w-[90%] mx-auto">
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-[85%] p-2.5 pl-4 pr-12 border-2 border-[#f5deb3] rounded-3xl bg-opacity-10 text-[#f5deb3] focus:border-[#a67c52] outline-none"
                    />
                    <FaUser className="absolute right-10 top-1/2 transform -translate-y-1/2 text-[#f5deb3] opacity-80 text-xl" />
                </div>

                <div className="relative mb-5 w-[90%] mx-auto">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-[85%] p-2.5 pl-4 pr-12 border-2 border-[#f5deb3] rounded-3xl bg-opacity-10 text-[#f5deb3] focus:border-[#a67c52] outline-none"
                    />
                    <FaLock className="absolute right-10 top-1/2 transform -translate-y-1/2 text-[#f5deb3] opacity-80 text-xl" />
                </div>

                <div className="flex justify-between items-center text-[#f5deb3] text-sm mb-6 w-[90%] mx-auto">
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={showPassword}
                            onChange={handleCheckboxChange}
                            className="form-checkbox h-4 w-4 text-[#654321] border-2 border-[#f5deb3] rounded focus:ring-[#a67c52]"
                        />
                        <span>Mostrar contraseña</span>
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-[90%] py-2 bg-[#d7a76c] text-[#654321] font-bold rounded-3xl hover:bg-[#a67c52] transition-all mb-5 mx-auto"
                >
                    Iniciar sesión
                </button>

                <div className="text-sm text-[#f5deb3]">
                    ¿No tienes una cuenta?{' '}
                    <a
                        href="/Register"
                        className="text-[#d7a76c] font-bold hover:underline"
                    >
                        Regístrate
                    </a>{' '}
                    o{' '}
                    <a
                        href="/"
                        className="text-[#d7a76c] font-bold hover:underline"
                    >
                        Vuelve al inicio
                    </a>
                </div>
            </form>
        </div>
    )
}

export default LoginPanel
