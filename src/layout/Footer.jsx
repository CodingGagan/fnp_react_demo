import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';
<a href="https://www.flaticon.com/free-icons/credit-card" title="credit card icons">Credit card icons created by Freepik - Flaticon</a>
function Footer() {
    return (
        <footer>
            <Container>
                <div className="footer-first">
                    <Row>
                        <Col id="firstCol">
                            <label htmlFor="">Sign Up For Email Offers & Updates</label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                    Button
                                </Button>
                            </InputGroup>
                        </Col>
                        <Col>
                            <h5>Connect With Us</h5>
                            <SocialIcon url="https://twitter.com/jaketrent" />
                            <SocialIcon url="https://twitter.com/jaketrent" />
                            <SocialIcon url="https://twitter.com/jaketrent" />
                            <SocialIcon url="https://twitter.com/jaketrent" />
                        </Col>
                        <Col>
                            <h5>Secure Ordering & Transactions</h5>
                            <img className='creditcard' src="assets/icons/credit-card.png" alt="" />
                            <img className='creditcard' src="assets/icons/credit-card.png" alt="" />
                            <img className='creditcard' src="assets/icons/credit-card.png" alt="" />
                            <img className='creditcard' src="assets/icons/credit-card.png" alt="" />
                        </Col>
                    </Row>
                </div>
                <div className="footer-second">
                    <h7>About us | SMF Team | Careers | Contact Us | Testimonials | Terms & Conditions | Disclaimer | Terms Of Use | Privacy Policy | FAQ | Retails Store | Franchise | Blog | Affiliate Program | Flower | Astrology | News | Room | Download App</h7>
                </div>
                <div className="footer-last">
                    Copyright @ 2020 www.sendmyfeelings.com. All right reserved.
                </div>
            </Container>
        </footer>
    )
}

export default Footer