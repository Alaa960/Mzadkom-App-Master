import React from 'react'
import { Button } from 'react-bootstrap'
import './SearchForProduct.css'

function SearchForProduct() {
    return (
        <div>
            <div className='Seacrh-Product'>
                <input className='Search-Input' type='text' placeholder='Enter the name of product' />
                <Button className='Search-Button' variant='outline-success'>Search</Button>
            </div>
        </div>
    )
}

export default SearchForProduct