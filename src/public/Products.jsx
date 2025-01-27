import React, { useState } from 'react'
import { products } from '../mocks/products.json'
import { BiSolidCartAdd } from 'react-icons/bi'
import { Filter } from '../components/Filter'

const CarritoDeLaCompra = () => {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0,
    })

    const filterProducts = (products) => {
        return products.filter((product) => {
            return (
                product.price >= filters.minPrice &&
                (filters.category === 'all' ||
                    product.category === filters.category)
            )
        })
    }

    const filteredProducts = filterProducts(products)

    return (
        <>
            <Filter setFilters={setFilters} />
            <div className="bg-gray-100 min-h-screen p-6">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Carrito de la compra
                </h1>

                <main className="max-w-5xl mx-auto">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
                            <li
                                key={product.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold text-gray-800">
                                        {product.title}
                                    </h2>
                                    <p className="text-gray-600 mt-2">
                                        {product.description}
                                    </p>
                                    <div className="flex justify-between items-center mt-4">
                                        <span className="text-xl font-bold text-gray-800">
                                            ${product.price}
                                        </span>
                                        <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                                            <BiSolidCartAdd size={24} />
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </main>
            </div>
        </>
    )
}

export default CarritoDeLaCompra
