import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Image, Button } from 'react-bootstrap'
import { Bars } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'
import { getTokens } from '../../services/LocalStorage'
import './Product-Info.css'
import NavBar from '../Navbar/Navbar'
function ProductInfo() {
    const { product_id } = useParams()
    const [prodcut, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const config = {
        headers: {
            token: getTokens()
        }
    }
    useEffect(() => {
        const GetProductInformation = () => {
            setIsLoading(true)
            axios.get(`http://localhost:3001/api/products/product/${product_id}`, config)
                .then(res => {
                    setTimeout(() => {
                        setProduct(res.data.product)
                        setIsLoading(false)
                    }, 2000)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        GetProductInformation()
    }, [product_id])
    return (
        <div>
            <NavBar />
            {isLoading ?

                <div className='spinner-loading'>
                    <Bars
                        height="120"
                        width="120"
                        radius="9"
                        color="red"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName="spinner-loading"
                        visible={true}
                    />
                </div>
                : <Container className='Product-Info'>
                    <Row>
                        <Col>
                            <Container className='Product-Title'>
                                <h6 className='title-prodcut'>{prodcut.title}</h6>
                            </Container>
                            <Container>
                                <div className='Product-Image'>
                                    <Image className='mt-4 product-img' src={`http://localhost:3001/${prodcut.new_name}`} width={250} height={250} />
                                </div>
                            </Container>
                        </Col>
                        <Col>
                            <Container className='Product-Title'>
                                <h5>Bidding</h5>
                            </Container>
                            <Container>
                                <div className='Product-Bidding'>
                                    <div className='bidding-label'>
                                        <h6 className='label'>Bidding Mount</h6>
                                    </div>
                                    <div className='Bidding-Mounts'>
                                        <input className='Input-Bidding-Mount' type='text' placeholder='Enter you bidding amount' />
                                    </div>
                                    <div className='Product-Actions'>
                                        <Button variant='outline-danger'>Bid Now</Button>
                                    </div>
                                </div>

                            </Container>
                        </Col>
                        <Col>
                            <Container className='Product-Title'>
                                <h5>Product Information</h5>
                            </Container>
                            <Container className='Product-Information'>
                                <h6>{prodcut.category}</h6>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            }
        </div>
    )
}

export default ProductInfo