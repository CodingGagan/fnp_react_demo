import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './Login.css';
function Login() {
  return (
    // <div className="loginPage">
    <>
      <div className="bg-image">

      </div>
      <Row id="inner-page">
        <Col sm={6}>
          <div className="center-div">
            <div className="col gr-back position-relative">
              <span className="cusBtn">1</span>
              <h5>LOGIN/REGISTER</h5>
              <input type="text" placeholder='EMAIL ID OR MOBILE NUMBER' className="control-form" />
              <button className="btn btn-danger">
                Continue
              </button>
            </div>
            <div className="col">Or Login Using</div>

            <div className="col">

              <div className="btn btn-info fb">Facebook</div>
              <div className="btn btn-info google">+ Google</div>
            </div>

            <div className="col position-relative">
              <span className="cusBtn">2</span>

              <p className="gr-back p-1">Order & Delivery Details</p>
            </div>
            <div className="col position-relative">
              <span className="cusBtn">3</span>

              <p className="gr-back p-1">Payment Options</p>
            </div>
          </div>
        </Col>
        <Col sm={6} className="rightPage position-relative">
          <div className="imgBox">
            <img src="logo/SendMyFeelings-01.png" alt="" />
          </div>
        </Col>
      </Row>
    </>

  )
}

export default Login