import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductInfo() {
    const [product, setProduct] = useState();
    const { id } = useParams();
    axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    return (
        <div className='mt-5'>
            <h1>{product.title}</h1>
        </div>
    )
}

export default ProductInfo