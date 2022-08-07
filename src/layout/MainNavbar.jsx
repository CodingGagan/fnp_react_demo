import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaTaxi, FaPlane, FaRupeeSign, FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import styles from './MainNavbar.module.css';
import Home from '../pages/home';

import {
  Link
} from "react-router-dom";
{/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes> */}
function MainNavbar() {

  return (
    <Navbar className={styles.Navbar} expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" id={styles.Brand}>
          <Link to="/">
            <img src="logo/SendMyFeelings-01.png" alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex mx-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 w-75 d-block"
              aria-label="Search"
            /></Form>
          <Nav
            className="d-flex mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              <FaTaxi />
            </Nav.Link>
            <NavDropdown title={<FaRupeeSign />} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2"><FaPlane /></Nav.Link>
            <Nav.Link href="#action2"><FaShoppingCart /></Nav.Link>
            <Nav.Link href="#action2"><FaUserAlt /></Nav.Link>


          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MainNavbar