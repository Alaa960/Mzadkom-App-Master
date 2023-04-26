import React, { useEffect, useState } from 'react'
import './Resgister.css'
import { Container, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import NavBar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
function Register() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const data = {
        name: name,
        email: email,
        password: password,
        phone: phone,
        isAdmin: false
    }
    const RegisterUser = () => {
        axios.post('http://localhost:3001/api/users/register', data)
            .then(res => {
                if (res.status === 200) {
                    alert("Registered successfully !")
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <Container>
            <div className='register-Logo'>
                <h3 className='register-title'>Register</h3>
            </div>
            <Container className='form-register'>
                <div className="FormRegister">
                    <Form>
                        <div className="formGroup">
                            {/* this input form for the employee name */}
                            <Form.Group
                                className="mt-3 nameEmployee"
                                controlId="formBasicUserName"
                            >
                                <Form.Label>User Name</Form.Label>
                                <Form.Control
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    type="text"
                                    placeholder="Enter your name "
                                />
                            </Form.Group>
                            {/* this input form for the employee email */}
                            <Form.Group className="mt-3 emailEmployee">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Enter your email"
                                />
                                <Form.Text>
                                    We'll never share your email with anyone else.
                                </Form.Text>
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
                        <Form.Group className="mt-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                type="text"
                                placeholder="Enter your phone number"
                            />
                        </Form.Group>
                        {/* Button for add the employee */}
                        <Button
                            className="mt-3"
                            type="button"
                            variant="outline-danger"
                            onClick={RegisterUser}
                        >
                            Resgister
                        </Button>
                    </Form>
                    <div className='Login'>
                        <h4 className='title-login'>Already have an account?</h4>
                        <Link className='btn-login' to='/'>Login Now !</Link>
                    </div>
                </div>

            </Container>

        </Container>
    )
}

export default Register