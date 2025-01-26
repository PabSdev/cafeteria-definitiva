import React, { useState } from 'react'

export function Filter({ setFilters }) {
    const [minPrice, setMinPrice] = useState(0)

    const handleMinPriceChange = (event) => {
        const value = event.target.value
        setMinPrice(value)
        setFilters((prevState) => ({
            ...prevState,
            minPrice: value,
        }))
    }

    const handleChangeCategory = (event) => {
        const value = event.target.value
        setFilters((prevState) => ({
            ...prevState,
            category: value,
        }))
    }

    return (
        <section className="filters bg-white p-6 rounded-2xl shadow-lg mb-6 max-w-md mx-auto">
            {/* Título */}
            <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
                Filtros
            </h2>

            {/* Filtro de precio */}
            <div className="flex flex-col w-full mb-6">
                <label
                    htmlFor="price"
                    className="text-gray-600 font-semibold mb-2 text-center"
                >
                    Precio mínimo:{' '}
                    <span className="text-blue-500">€{minPrice}</span>
                </label>
                <input
                    type="range"
                    id="price"
                    min="0"
                    max="6"
                    value={minPrice}
                    className="w-full h-3 bg-gray-300 rounded-full appearance-none cursor-pointer accent-blue-500"
                    onChange={handleMinPriceChange}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>0€</span>
                    <span>6€</span>
                </div>
            </div>

            {/* Filtro de categoría */}
            <div className="flex flex-col w-full">
                <label
                    htmlFor="category"
                    className="text-gray-600 font-semibold mb-2 text-center"
                >
                    Categoría
                </label>
                <select
                    id="category"
                    className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleChangeCategory}
                >
                    <option value="all">Todas</option>
                    <option value="bebidas">Bebidas</option>
                    <option value="alimentos">Alimentos</option>
                    <option value="reposteria">Repostería</option>
                </select>
            </div>
        </section>
    )
}
