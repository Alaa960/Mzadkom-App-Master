import React, { useEffect, useState } from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Route, Routes, Link } from 'react-router-dom';
import NavBar from '../Navbar/Navbar';
import axios from 'axios';
import Messages from '../Messages/Messages'
import { getTokens } from '../../services/LocalStorage';
export default function Side() {
    const [users, setUsers] = useState([])
    const config = {
        headers: {
            token: getTokens()
        }
    }
    //get all users
    const getUsers = () => {
        axios.get('http://localhost:3001/api/users/allUsers', config)
            .then(res => {
                console.log(res.data.users)
                setUsers(res.data.users)
            })
    }
    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div>
            <NavBar />
            <main style={{ display: 'flex', height: '100vh', }}>
                <Sidebar className='SideBar' transitionDuration={1000}>
                    <Menu style={{ marginTop: "20px" }}>

                        {users.map((user) => (
                            <div>
                                <MenuItem key={user.user_id} style={{ marginTop: '10px' }}>
                                    <Link to={`/messages/${user.user_id}`}>{user.name}</Link>
                                </MenuItem>
                            </div>
                        ))}
                    </Menu>
                </Sidebar>
            </main>
            <main>
                <Routes>
                    {users.map((user) => (
                        < Route path='/messages/:user_id' element={< Messages user_id={user.user_id} />} />
                    ))}
                </Routes>
            </main>
        </div >
    )
}
