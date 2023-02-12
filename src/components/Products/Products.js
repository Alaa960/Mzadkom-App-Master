import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Image, Spinner } from 'react-bootstrap';
import { BsFillEyeFill } from 'react-icons/bs'
import { Bars, ThreeDots } from 'react-loader-spinner';
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
            {isLoading ? <div className='loading'>
                <Bars
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
                                <Link className='title' to={`/product/${product.id}`}>
                                    <h6 className='title-prodcut'>{product.title}</h6>
                                </Link>

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
