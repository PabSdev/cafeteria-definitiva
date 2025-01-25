import React, { useState } from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { app } from '../firebase'
import { useNavigate } from 'react-router-dom'

const auth = getAuth(app)
const db = getFirestore(app)

const RegisterPanel = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )
            const user = userCredential.user

            // Save additional user information to Firestore
            await setDoc(doc(db, 'users', user.uid), {
                name: name,
                email: email,
                phone: phone,
            })

            alert('Registration successful')
            navigate('/specific-page') // Redirect to the specific page
        } catch (error) {
            setError(error.message)
        }
    }

    const handleCheckboxChange = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="w-[400px] p-8 bg-[#654321] rounded-xl shadow-lg text-center">
            <form onSubmit={handleRegister}>
                <h1 className="text-2xl text-[#f5deb3] mb-5 font-serif">
                    Registro
                </h1>
                <div className="relative mb-5 w-[90%] mx-auto">
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-[85%] p-2.5 pl-4 pr-12 border-2 border-[#f5deb3] rounded-3xl bg-opacity-10 text-[#f5deb3] focus:border-[#a67c52] outline-none"
                    />
                    <FaUser className="absolute right-10 top-1/2 transform -translate-y-1/2 text-[#f5deb3] opacity-80 text-xl" />
                </div>
                <div className="relative mb-5 w-[90%] mx-auto">
                    <input
                        type="email"
                        placeholder="Correo Electronico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-[85%] p-2.5 pl-4 pr-12 border-2 border-[#f5deb3] rounded-3xl bg-opacity-10 text-[#f5deb3] focus:border-[#a67c52] outline-none"
                    />
                    <MdEmail className="absolute right-10 top-1/2 transform -translate-y-1/2 text-[#f5deb3] opacity-80 text-xl" />
                </div>
                <div className="relative mb-5 w-[90%] mx-auto">
                    <input
                        type="text"
                        placeholder="Número de Teléfono"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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

                <div className="flex items-center justify-center space-x-2 mb-4">
                    <input
                        type="checkbox"
                        checked={showPassword}
                        onChange={handleCheckboxChange}
                        className="form-checkbox h-4 w-4 bg-[#654321] text-[#654321] border-2 border-[#f5deb3] rounded focus:ring-[#a67c52]"
                    />
                    <label className="text-[#f5deb3]">Mostrar contraseña</label>
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                    type="submit"
                    className="w-[90%] py-2 bg-[#d7a76c] text-[#654321] font-bold rounded-3xl hover:bg-[#a67c52] transition-all mb-5 mx-auto"
                >
                    Registro
                </button>
                <div className="text-sm text-[#f5deb3]">
                    ¿Tienes cuenta?{' '}
                    <a
                        href="/Login"
                        className="text-[#d7a76c] font-bold hover:underline"
                    >
                        Inicia Sesión
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

export default RegisterPanel
