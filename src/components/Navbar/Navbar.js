import React from 'react'
import {
    Navbar,
    Nav,
    Container,
    Image
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../images/mzadkn.png'
import './NavBar.css'
function NavBar() {
    return (
        <Container fluid='true'>
            <Navbar bg="light" expand="lg" className='navbar-home navbar justify-content-start'>
                <Container>
                    <Link to='/home'><Image alt='ourwebsite' src={logo} width={330} height={80} /></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav className='navs'>
                            <Link to='/' className='home-link'>Home</Link>
                            <Link to='/howtobuy' className='home-link'>How to buy</Link>
                            <Link to='/whoweare' className='home-link'>Who we are</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className='justidy-content-end'>
                        <Nav>
                            <Link to='/login' className='home-link'>Login</Link>
                            <Link to='/register' className='home-link'>Register</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    )
}

export default NavBar