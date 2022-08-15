import React from 'react'
import ProductCarousel from '../component/Product/ProductCarousel';
import ProductPricing from '../component/Product/ProductPricing';
import ProducAddOn from '../component/Product/ProducAddOn';
import { Container, Row } from 'react-bootstrap';
import Sub_Footer from '../layout/Sub_Footer';
import Footer from '../layout/Footer';


function home() {
    return (
        <>
        <Container>
            <Row>
                <>
                    <ProductCarousel></ProductCarousel>
                    <ProductPricing></ProductPricing>
                    <ProducAddOn></ProducAddOn>
                </>
            </Row >
        </Container>
        <Sub_Footer />
        <Footer />
        </>
    )
}

export default home