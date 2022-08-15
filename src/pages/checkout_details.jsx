import React from 'react'
import CheckoutFirst from '../component/Checkout/checkout_first';

import { Container, Row } from 'react-bootstrap';
import CheckoutSecond from '../component/Checkout/checkout_second';
import CheckoutThird from '../component/Checkout/checkout_third';
import Footer from '../layout/Footer';
import Sub_Footer from '../layout/Sub_Footer';


function home() {
    return (
        <>
        <Container>
            <Row>
                <>
                    <CheckoutFirst></CheckoutFirst>
                    <CheckoutSecond></CheckoutSecond>
                    <CheckoutThird></CheckoutThird>
                </>
            </Row >
        </Container>
         <Sub_Footer />
         <Footer />
         </>
    )
}

export default home