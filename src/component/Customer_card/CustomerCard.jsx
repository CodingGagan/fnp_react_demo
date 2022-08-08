import React from 'react'
import { Col, Row } from 'react-bootstrap';
import './CustomerCard.css';
function CustomerCard() {
    return (
        <Row>

            <Col id="customer_card" xs xm={4} xl={4}>
                <Row>
                    <Col>
                        <div className="left_image">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </div>
                    </Col>
                    <Col>
                        <p>
                            Please update your tracking status prompty. otherwise happy with the service.
                        </p>
                        <small>Date: 22-07-1986</small>
                        <p>Location: Gurgaon</p>
                        <p>Occasion: General Gifting</p>

                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default CustomerCard