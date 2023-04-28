import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTokens, getUser } from '../../services/LocalStorage'
import NavBar from '../Navbar/Navbar'

export default function UserProducts() {
    const [userProducts, setUserProducts] = useState([])
    const config = {
        headers: {
            token: getTokens()
        }
    }
    const GetUserProducts = () => {
        axios.get(`http://localhost:3001/api/products/productsuser/${getUser()}`, config)
            .then(res => {
                console.log(res.data)
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
