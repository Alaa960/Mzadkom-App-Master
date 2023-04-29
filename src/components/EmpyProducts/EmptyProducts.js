import React from 'react'
import './EmptyProducts.css'
import EmptyProduct from '../../images/emptyproducts.png'
import { Link } from 'react-router-dom'
export default function EmptyProducts() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='img-empty-products'>
                            <img src={EmptyProduct} className='img-empty' />
                        </div>
                        <div className='alert'>
                            <h5 className='alert-title'>There is no products for you in our company</h5>
                            <div className='d-flex'>
                                <h5 className='alert-description'>if you want to make an auction</h5>
                                <Link to='/addProduct' className='make-an-auction'><h5 className='alert-description'>Add product</h5></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
