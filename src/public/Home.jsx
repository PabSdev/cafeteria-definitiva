import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton '
import image from '../assets/img/cafe.png'

const Home = () => {
    return (
        <div>
            {/* Navbar */}
            <NavBar />

            {/* Sección Inicio */}
            <section
                id="Inicio"
                className="flex justify-center items-center h-screen bg-[#2c3e50] text-[#ecf0f1] px-12"
            >
                <div className="flex justify-center items-center max-w-[1200px] w-full flex-col-reverse sm:flex-row">
                    <div className="max-w-[50%] text-center sm:text-left mb-5 sm:mb-0">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-[#f39c12]">
                            El mejor café de la ciudad
                        </h2>
                        <h3 className="text-xl sm:text-2xl mb-5 text-[#e67e22]">
                            La mejor cafetería de Madrid
                        </h3>
                        <p className="text-base sm:text-lg leading-relaxed mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Earum deleniti vitae alias perferendis
                            voluptates iure ducimus illum eius? At quasi
                            adipisci cum, obcaecati aspernatur aliquam ut non
                            temporibus odit consequuntur.
                        </p>
                        <button className="px-6 py-2 text-lg font-bold bg-[#f39c12] text-white rounded-lg hover:bg-[#e67e22]">
                            Pedir Ahora
                        </button>
                    </div>

                    <div className="max-w-[50%] flex justify-center items-center sm:block">
                        <img
                            src={image}
                            className="max-w-full h-auto rounded-lg hidden sm:block"
                            alt="Café"
                        />
                    </div>
                </div>
            </section>

            {/* Sección Menú */}
            <section
                id="Menu"
                className="flex justify-center items-center h-screen bg-[#ecf0f1] text-[#2c3e50] px-12"
            >
                <div className="flex justify-center items-center max-w-[1200px] w-full flex-col sm:flex-row">
                    <div className="text-center sm:text-left max-w-[50%]">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-[#e74c3c]">
                            ¡Aquí tienes el menú de nuestra cafetería!
                        </h2>
                        <h3 className="text-xl sm:text-2xl mb-5 text-[#f39c12]">
                            Si me encuentras, te deseo suerte :)
                        </h3>
                        <p className="text-base sm:text-lg mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Earum deleniti vitae alias perferendis
                            voluptates iure ducimus illum eius? At quasi
                            adipisci cum, obcaecati aspernatur aliquam ut non
                            temporibus odit consequuntur.
                        </p>
                        <div className="flex justify-center sm:justify-start mt-5">
                            <button className="px-6 py-2 text-lg font-bold bg-[#f39c12] text-white rounded-lg hover:bg-[#e67e22]">
                                Ver menú
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección Sobre Nosotros */}
            <section
                id="Sobre Nosotros"
                className="flex justify-center items-center h-screen bg-[#34495e] text-white px-12"
            >
                <div className="flex justify-center items-center max-w-[1200px] w-full">
                    <div className="text-center max-w-[50%]">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-[#f39c12]">
                            Nuestra Historia
                        </h2>
                        <h3 className="text-xl sm:text-2xl mb-5 text-[#bdc3c7]">
                            El comienzo de todo
                        </h3>
                        <p className="text-base sm:text-lg mb-5 text-[#bdc3c7]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Earum deleniti vitae alias perferendis
                            voluptates iure ducimus illum eius? At quasi
                            adipisci cum, obcaecati aspernatur aliquam ut non
                            temporibus odit consequuntur.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sección Contacto */}
            <section
                id="Contacto"
                className="flex flex-col items-center justify-center py-12 bg-[#ecf0f1] text-[#2c3e50]"
            >
                <div className="text-center max-w-[600px] mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-[#f39c12]">
                        Contáctanos
                    </h2>
                    <h3 className="text-xl sm:text-2xl font-medium mb-5 text-[#e67e22]">
                        Estamos aquí para ayudarte
                    </h3>
                    <p className="text-base sm:text-lg mb-8 text-[#34495e]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum deleniti vitae alias perferendis voluptates iure
                        ducimus illum eius? At quasi adipisci cum, obcaecati
                        aspernatur aliquam ut non temporibus odit consequuntur.
                    </p>
                </div>

                <form className="flex flex-col gap-4 w-full max-w-[600px] p-5 bg-white rounded-lg shadow-lg">
                    <input
                        type="text"
                        className="p-4 border border-[#bdc3c7] rounded-md text-lg text-[#2c3e50] mb-4 focus:border-[#f39c12] focus:outline-none"
                        placeholder="Tu nombre"
                        required
                    />
                    <input
                        type="email"
                        className="p-4 border border-[#bdc3c7] rounded-md text-lg text-[#2c3e50] mb-4 focus:border-[#f39c12] focus:outline-none"
                        placeholder="Tu correo electrónico"
                        required
                    />
                    <textarea
                        className="p-4 border border-[#bdc3c7] rounded-md text-lg text-[#2c3e50] mb-4 focus:border-[#f39c12] focus:outline-none h-40 resize-y"
                        placeholder="Tu mensaje"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="px-6 py-3 bg-[#f39c12] text-white font-bold rounded-md hover:bg-[#e67e22]"
                    >
                        Enviar
                    </button>
                </form>
            </section>

            {/* Footer y ScrollToTopButton */}
            <Footer />
            <ScrollToTopButton />
        </div>
    )
}

export default Home
