import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import { Bars } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'
import { getTokens } from '../../services/LocalStorage'
import './Product-Info.css'
import NavBar from '../Navbar/Navbar'
function ProductInfo() {
    const { product_id } = useParams()
    const [greaterMount, setGreaterMount] = useState('')
    const [mount_auction, setMountAuction] = useState('')
    const [product, setProduct] = useState([])
    const config = {
        headers: {
            token: getTokens()
        }
    }
    const data = {
        mount_auction: mount_auction
    }
    //make an auction
    const MakeAnAuction = () => {
        axios.post(`http://localhost:3001/api/products/auction/${product_id}`, data, config)
            .then(res => {
                console.log(res.data)
                setMountAuction(res.data)
            }).catch(err => {
                console.log(err)
            })
    }
    //get greate mount auction
    const getGreateMountAuction = () => {
        axios.get(`http://localhost:3001/api/products/maxauctionmount/${product_id}`)
            .then(res => {
                setGreaterMount(res.data.result.mount_auction)
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        const GetProductInformation = () => {
            axios.get(`http://localhost:3001/api/products/product/${product_id}`, config)
                .then(res => {
                    setProduct(res.data.product)
                })
                .catch(err => {
                    console.log(err)
                })
        }


        getGreateMountAuction();
        GetProductInformation();
    }, [config, getGreateMountAuction, product_id])

    return (
        <div>
            <NavBar />

            <Container className='Product-Info'>
                <Row>
                    <Col>
                        <Container className='Product-Title'>
                            <h6 className='title-prodcut'>{product.title}</h6>
                        </Container>
                        <Container>
                            <div className='Product-Image'>
                                <Image className='mt-4 product-img' src={`http://localhost:3001/${product.new_name}`} width={250} height={250} />
                            </div>
                        </Container>
                    </Col>
                    <Col>
                        <Container className='Product-Title'>
                            <h5>Bidding</h5>
                        </Container>
                        <Container>
                            <div className='Product-Bidding'>
                                <div className='bidding-label'>
                                    <h6 className='label'>Bidding Mount</h6>
                                </div>
                                <div className='Bidding-Mounts'>
                                    <input className='Input-Bidding-Mount' type='text' placeholder='Enter you bidding amount' value={mount_auction} onChange={e => setMountAuction(e.target.value)} />
                                </div>
                                <div className='Product-Actions'>
                                    <button onClick={MakeAnAuction} className='btn btn-outline-danger'>Bid Now</button>
                                </div>
                            </div>

                        </Container>
                    </Col>
                    <Col>
                        <Container className='Product-Title'>
                            <h5>Product Information</h5>
                        </Container>
                        <Container className='Product-Information'>
                            <div className='category'>
                                <h6>{product.category}</h6>
                            </div>
                            <br />
                            <p>{greaterMount}</p>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
export default ProductInfo