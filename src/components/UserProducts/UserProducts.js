import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getTokens, getUser } from '../../services/LocalStorage'
import NavBar from '../Navbar/Navbar'
import EmptyProducts from '../EmpyProducts/EmptyProducts'
import './UserProducts.css'
import { useNavigate } from 'react-router-dom'
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
                    {userProducts.map((products => (
                        <div key={products.product_id} className='col-4 card '>
                            <img className='card-img-top product-img' src={products.new_name} alt={products.title} />
                            <div className='card-body'>
                                <h5 className='card-title'>{products.title}</h5>
                                <h6 className='card-text'>{products.category}</h6>
                                <h6 className='card-text'>{products.time}</h6>
                                <h6 className='card-text'>{products.initial_price}</h6>
                                <button className='btn btn-danger' onClick={() => DeleteProduct(products.product_id)}>Delete</button>

                            </div>
                        </div>
                    )))}
                </div>
            </div>}
        </div>
    )
}
