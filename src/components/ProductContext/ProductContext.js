import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
export const ProductsContext = createContext();
export default function ProductContext({ children }) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getProducts = () => {
            axios.get('https://fakestoreapi.com/products')
                .then(res => {
                    setProducts(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        getProducts()
    }, [])
    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}
