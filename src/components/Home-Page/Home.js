import React from 'react'
import Header from '../Header/Header'
import Products from '../Products/Products'
import SearchForProduct from '../SearchForProduct/SearchForProduct'

export default function Home() {
    return (
        <div>
            <Header />
            <SearchForProduct />
            <Products />
        </div>
    )
}
