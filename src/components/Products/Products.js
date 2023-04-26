import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap';
import { BsFillEyeFill } from 'react-icons/bs'
import { ThreeDots } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import './Product.css'
export default function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const GetAllProducts = () => {
            setIsLoading(true)
            axios.get('http://localhost:3001/api/products/products')
                .then(res => {
                    setTimeout(() => {
                        setProducts(res.data.products)
                        setIsLoading(false)
                    }, 3000)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        GetAllProducts()
    }, [])
    return (
        <div className='products'>
            {isLoading ? <div className='loading'>
                <ThreeDots
                    height="120"
                    width="120"
                    radius="9"
                    color="red"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </div>
                : <div className='container'>
                    <div className='row'>
                        {products.map(product => (
                            <div className='col-4' key={product.product_id}>
                                <div className='product-card'>
                                    <Image src={product.new_name} width={120} height={120} className='product-img' />
                                    <div className='show-info'>
                                        <Link to={`/product/${product.product_id}`} className='Info'>
                                            <BsFillEyeFill size={25} />
                                        </Link>
                                    </div>
                                </div>
                                <Link className='title' to={`/product/${product.product_id}`}>
                                    <h6 className='title-prodcut'>{product.title}</h6>
                                </Link>

                                <div>
                                    $ {product.initial_price}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}
