import React from 'react'
import './Resgister.css'
import { Container, Form, Button } from 'react-bootstrap'

function Register() {
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
                                    type="text"
                                    placeholder="Enter your name "
                                />
                            </Form.Group>
                            {/* this input form for the employee email */}
                            <Form.Group className="mt-3 emailEmployee">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
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
                                type="password"
                                placeholder="Enter your password"
                            />
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your phone number"
                            />
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label>Adrress</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder='Enter your address....'
                            />
                        </Form.Group>
                        {/* Button for add the employee */}
                        <Button
                            className="mt-3"
                            type="button"
                            variant="outline-danger"
                        >
                            Resgister
                        </Button>
                    </Form>
                </div>
            </Container>
        </Container>
    )
}

export default Register