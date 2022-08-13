import React from 'react'
import CheckoutFirst from '../component/Checkout/checkout_first';

import { Container, Row } from 'react-bootstrap';


function home() {
    return (
        <Container>
            <Row>
                <>
                    <CheckoutFirst></CheckoutFirst>
                </>
            </Row >
        </Container>
    )
}

export default home