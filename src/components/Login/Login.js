import React, { useEffect, useState } from 'react'
import './Login.css'
import { Container, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { SetToken } from '../../services/LocalStorage'
import { useNavigate } from 'react-router-dom'
import NavBar from '../Navbar/Navbar'
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const data = {
        email: email,
        password: password,
    }
    const RegisterUser = () => {
        axios.post('http://localhost:3001/api/auth/login', data)
            .then(res => {
                SetToken(res.data)
                console.log(res.data)
                if (res.status === 200) {
                    navigate('../profile')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <Container>
            <NavBar />
            <div className='register-Logo'>
                <h3 className='register-title'>Login</h3>
            </div>
            <Container className='form-register'>
                <div className="FormRegister">
                    <Form>
                        <div className="formGroup">
                            {/* this input form for the employee email */}
                            <Form.Group className="mt-3 emailEmployee">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Enter your email"
                                />
                            </Form.Group>
                        </div>
                        {/* this input form for the employee passowrd */}
                        <Form.Group className="mt-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                placeholder="Enter your password"
                            />
                        </Form.Group>
                        {/* Button for add the employee */}
                        <Button
                            className="mt-3"
                            type="button"
                            variant="outline-danger"
                            onClick={RegisterUser}
                        >
                            Login
                        </Button>
                    </Form>
                </div>
            </Container>
        </Container>
    )
}

export default Login