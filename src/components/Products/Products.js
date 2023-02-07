import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Image, Button, Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import './Products.css'
function Products() {
    let navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const [filter, setFilter] = useState(product)
    const [isLoading, setIsLoading] = useState(false);
    const GetAllProducts = async () => {
        setIsLoading(true)
        await axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setTimeout(() => {
                    setProduct(res.data)
                    setFilter(res.data)
                    setIsLoading(false)
                }, 3000)
            })
            .catch(err => {
                setIsLoading(true)
                console.log(err)
            })
    }
    const FilterProduct = (cat) => {
        const UpdatedList = product.filter((x) => x.category === cat);
        setFilter(UpdatedList);
    }
    useEffect(() => {
        GetAllProducts()
    }, [])
    return (
        <div className='products'>
            <Container>
                <div className='Buttons-Categories d-flex justify-content-center '>
                    <Button className='me-3' variant='outline-secondary' onClick={() => setFilter(product)}>All</Button>
                    <Button className='me-3' variant='outline-secondary' onClick={() => FilterProduct("men's clothing")}>men's clothing</Button>
                    <Button className='me-3' variant='outline-secondary' onClick={() => FilterProduct("jewelery")}>jewelery</Button>
                    <Button className='me-3' variant='outline-secondary' onClick={() => FilterProduct("electronics")}>electronics</Button>
                    <Button className='me-3' variant='outline-secondary' onClick={() => FilterProduct("women's clothing")}>women's clothing</Button>
                </div>
                {isLoading ? <div className='spinner-loading mt-5'><Spinner className='spinner-loading' /></div> :
                    <Row>
                        {filter.map((product) => (
                            <Col key={product.id} className='product-card col-3 mt-5'>
                                <p>{product.category}</p>
                                <Image src={product.image} width={200} height={200} />
                                <p className='text-center product-title'>{product.title}</p>
                                <p className='product-price'>${product.price}</p>
                                <div>
                                    <Button onClick={() => navigate('./productInfo')} className='show-more' variant='outline-primary'>Show more</Button>
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