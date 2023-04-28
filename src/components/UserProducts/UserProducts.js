import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTokens, getuserId } from '../../services/LocalStorage'
import NavBar from '../Navbar/Navbar'

export default function UserProducts() {
    const [userProducts, setUserProducts] = useState([])
    const config = {
        headers: {
            token: getTokens()
        }
    }
    const { user_id } = useParams()
    const GetUserProducts = () => {
        axios.get(`http://localhost:3001/api/products/userproductsuser/${user_id}`, config)
            .then(res => {
                console.log(res.data.products)
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => (
        GetUserProducts()
    ), [])
    return (
        <div>
            <NavBar />
        </div>
    )
}
