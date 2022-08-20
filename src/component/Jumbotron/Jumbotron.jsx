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
                        <Row className={['jumbo-row']}>
                            <Col xs xm={2}>
                                <h4 htmlFor="">Delivery <br/> City</h4>
                            </Col>
                            <Col xs xm={3}>
                                <Form.Select aria-label="">
                                    <option>Select City</option>
                                    <option value="1">DELHI</option>
                                    <option value="2">BENGAL</option>
                                    <option value="3">COMIBATORE</option>
                                </Form.Select>
                            </Col>
                            <Col xs xm={2}>
                                <h4 htmlFor="">Pincode</h4>
                            </Col>
                            <Col xs xm={3}>
                                <Form.Select aria-label="Default select example">
                                    <option>Select Pincode</option>
                                    <option value="1">147852</option>
                                    <option value="2">123654</option>
                                    <option value="3">963258</option>
                                </Form.Select>
                            </Col>
                            <Col id="submit-btn" xs xm={2}>
                                <Button variant="danger" className={"jumbotronBtn"}>FIND GIFTS</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        </div >
    )
}

export default Jumbotron