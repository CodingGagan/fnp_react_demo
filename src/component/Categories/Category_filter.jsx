import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Category_filter({circle}) {
    return (
        <>
            <div className="select-filters">
                <Row>
                    <Col>
                        <Form.Select aria-label="Default select example">
                            <option>Select Cake Type</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Select aria-label="Default select example">
                            <option>Select Weight</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Select aria-label="Default select example">
                            <option>Select Shape</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Select aria-label="Default select example">
                            <option>Select Flavor</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                </Row>
            </div>
            {
                circle ??
                <div className="highlight-filters">
                <Row>
                    <Col>
                        <div className="circle-div">
                            <div className="inner-div">
                            <p className="heading">
                                    BIRTHDAY
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="circle-div">
                            <div className="inner-div">
                            <p className="heading">
                                    EGGLESS
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="circle-div">
                            <div className="inner-div">
                            <p className="heading">
                                    ANNIVERSARY
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="circle-div">
                            <div className="inner-div">
                            <p className="heading">
                                    KIDS CAKES
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="circle-div">
                            <div className="inner-div">
                            <p className="heading">
                                    MIDNIGHT DELIVERY
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="circle-div">
                            <div className="inner-div">
                            <p className="heading">
                                    LOVE YOU
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="circle-div">
                            <div className="inner-div">
                            <p className="heading">
                                    MISS YOU
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="circle-div">
                            <div className="inner-div">
                                <p className="heading">
                                    1ST ANNIVESARY
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            }
        </>
    )
}

export default Category_filter