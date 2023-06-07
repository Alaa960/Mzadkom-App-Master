import React, { useState } from 'react'
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import axios from 'axios';
import './AddProduct.css'
import { getTokens } from '../../services/LocalStorage'
import NavBar from '../Navbar/Navbar';
export default function AddProduct() {
    const [productName, setProductName] = useState('')
    const [productInitialPrice, setProductInitialPrice] = useState()
    const [productTime, setProductTime] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productPhoto, setProductPhoto] = useState([])
    const config = {
        headers: {
            token: getTokens(),
            'Content-Type': 'multipart/form-data'
        },
    };
    const body = new FormData();
    for (let i = 0; i < productPhoto.length; i++) {
        body.append('photo', productPhoto[i])
    }
    body.append('title', productName)
    body.append('category', productCategory)
    body.append('initial_price', productInitialPrice)
    body.append('time', productTime)
    body.append('description', productDescription)
    const AddProducts = () => {
        axios.post('http://localhost:3001/api/products/add', body, config)
            .then(res => {
                console.log(res.data)

            })
    }
    return (
        <div className='body'>
            <NavBar />
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <form className='form-add-product ' onSubmit={e => {
                            e.preventDefault()
                        }}>
                            <div className='row'>
                                <div className='col-4'>
                                    <div className='mb-3'>
                                        <label className='form-label'>
                                            Product Name
                                        </label>
                                        <input
                                            value={productName}
                                            onChange={e => setProductName(e.target.value)}
                                            type='text'
                                            className='form-control'
                                            placeholder='Product Name' />
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='mb-3'>
                                        <label className='form-label'>
                                            Product Initial Price
                                        </label>
                                        <input
                                            value={productInitialPrice}
                                            onChange={e => setProductInitialPrice(e.target.value)}
                                            type='number'
                                            className='form-control'
                                            placeholder='Product Initial Price' />
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='mb-3'>
                                        <label className='form-label'>
                                            Product Category
                                        </label>
                                        <select value={productCategory} onChange={e => setProductCategory(e.target.value)} class="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu...</option>
                                            <option value='Car'>Car</option>
                                            <option value='Furniture'>Furniture</option>
                                            <option value='Antiques'>Antiques</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>

                                <div className='col-6'>
                                    <div className='mb-3'>
                                        <label className='form-label'>
                                            Time
                                        </label>
                                        <input
                                            value={productTime}
                                            onChange={e => setProductTime(e.target.value)}
                                            className='form-control'
                                            placeholder='Enter the time'
                                            type='datetime-local'
                                        />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='mb-3'>
                                        <label className='form-label'>
                                            Choose product images
                                        </label>
                                        <input
                                            className='form-control'
                                            type='file'
                                            multiple
                                            onChange={e => setProductPhoto(e.target.files)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6 description'>
                                    <div className='mb-3 '>
                                        <label className='form-label'>
                                            Product description
                                        </label>
                                        <textarea
                                            value={productDescription}
                                            onChange={e => setProductDescription(e.target.value)}
                                            type='text'
                                            className='form-control'
                                            placeholder='Product Description' ></textarea>
                                    </div>
                                </div>
                            </div>
                            <button onClick={AddProducts} type="submit" className="btn btn-success">Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}
