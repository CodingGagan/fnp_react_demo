import React from 'react'
import { Col, Row } from 'react-bootstrap';

function SidebarCart() {
    return (

        <Row id="Cart-Div">
            <Col xs sm={4} xl={4}>
                <div className="cart-image">
                    <img src="https://i7.fnp.com/assets/images/custom/for-him/gift-type/Accessories.jpg" alt="" />
                </div>
            </Col>
            <Col xs sm={8} xl={8}>
                <h5>Combo Pricing For Better [Hat, Goggles ...]</h5>
                <h6>Rs 577</h6>
            </Col>
        </Row>
    )
}

export default SidebarCart