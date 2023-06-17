import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getTokens, getUser } from '../../services/LocalStorage'
import axios from 'axios'
export default function AllUsers() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers()
    }, [])
    const config = {
        headers: {
            token: getTokens()
        }
    }
    const getUsers = () => {
        axios.get('http://localhost:3001/api/users/users', config)
            .then(res => setUsers(res.data.users))
    }
    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3001/api/users/user/${id}`, config)
            .then(res => console.log(res.data))

    }
    return (
        <div>
            <table class="table" style={{
                width: '1200px',
                height: '100%'
            }}>
                <thead>
                    <tr>
                        <th scope="col">User name</th>
                        <th scope="col">User phone</th>
                        <th scope="col">User email</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr>
                            <th>{user.name}</th>
                            <th>{user.phone}</th>
                            <th>{user.email}</th>
                            <th>
                                <button className='btn btn-outline-danger' onClick={() => deleteUser(user.user_id)}>Delete</button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
