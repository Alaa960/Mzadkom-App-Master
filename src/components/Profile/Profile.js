import React from 'react';
import './Profile.css';
import UserNavBar from '../UserNavBar/UserNavBar'
import AddProduct from '../AddProduct/AddProduct';

export default function Profile() {
    return (
        <div className='body'>
            <UserNavBar />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <AddProduct />
                    </div>
                </div>
            </div>
        </div>
    )
}
