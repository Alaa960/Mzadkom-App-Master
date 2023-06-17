import React, { useState } from 'react'
import './Resgister.css'
import { Container, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SignUpImg from '../../images/signup.png'
function Register() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const data = { //data for register
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
                    <div className='row'>
                        <div className='col-4 mt-5'>
                            <img src={SignUpImg} width={200} height={200} alt='signup-img' />
                        </div>
                        <div className='col-8 mt-5'>
                            <div className='row mt-5'>
                                <div className='col-6'>
                                    <label className='form-label'>Your name :</label>
                                    <input
                                        className='form-control'
                                        placeholder='Enter you name'
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>
                                <div className='col-6'>
                                    <label className='form-label'>Youe email :</label>
                                    <input
                                        className='form-control'
                                        placeholder='Enter your email'
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='row mt-5'>
                                <div className='col-6'>
                                    <label className='form-label'>Your password :</label>
                                    <input
                                        className='form-control'
                                        placeholder='Enter your password'
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className='col-6'>
                                    <label className='form-lable'>Your phone number :</label>
                                    <input
                                        className='form-control'
                                        placeholder='Enter your phone'
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button className=' btn-reg' onClick={RegisterUser}>Register</button>
                        </div>

                    </div>
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