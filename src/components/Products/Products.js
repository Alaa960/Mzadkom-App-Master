import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ProductsContext } from '../ProductContext/ProductContext'
import ProductCard from './Product-Card'
export default function Products() {
    const { products } = useContext(ProductsContext)
    return (
        <div className='products'>
            <Container>
                <Row>
                    {products.map((product) => (
                        <Col key={product.id} className="col-3 mt-5">
                            <ProductCard product={product} key={product.id} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
