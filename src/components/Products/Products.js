import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsFillEyeFill } from 'react-icons/bs'
import { ThreeDots } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import './Product.css'
import { getTokens } from '../../services/LocalStorage';
export default function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [search, setSearch] = useState('')
    console.log(search)
    const config = {
        headers: {
            token: getTokens()
        }
    }
    useEffect(() => {
        const GetAllProducts = () => {
            setIsLoading(true)
            axios.get('http://localhost:3001/api/products/products', config)
                .then(res => {
                    setTimeout(() => {
                        setProducts(res.data.products)
                        setIsLoading(false)
                    }, 1000)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        GetAllProducts()
    }, [])
    return (
        <div className='products'>
            {isLoading ? <div className='loading'>
                <ThreeDots
                    height="120"
                    width="120"
                    radius="9"
                    color="red"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />

            </div>
                : <div className='container'>
                    <row>
                        <div className='col-4'>
                            <input
                                className='form-control'
                                placeholder='search product by title .....'
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                        </div>
                    </row>
                    <div className='row'>
                        {products.filter((product) => {
                            return search.toLowerCase() === ''
                                ? product
                                : product.title.toLowerCase().includes(search)
                        }).map(product => (
                            <div className='col-4' key={product.product_id}>
                                <div className='product-card'>
                                    <img alt={product.title} src={`http://localhost:3001/${product.prod[0].new_name}`} width={120} height={120} />
                                    <div className='show-info'>
                                        <Link to={`/product/${product.product_id}`} className='Info'>
                                            <BsFillEyeFill size={25} />
                                        </Link>
                                    </div>

                                </div>
                                <Link className='title' to={`/product/${product.product_id}`}>
                                    <h6 className='product-title'>{product.title}</h6>
                                </Link>
                                <div>
                                    $ {product.initial_price}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}
