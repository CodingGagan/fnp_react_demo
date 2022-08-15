import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Footer from '../../layout/Footer';
import Sub_Footer from '../../layout/Sub_Footer';
import './Cart.css';
function Cart({ cartCount }) {
    const arrCount = 0;
    return (
        <>
            <div className="container cart-border">
                <div className="row heading">
                    <div className="col-sm-6">
                        <p>Product In Cart</p>
                    </div>
                    <div className="col-sm-2">
                        <p>
                            Qty.
                        </p>
                    </div>
                    <div className="col-sm-3">
                        <p>
                            Delivery Options
                        </p>
                    </div>
                    <div className="col-sm-1">
                        <p>
                            Subtotal
                        </p>
                    </div>
                </div>
                {console.log(cartCount)}
                {
                    cartCount.map((el, key) => (

                        <div className="row cart-detial">
                            <div className="col-sm-2 cart-img">
                                <img src="https://www.fnp.com/assets/images/custom/new-desk-home/shop-by-cat/plants_10aug.jpg" alt="" />
                            </div>
                            <div className="col-sm-4">
                                <p>Frosty Chocolate Cake (Eggless) (Half Kg)</p>
                                <p>Rs 595</p>
                            </div>
                            <div className="col-sm-2">
                                <label htmlFor="">-</label>
                                <input type="number" />
                                <label htmlFor="">+</label>
                            </div>
                            <div className="col-sm-2">
                                <p>Standard Delivery (Free) on 01-Aug-2022 Between 08:00 hrs-15:00 hrs at pincode 125050</p>
                            </div>
                            <div className="col-sm-2 text-right">
                                <p>
                                    Rs 595
                                </p>
                            </div>
                            <div className="col-12 text-right">
                                <span className="total_pay margin">
                                    Total Payable Amount : Rs <span className="final_Amount">{arrCount}</span>
                                </span>
                            </div>
                        </div>
                    ))

                }

                <div className="cart-footer">
                    <div className="row">
                        <div className="col-sm-3">
                            <p>Shipping to : 125055</p>
                        </div>
                        <div className="col-sm-3">
                            <span>OR SELECT- COUNTRY</span>
                        </div>
                        <div className="col-sm-6">
                            <h6>Total Amount Payable: Rs 595</h6>
                            <h3>CHECKOUT</h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Sub_Footer />
            <Footer /> */}
        </>
    )
}

export default Cart