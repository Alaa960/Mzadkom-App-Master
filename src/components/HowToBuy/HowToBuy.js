import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './HowToBuy.css'
function HowToBuy() {
    return (
        <div>
            <Container className='Title-how-to-buy'>
                <Row>
                    <Col>
                        <h3 className='title'>How to buy</h3>
                    </Col>
                </Row>
            </Container>
            <Container className='steps-for-buy'>
                <Row>
                    <Col>
                        <h5 className='title-steps-to-buy'>The process is very simple .</h5>
                        <ol >
                            <li className='list-of-steps'>
                                <h6>Log in to the site using your username and password.</h6>
                            </li>
                            <li className='list-of-steps'>
                                <h6>Choose the product you wish to bid on.</h6>
                            </li>
                            <li className='list-of-steps'>
                                <h6>Click on the "Bid" button next to the product you want to buy</h6>
                            </li>
                            <li className='list-of-steps'>
                                <h6>The system will take you to the bidding page, which asks you to enter the value of your bid on the product, and this page displays all the details of the product.</h6>
                            </li>
                            <li className='list-of-steps'>
                                <h6>Enter the value of your bid and click on the "Bid" button.</h6>
                            </li>
                            <li className='list-of-steps'>
                                <h6>The system will show you alert to confirm, by clicking on "Confirm Bid" to confirm your bid price.</h6>
                            </li>
                            <li className='list-of-steps'>
                                <h6>Bid at the highest price you are willing to pay in order to ensure that you are the highest bidder to purchase the product by the end of the auction and win your product.</h6>
                            </li>
                        </ol>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HowToBuy