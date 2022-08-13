import React from 'react'
import CheckoutFirst from '../component/Checkout/checkout_first';

import { Container, Row } from 'react-bootstrap';
import CheckoutSecond from '../component/Checkout/checkout_second';
import CheckoutThird from '../component/Checkout/checkout_third';


function home() {
    return (
        <Container>
            <Row>
                <>
                    <CheckoutFirst></CheckoutFirst>
                    <CheckoutSecond></CheckoutSecond>
                    <CheckoutThird></CheckoutThird>
                </>
            </Row >
        </Container>
    )
}

export default home