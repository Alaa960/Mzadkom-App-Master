import React, { useState } from 'react'
import './Login.css'
import { Container, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { SetToken, SetUser } from '../../services/LocalStorage'
import { Link, useNavigate } from 'react-router-dom'
import LoginImg from '../../images/login.png'
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [error, setError] = useState([])
    const data = {
        email: email,
        password: password,
    }
    //press button login
    const Login = () => {
        axios.post('http://localhost:3001/api/auth/login', data)
            .then(res => {
                SetToken(res.data)
                SetUser(res.data)
                if (res.status === 200) {
                    { res.data.user.isAdmin === 0 ? navigate('../home') : navigate('../admin') }
                }

            }).catch(err => {
                console.log(err.response.data.error)
                setError(err.response.data.error)
            })
    }
    return (
        <Container>
            <div className='register-Logo'>
                <h3 className='register-title'>Login</h3>
            </div>
            <Container className='form-register'>
                <div className="FormRegister">
                    <div className='img'>
                        <img src={LoginImg} width={200} height={200} alt='login img' />
                    </div>
                    <div className='errs'>
                        {error.map((err) => (
                            <h6 style={{ color: 'red' }}>{err.msg}</h6>
                        ))}
                    </div>
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
                        <Form.Group className="mt-3 passwordUser">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                placeholder="Enter your password"
                            />
                        </Form.Group>

                        {/* Button for add the employee */}
                        <button
                            className="mt-3 BTN-login"
                            type="button"

                            onClick={Login}
                        >
                            Login
                        </button>
                    </Form>
                    <div className='register'>
                        <h4 className='title-register'>Don't have an account?</h4>
                        <Link className='btn-register' to='/register'>Register</Link>
                    </div>
                </div>
            </Container>

        </Container>

    )
}

export default Login