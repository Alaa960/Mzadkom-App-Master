import React from 'react'
import {
    Navbar,
    Nav,
    Container,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { removeTokens } from '../../services/LocalStorage'
function UserNavBar() {
    const LogOut = () => {
        removeTokens()
    }
    return (
        <Container fluid='true'>
            <Navbar bg="light" expand="lg" className='navbar-home navbar justify-content-start'>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav className='navs'>
                            <Link to='/profile' className='home-link'>Add Prouct</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className='justidy-content-end'>
                        <Nav>
                            <Link to='/' className='home-link' onClick={LogOut}>Log Out</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    )
}

export default UserNavBar