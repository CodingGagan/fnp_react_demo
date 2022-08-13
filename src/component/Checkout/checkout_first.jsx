import React from 'react';
import './Checkout.css';
import { Col } from 'react-bootstrap';

export default function CheckoutFirst() {
    return (
        <>
            <Col className='col-md-8 col-lg-8'>
                <div className='left-main d-flex flex-column '>

                    <div className='d-flex justify-content-between bg-secondary-light p-2'>
                        <div className='align-self-center text-white'><label className='bg-dark p-1 rounded'>1</label></div>
                        <div className='align-self-center'><label htmlFor=""><strong>JOHN DOE</strong></label></div>
                        <div className='align-self-center'><label htmlFor="">JOHNDOE@EXAMPLE.COM</label></div>
                    </div>

                    <div className='d-flex  bg-secondary-light my-1 p-2 flex-column'>
                        <div className='d-flex justify-content-between '>
                            <div className='text-white '><label className='bg-dark p-1 rounded'>2</label></div>
                            <div className=''><label htmlFor=""><strong>Order And Delivery Details</strong></label></div>
                        </div>

                        <div className='d-flex justify-content-between p-2'>
                            <div className='align-self-center m-2'>
                                <button className='btn bg-dark text-white m-1'>Gift 1</button>
                                <img className="img-thumbnail-custom rounded" src="https://img.freepik.com/free-photo/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.jpg?w=360&t=st=1659981086~exp=1659981686~hmac=58a30a6d203b3378ffda9121b0773b2f882101eb49d1c477ec49bc1129fc1c14" alt="photo" />
                            </div>
                            <div className='align-self-center m-2'>
                                <h6 htmlFor="">Frosty Chocolate Cake</h6>
                                <h6 htmlFor="">Rs 595 * 1Round 1/2 KG</h6>
                                <h6 htmlFor="">Frosty Chocolate Cake</h6>
                                <h6 htmlFor="">Eggless</h6>
                                <h6 htmlFor="">Chocolate Flavour</h6>
                            </div>
                            <div className='align-self-center'>
                                <h6 htmlFor="">Delivery ON</h6>
                                <h6 htmlFor=""><strong>Sat, 7 Aug, 2022</strong></h6>
                                <h6 htmlFor="">Standard Delivery</h6>
                                <h6 htmlFor="">  08:00 - 15:00 hrs</h6>
                            </div>
                            <div className='align-self-center btn bg-dark text-white'>change</div>
                        </div>
                    </div>
                    <div className='d-flex flex-column w-25 m-1'>
                        <label htmlFor="">Message on Cake</label>
                        <input type="text" name="" id="" />
                    </div>
                </div>




            </Col>
            <Col>
                <div className='right-main d-flex flex-column bg-secondary-light p-3'>
                    <div className=''>
                        <div>
                            <label htmlFor=""><strong>Price Details</strong></label>
                        </div>
                    </div>
                    <div className=''>
                        <div className='d-flex justify-content-between'>
                            <div htmlFor="">Total Product Price </div>
                            <div htmlFor="">Rs 595</div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='d-flex justify-content-between'>
                            <div htmlFor="">Total Product Price </div>
                            <div htmlFor="">Rs 595</div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='d-flex justify-content-between'>
                            <div htmlFor="">Total Product Price </div>
                            <div htmlFor="">Rs 595</div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <strong>
                        <div className='d-flex justify-content-between'>
                            <div htmlFor="">Total  </div>
                            <div htmlFor="">Rs 620</div>
                        </div>
                        </strong>
                    </div>
                    <div className='mt-3'>
                        <div className='d-flex justify-content-around'>
                            <div htmlFor="">Have a Discount Coupon?  </div>
                            
                        </div>
                    </div>

                </div>
            </Col>
        </>
    )
}
