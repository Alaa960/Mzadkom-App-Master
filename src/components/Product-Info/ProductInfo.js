import React, { useContext } from 'react'
import { Col, Container, Row, Image, Table, Button, Spinner } from 'react-bootstrap'
import './Product-Info.css'
import { ProductsContext } from '../ProductContext/ProductContext'
import { useParams } from 'react-router-dom'
function ProductInfo() {
    const { id } = useParams()
    const { products } = useContext(ProductsContext);
    const product = products.find((item) => {
        return item.id === parseInt(id)
    })
    const { title, price, image, description } = product;
    if (!product) {
        return (
            <div className='spinner-loading'>
                <Spinner className='loading-animation' animation="grow" />;
            </div>
        )
    }
    return (
        <div>
            <Container className='Product-Info'>
                <Row>
                    <Col>
                        <Container className='Product-Title'>
                            <h6 className='title-prodcut'>{title}</h6>
                        </Container>
                        <Container>
                            <div className='Product-Image'>
                                <Image src={image} width={400} height={350} />
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
                            {description}
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductInfo