import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Image, Spinner } from 'react-bootstrap';
import { BsFillEyeFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import './Product.css'
export default function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const GetAllProducts = () => {
            setIsLoading(true)
            axios.get('https://fakestoreapi.com/products')
                .then(res => {
                    setTimeout(() => {
                        setProducts(res.data)
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
            {isLoading ? <div className='loading'><Spinner className='loading-spinner' animation="grow" /></div>
                : <Container>
                    <Row>
                        {products.map((product) => (
                            <Col key={product.id}>
                                <div className='product-card'>
                                    <Image src={product.image} width={120} height={120} className='product-img' />
                                    <div className='show-info'>
                                        <Link to={`/product/${product.id}`} className='Info'>
                                            <BsFillEyeFill size={25} />
                                        </Link>
                                    </div>
                                </div>
                                <div className='product-title'>
                                    <h6>{product.title}</h6>
                                </div>
                                <div>
                                    $ {product.price}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            }
        </div>
    )
}
