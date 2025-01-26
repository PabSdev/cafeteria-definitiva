import React from 'react'
import { Filter } from './Filter'

export function Header() {
    return (
        <header className="bg-blue-500 text-white p-4">
            <Filter />
        </header>
    )
}
