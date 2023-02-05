import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Image, Button, Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import './Products.css'
function Products() {
    let navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const GetAllProducts = async () => {
        setIsLoading(true)
        await axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setTimeout(() => {
                    setProduct(res.data)
                    setIsLoading(false)
                }, 3000)
            })
            .catch(err => {
                setIsLoading(true)
                console.log(err)
            })
    }
    useEffect(() => {
        GetAllProducts()
    }, [])
    return (
        <div className='products'>
            <Container>

                {isLoading ? <div className='spinner-loading mt-5'><Spinner className='spinner-loading' /></div> :
                    <Row>
                        {product.map((product) => (
                            <Col key={product.id} className='product-card mt-5'>
                                <Image src={product.image} width={200} height={200} />
                                <p className='text-center product-title'>{product.title}</p>
                                <p className='product-price'>${product.price}</p>
                                <div>
                                    <Button onClick={() => { navigate(`/${product.id}`) }} className='show-more' variant='outline-primary'>Show more</Button>
                                </div>
                            </Col>
                        ))}
                    </Row>
                }

            </Container>
        </div >
    )
}

export default Products