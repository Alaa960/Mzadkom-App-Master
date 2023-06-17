import React from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Link, Route, Routes } from 'react-router-dom'
import { removeTokens, removeUser } from '../../services/LocalStorage'
import AllUsers from '../allUsers/AllUsers'
import AllProducts from '../allProducts/AllProducts'
import AllReports from '../allreports/AllReports'
import { useNavigate } from 'react-router-dom';
export default function Admin() {
    const navigate = useNavigate();
    const LogOut = () => {
        removeTokens()
        removeUser()
        navigate('../')
    }
    return (
        <main style={{ display: 'flex', height: '100vh', }}>
            <Sidebar className='SideBar' transitionDuration={1000}>
                <Menu style={{ marginTop: "20px" }}>
                    <MenuItem component={<Link to='users' />} style={{ marginTop: '10px' }}>
                        Users
                    </MenuItem>
                    <MenuItem component={<Link to='product' />} style={{ marginTop: '10px' }}>
                        Products
                    </MenuItem>
                    <MenuItem component={<Link to='reports' />} style={{ marginTop: '10px' }}>
                        Reports
                    </MenuItem>
                    <MenuItem onClick={LogOut} style={{ marginTop: '10px' }}>
                        Log Out
                    </MenuItem>
                </Menu>
            </Sidebar>
            <main style={{ padding: 15 }}>
                <Routes>
                    <Route path='users' element={<AllUsers />} />
                    <Route path='product' element={<AllProducts />} />
                    <Route path='reports' element={<AllReports />} />
                </Routes>
            </main>
        </main>
    )
}
