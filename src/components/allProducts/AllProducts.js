import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getTokens } from '../../services/LocalStorage'
export default function AllProducts() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
    }, [])
    const config = {
        headers: {
            token: getTokens()
        }
    }
    const getProducts = () => {
        axios.get('http://localhost:3001/api/products/products', config)
            .then(res => setProducts(res.data.products))
    }
    return (
        <div>
            <table class="table" style={{
                width: '1200px',
                height: '100%'
            }}>
                <thead>
                    <tr>
                        <th scope="col">Product name</th>
                        <th scope="col">Product initial price</th>
                        <th scope="col">Product category</th>
                        <th>Product for</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr>
                            <th>{product.title}</th>
                            <th>{product.initial_price}</th>
                            <th>{product.category}</th>
                            <th>{product.name}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
