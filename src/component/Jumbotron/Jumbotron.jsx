import React from 'react'
import './Jumbotron.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


function Jumbotron({ back_img }) {
    // const styles = {
    //     background: back_img
    // }
    return (
        <div className='jumbotron'>
            <div className="overlay"></div>
            <h1>Buy Happiness <br /> We Deliver It.</h1>
            <img src={back_img} alt="" />

            <div className="search-area">
                <Container>
                    <Form>
                        <Row>
                            <Col xs xm={2}>
                                <label htmlFor="">Delivery <br/> City</label>
                            </Col>
                            <Col xs xm={3}>
                                <Form.Select aria-label="">
                                    <option>Select City</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                            <Col xs xm={2}>
                                <label htmlFor="">Pincode</label>
                            </Col>
                            <Col xs xm={3}>
                                <Form.Select aria-label="Default select example">
                                    <option>Select Pincode</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                            <Col id="submit-btn" xs xm={2}>
                                <Button variant="danger">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        </div >
    )
}

export default Jumbotron