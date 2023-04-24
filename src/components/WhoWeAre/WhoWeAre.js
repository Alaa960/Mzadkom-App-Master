import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './WhoWeAre.css'
import NavBar from '../Navbar/Navbar'
function WhoWeAre() {
    return (
        <div>
            <NavBar />
            <Container className='Title-who-we-are'>
                <Row>
                    <Col>
                        <h3 className='title'>Who we are</h3>
                    </Col>
                </Row>
            </Container>
            <Container className='who-we-are'>
                <Row>
                    <Col>
                        <h4>
                            Mazadkom for online auctions
                        </h4>
                        <h6 className='descreption'>
                            First Mazadkom is the first company specialized in the field of electronic auctions in Palestine.
                            First Mazadkom aims to develop the concept of bidding used in Palestine through its use of the best international
                            bidding systems, such as online bidding. Through which it attracts the largest possible number of bidders and provides
                            the opportunity for the largest possible segment of those wishing to buy the products offered for sale to achieve their
                            demand. First Mazadkom specializes in organizing and managing auctions for the sale of products.

                        </h6>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WhoWeAre