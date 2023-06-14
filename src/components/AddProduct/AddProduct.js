import React, { useState } from 'react'
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import axios from 'axios';
import './AddProduct.css'
import { getTokens } from '../../services/LocalStorage'
import NavBar from '../Navbar/Navbar';
import AddProductImage from '../../images/addproduct.png'
export default function AddProduct() {
    const [productName, setProductName] = useState('')
    const [productInitialPrice, setProductInitialPrice] = useState()
    const [productTime, setProductTime] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productPhoto, setProductPhoto] = useState([]) // store photos in array 
    const [error, setError] = useState([]) //check if there an error
    const [success, setSuccess] = useState('') //store the msg for addedd product
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
                setSuccess(res.data.result)
            })
            .catch(err => {
                setError(err.response.data.error)
            })
    }
    return (
        <div className='body'>
            <NavBar />
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <img src={AddProductImage} alt='add-image' width={500} height={600} />
                    </div>
                    <div className='col-6 inputs'>
                        {error.map((err) => (
                            <h6 style={{ color: 'red', position: 'relative' }}>{err.msg}</h6>
                        ))}
                        <div className='alert alert-success' role='alert'>{success}</div>
                        <div className='row'>
                            <div className='col-6'>
                                <label className='form-label'>Product Name:</label>
                                <input
                                    className='form-control'
                                    value={productName}
                                    onChange={e => setProductName(e.target.value)}
                                    placeholder='Enter product name'
                                    type='text'
                                />
                            </div>
                            <div className='col-6'>
                                <label className='form-label'>Product Category:</label>
                                <select className='form-control' onChange={e => setProductCategory(e.target.value)}>
                                    <option >Select product category</option>
                                    <option value='Car'>Car</option>
                                    <option value='Antique'>Antique</option>
                                    <option value='Building'>Building</option>
                                </select>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-6'>
                                <label className='form-label'>Product Initial Price:</label>
                                <input
                                    className='form-control'
                                    value={productInitialPrice}
                                    onChange={e => setProductInitialPrice(e.target.value)}
                                    type='number'
                                    placeholder='Enter initial price'
                                />
                            </div>
                            <div className='col-6'>
                                <label>Product Images:</label>
                                <input
                                    onChange={e => setProductPhoto(e.target.files)}
                                    type='file'
                                    multiple
                                    className='form-control'
                                />
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-12'>
                                <label className='form-label'>Product Description:</label>
                                <textarea
                                    value={productDescription}
                                    onChange={e => setProductDescription(e.target.value)}
                                    className='form-control'
                                ></textarea>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-6 times'>
                                <label className='form-label'>Product Time:</label>
                                <input
                                    value={productTime}
                                    onChange={e => setProductTime(e.target.value)}
                                    className='form-control'
                                    type='datetime-local'
                                />
                            </div>
                        </div>
                    </div>
                    <button onClick={AddProducts} type="submit" className="add-product-btn">Add Product</button>

                </div>
            </div>
        </div>
    )
}
