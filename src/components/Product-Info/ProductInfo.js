import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Image, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import './Product-Info.css'
function ProductInfo() {
    const { id } = useParams()
    const [prodcut, setProduct] = useState([])
    useEffect(() => {
        const GetProductInformation = () => {
            axios.get(`https://fakestoreapi.com/products/${id}`)
                .then(res => {
                    setProduct(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        GetProductInformation()
    }, [])
    return (
        <div>
            <Container className='Product-Info'>
                <Row>
                    <Col>
                        <Container className='Product-Title'>
                            <h6 className='title-prodcut'>{prodcut.title}</h6>
                        </Container>
                        <Container>
                            <div className='Product-Image'>
                                <Image src={prodcut.image} width={400} height={350} />
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
                            {prodcut.description}
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductInfo