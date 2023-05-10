import React, { useState } from 'react'
import NavBar from '../Navbar/Navbar'
import './EditProfile.css'
import axios from 'axios'
import { getTokens, getUser } from '../../services/LocalStorage'
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
                <form className='form'>
                    {/* new name input */}
                    <div className='mb-3 inputs d-flex'>
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className='form-control namelInput'
                            placeholder='enter your new name ...'
                        />
                        {/* new email input */}
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className='form-control emailInput'
                            placeholder='enter your new email ...'
                        />
                    </div>
                    {/* new password input */}
                    <div className='mb-3'>
                        <input
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className='form-control passwordInput'
                            placeholder='enter your new password ...'
                        />
                    </div>
                </form>
                <button className='btn btn-primary' onClick={EditProfile}>ldjslkjd</button>
            </div>

        </div>
    )
}
