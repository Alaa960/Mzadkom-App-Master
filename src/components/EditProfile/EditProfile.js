import React, { useState } from 'react'
import NavBar from '../Navbar/Navbar'
import './EditProfile.css'
import axios from 'axios'
import { getTokens, getUser } from '../../services/LocalStorage'
import EditProfileImage from '../../images/editprofile.png'
export default function EditProfile() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const config = {
        headers: {
            token: getTokens()
        }
    }
    const data = {
        name: name,
        email: email,
        password: password
    }
    const EditProfile = () => {
        axios.put(`http://localhost:3001/api/users/updateUser/${getUser()}`, data, config)
            .then(res => {
                console.log(res.data)
            })
    }
    return (
        <div>
            <NavBar />
            <div className='edit-form'>
                <form className='form p-5'>
                    <div className='row'>
                        <div className='col-6'>
                            <img src={EditProfileImage} alt='edit-profile' width={300} height={300} />
                        </div>
                        <div className='col-6'>
                            <div className='row'>
                                <div className='col-12'>
                                    <label className='form-label'>Enter Your Name :</label>
                                    <input
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        placeholder='Enter you name .....'
                                        className='form-control'
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 mt-5'>
                                    <label className='form-label'>Enter Your email :</label>
                                    <input
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder='example@example.com'
                                        className='form-control'
                                        type='email'
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 mt-5'>
                                    <label className='form-label'>Enter Your Password :</label>
                                    <input
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        placeholder='enter you new passowrd .....'
                                        type='password'
                                        className='form-control'
                                    />
                                </div>
                            </div>
                        </div>


                    </div>
                </form>
                <div className='edit'>
                    <button className='edit-btn' onClick={EditProfile}>Save changes</button>
                </div>
            </div>

        </div>
    )
}
