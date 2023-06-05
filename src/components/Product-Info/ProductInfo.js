import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getTokens, getUser } from '../../services/LocalStorage'
import { Carousel } from 'react-responsive-carousel';
import './Product-Info.css'
import NavBar from '../Navbar/Navbar'
function ProductInfo() {
    const { product_id } = useParams()
    const [greaterMount, setGreaterMount] = useState('')
    const [mount_auction, setMountAuction] = useState('')
    const [dateTime, setDateTime] = useState('')
    const [differenceDays, setDifferenceDays] = useState();
    const [differenceHoures, setDifferenceHoures] = useState();
    const [differenceMin, setDifferenceMin] = useState();
    const [differenceSec, setDifferenceSec] = useState();
    const [report_content, setReport] = useState('')
    const [product, setProduct] = useState([])
    const [images, setIMages] = useState([])
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => {
            const newIndex = prevIndex - 1;
            return newIndex < 0 ? images.length - 1 : newIndex;
        });
    };

    const currentImage = images[currentImageIndex];
    const config = {
        headers: {
            token: getTokens()
        }
    }
    const data = {
        mount_auction: mount_auction
    }
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
        const dateTwo = new Date(dateTime)
        const differenceInMs = dateTwo.getTime() - dateNow.getTime()
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
    useEffect(() => {
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

        getGreateMountAuction();
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
                                <div className="image-carousel">

                                    <div className="carousel-image">
                                        <img src={`http://localhost:3001/${currentImage.new_name}`} alt={images.title} className='d-block w-100' />
                                    </div>
                                    <div className='d-flex flex-end'>
                                        <button onClick={prevImage}>Previous</button>
                                        <div className='next'>
                                            <button onClick={nextImage}>Next</button>
                                        </div>
                                    </div>

                                </div>
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
                                <div className='time'>
                                    <p>{differenceDays}:{differenceHoures}:{differenceMin}:{differenceSec}</p>
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