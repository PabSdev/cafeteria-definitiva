import React, { useState, useEffect } from 'react'

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    // Manejar la visibilidad del botón al hacer scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Función para scroll al inicio
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-12 right-12 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 focus:outline-none"
                >
                    ↑
                </button>
            )}
        </div>
    )
}

export default ScrollToTopButton
