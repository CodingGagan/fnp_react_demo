import React from 'react'
import { Col, Row } from 'react-bootstrap';
import './Categories.css';
import {GiFlowerPot} from 'react-icons/gi';
function Categories() {
    return (
        <Col xs xm={4} xl={3}>
            <Row>
                <Col xs={3}>
                    <div className="left-cards">
                        <GiFlowerPot />
                    </div>
                </Col>
                <Col xs={9}>
                    <div className="right-cards">
                        Flowers
                    </div>
                </Col>
            </Row>
        </Col>
    )
}

export default Categories