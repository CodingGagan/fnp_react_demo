import React from 'react'
import ProductCarousel from '../component/Product/ProductCarousel';
import ProductPricing from '../component/Product/ProductPricing';
import ProducAddOn from '../component/Product/ProducAddOn';
import { Container, Row } from 'react-bootstrap';


function home() {
    return (
        <Container>
            <Row>
                <>
                    <ProductCarousel></ProductCarousel>
                    <ProductPricing></ProductPricing>
                    <ProducAddOn></ProducAddOn>
                </>
            </Row >
        </Container>
    )
}

export default home