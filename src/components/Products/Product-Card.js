import React, { useContext } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { FiEye } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import './Product.css'
export default function ProductCard({ product }) {
    const { id, price, title, category, image } = product;
    return (
        <div>
            <div className='product-card'>
                <Image className='product-img mt-3' src={image} width={120} height={120} />
                <div className='show-info'>
                    <Link to={`/product/${id}`}>
                        <FiEye size={25} />
                    </Link>
                </div>
            </div>
            <div className='category'>{category}</div>
            <Link className='link-product' to={`/product/${id}`}>
                <h2 className='product-title'>{title}</h2>
            </Link>
            <div>NIS {price}</div>
        </div>
    )
}
