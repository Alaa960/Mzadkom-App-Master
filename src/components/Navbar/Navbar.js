import React from 'react'
import {
    Navbar,
    Nav,
    Container,
    Image,
    NavDropdown
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import './NavBar.css'
import { removeTokens, removeUser } from '../../services/LocalStorage'
function NavBar() {
    const LogOut = () => {
        removeTokens()
        removeUser()
    }
    return (
        <Container fluid='true'>
            <Navbar bg="light" expand="lg" className='navbar-home navbar justify-content-start'>
                <Container>
                    <Link to='/home'><Image alt='ourwebsite' src={logo} width={200} height={200} /></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav className='navs'>
                            <Link to='/home' className='home-link'>Home</Link>
                            <Link to='/howtobuy' className='home-link'>How to buy</Link>
                            <Link to='/whoweare' className='home-link'>Who we are</Link>

                        </Nav>
                        <NavDropdown style={{ zIndex: 1 }} title='Services' className='home-link'>
                            <NavDropdown.Item>
                                <Link to='/addProduct' className='home-link'>Add Product</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/yourproducts' className='home-link'>Your Products</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/editprofile' className='home-link'>Edit Profile</Link>
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Navbar.Collapse>
                    <Navbar.Collapse className='justify-content-end'>
                        <Link to='/' onClick={LogOut} className='home-link'>Log Out</Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    )
}

export default NavBar