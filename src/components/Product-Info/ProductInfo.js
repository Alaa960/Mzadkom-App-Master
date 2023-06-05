import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getTokens, getUser } from '../../services/LocalStorage'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import './Product-Info.css'
import NavBar from '../Navbar/Navbar'
function ProductInfo() {
    //get the product_id from the params
    const { product_id } = useParams()
    //the greater mount of the auction
    const [greaterMount, setGreaterMount] = useState('')
    //the value that user should enter to make the auction
    const [mount_auction, setMountAuction] = useState('')
    //the date
    const [dateTime, setDateTime] = useState('')
    //diff time by days
    const [differenceDays, setDifferenceDays] = useState();
    //diff time by hours
    const [differenceHours, setDifferenceHoures] = useState();
    //diff time by mins
    const [differenceMin, setDifferenceMin] = useState();
    //diff time by sec
    const [differenceSec, setDifferenceSec] = useState();
    //te value that should user enter to make a report
    const [report_content, setReport] = useState('')
    // the product information
    const [product, setProduct] = useState([])
    //the product images
    const [images, setIMages] = useState([])
    //get the current image
    const config = {
        headers: {
            token: getTokens()
        }
    }
    //the data of mount that user should insert
    const data = {
        mount_auction: mount_auction
    }
    //the data of reports {reports_content,user_id from products,product_id from the params}
    const reports = {
        report_content: report_content,
        user_id: product.user_id,
        product_id: product.product_id
    }
    //make an auction
    const MakeAnAuction = () => {
        axios.post(`http://localhost:3001/api/products/auction/${product_id}`, data, config)
            .then(res => {
                setMountAuction(res.data)
            }).catch(err => {
                console.log(err)
            })
    }
    //get greater mount auction
    const getGreaterMountAuction = () => {
        axios.get(`http://localhost:3001/api/products/maxauctionmount/${product_id}`)
            .then(res => {
                setGreaterMount(res.data.result.mount_auction)
            })
            .catch(err => {
                console.log(err)
            })
    }
    //make a report
    const MakeReport = (user_id) => {
        axios.post(`http://localhost:3001/api/reports/report/${user_id}`, reports, config)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    //calculate the difference between two dates
    const counter = () => {
        const dateNow = new Date()
        const dateTwo = new Date(dateTime)//dateTime it is from product information
        const differenceInMs = dateTwo.getTime() - dateNow.getTime() //sub date of the product from the nowDate
        let days = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
        let hours = Math.floor((differenceInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((differenceInMs % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((differenceInMs % (1000 * 60)) / 1000);
        setDifferenceDays(`${days} day`);
        setDifferenceHoures(`${hours} hours`);
        setDifferenceMin(`${minutes} minutes`);
        setDifferenceSec(`${seconds} seconds`);

    }
    setInterval(counter, 1000)
    //get single product info
    const GetProductInformation = () => {
        axios.get(`http://localhost:3001/api/products/product/${product_id}`, config)
            .then(res => {
                setProduct(res.data.product)
                setDateTime(res.data.product.time)
                setIMages(res.data.product.images)
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        getGreaterMountAuction();
        GetProductInformation();
    }, [])

    return (
        <div>
            <NavBar />

            <div className='container Product-Info'>
                <div className='row'>
                    <Col>
                        <Container className='Product-Title'>
                            <h6 className='title-prodcut'>{product.title}</h6>
                        </Container>
                        <Container>
                            <div className='Product-Image'>
                                <Swiper
                                    effect={'coverflow'}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    slidesPerView={'auto'}
                                    coverflowEffect={{
                                        rotate: 0,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 2.5,
                                    }}
                                    pagination={{ el: '.swiper-pagination', clickable: true }}
                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                        clickable: true,
                                    }}
                                    modules={[EffectCoverflow, Pagination, Navigation]}
                                    className="swiper_container"
                                >
                                    {images.map((image) => (
                                        <SwiperSlide>
                                            <img src={`http://localhost:3001/${image.new_name}`} alt="slide_image" className='Product-Image d-block w-100' />
                                        </SwiperSlide>
                                    ))}

                                </Swiper>
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
                                    {/* this input for making auction */}
                                    <input
                                        className='Input-Bidding-Mount'
                                        type='text' placeholder='Enter you bidding amount'
                                        value={mount_auction}
                                        onChange={e => setMountAuction(e.target.value)}
                                    />
                                </div>
                                <div className='Product-Actions'>
                                    <button onClick={MakeAnAuction} className='btn btn-outline-danger'>Bid Now</button>
                                </div>
                                <div className='time' style={{ display: 'flex' }}>
                                    <div className='days'>
                                        <p>{differenceDays}:</p>
                                    </div>
                                    <div className='hours'>
                                        <p>{differenceHours}:</p>
                                    </div>
                                    <div className='mins'>
                                        <p>{differenceMin}:</p>
                                    </div>
                                    <div className='sec'>
                                        <p style={{ color: 'red' }}>{differenceSec}</p>
                                    </div>


                                </div>

                            </div>

                        </Container>
                    </Col>
                    <Col>
                        <Container className='Product-Title'>
                            <h5>Product Information</h5>
                        </Container>

                        <div className='container Product-Information'>
                            <div className='row'>
                                <div className='col-4'>
                                    <table className='table'>
                                        <thead itemScope='col'>
                                            <tr>
                                                <th>Product title</th>
                                                <th>Product category</th>
                                                <th>Product initial price</th>
                                                <th>Product description</th>
                                                <th>Mount auction</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </Col>
                </div>
            </div>
            <div className='container product-for'>
                <div className='row'>
                    <div className='col-12'>
                        <h6>this product for {product.name}</h6>
                    </div>
                </div>
            </div>
            <div className='report-form'>
                <div className='container reports'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>

                            {/* this input for making report */}
                            <div className='form-floating'>
                                <textarea
                                    className='form-control reportInput '
                                    id='floatingInput'
                                    value={report_content}
                                    onChange={e => setReport(e.target.value)}
                                >
                                </textarea>
                                <label for='floatingInput'>
                                    write your report
                                </label>
                            </div>
                            <button className='btn btn-outline-danger btnReport' onClick={() => MakeReport(product.user_id)}>report the user</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ProductInfo