import React from 'react'
import { Col, Container, Row, Image, Table, Button } from 'react-bootstrap'
import './Product-Info.css'
import ProductImage from '../../images/mzadkn.png'
function ProductInfo() {
    return (
        <div>
            <Container className='Product-Info'>
                <Row>
                    <Col>
                        <Container className='Product-Title'>
                            <h5>Product Title</h5>
                        </Container>
                        <Container>
                            <div className='Product-Image'>
                                <Image src={ProductImage} width={400} height={350} />
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
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductInfo