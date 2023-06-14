import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getTokens, getUser } from '../../services/LocalStorage'
import NavBar from '../Navbar/Navbar'
import EmptyProducts from '../EmpyProducts/EmptyProducts'
import './UserProducts.css'
export default function UserProducts() {
    const [userProducts, setUserProducts] = useState([])
    const config = {
        headers: {
            token: getTokens()
        }
    }
    //get user products
    const GetUserProducts = () => {
        axios.get(`http://localhost:3001/api/products/productsuser/${getUser()}`, config)
            .then(res => {
                setUserProducts(res.data.products)
            })
            .catch(err => {
                console.log(err)
            })
    }
    //delete product
    const DeleteProduct = (product_id) => {
        axios.delete(`http://localhost:3001/api/products/product/${product_id}`, config, getUser())
            .then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    }
    useEffect(() => (
        GetUserProducts(),
        DeleteProduct()
    ), [])
    return (
        <div>
            <NavBar />
            {userProducts.length === 0 ? <EmptyProducts /> : <div className='container-fluid'>
                <div className='row'>
                    {userProducts.map((product => (
                        <div key={product.product_id} className='col-4 card '>
                            <img className='card-img-top product-img' src={`http://localhost:3001/${product.images[0].new_name}`} alt={product.title} />
                            <div className='card-body'>
                                <h5 className='card-title'>{product.title}</h5>
                                <h6 className='card-text'>{product.category}</h6>
                                <h6 className='card-text'>{product.time}</h6>
                                <h6 className='card-text'>{product.initial_price}</h6>
                                <button className='btn btn-danger' onClick={() => DeleteProduct(product.product_id)}>Delete</button>

                            </div>
                        </div>
                    )))}
                </div>
            </div>}
        </div>
    )
}
