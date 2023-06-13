import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import './Header.css'
import headerImage from '../../images/Header.JPG'
function Header() {
    return (
        <Container className='header-page'>
            <Row>
                <Col>
                    <Image src={headerImage} className='header-image' />
                </Col>
            </Row>
        </Container>
    )
}

export default Header