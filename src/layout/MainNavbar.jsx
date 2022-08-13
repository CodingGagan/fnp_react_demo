import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaTaxi, FaPlane, FaRupeeSign, FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import styles from './MainNavbar.module.css';
import './burgermenu.css';
import { GiCakeSlice } from "react-icons/gi";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Col, Row } from 'react-bootstrap';
import CardComponentForMenu from '../component/Card/CardComponentForMenu';
// import Sidebar from './Sidebar/Sidebar';
import {
  Link
} from "react-router-dom";

function MainNavbar({ cartOpen }) {
  const arrCount = [1, 2, 3, 4, 5, 6];
  const [tabIndex, setTabIndex] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const unmountedStyle = {
    animation: "outAnimation 270ms ease-out",
    animationFillMode: "forwards"
  };

  return (
    <>
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

              <Nav.Link href="#action2" onClick={cartOpen}><FaShoppingCart /></Nav.Link>
              <Nav.Link>
                <Link to="/login">

                  <FaUserAlt />
                </Link>
              </Nav.Link>


            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar className={styles.SubNavbar} expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" id={styles.SubBrand}>
            <input type="checkbox" onClick={() => setShowMenu(!showMenu)} id="burger-toggle" />
            <label htmlFor="burger-toggle" class="burger-menu">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </label>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id={styles.subNavbarScroll}>

            <Nav
              className="d-flex my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link>
                <Link to="/checkout_details">
                  Checkout Details
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/cart">
                  Open Cart
                </Link>
              </Nav.Link>
              <Nav.Link>

                <Link to="/categories">
                  Categories
                </Link>
              </Nav.Link>
              <Nav.Link href="#action1">
                SAME DAY DELIVERY
              </Nav.Link>

              <Nav.Link href="#action2">
                Birthday Gifts
              </Nav.Link>

              <Nav.Link href="#action2">
                Plants
              </Nav.Link>


            </Nav>

          </Navbar.Collapse>
        </Container>

      </Navbar>


      {

        showMenu ?
          <div style={unmountedStyle} className='BorderInception menu'>
            <Tabs selectedIndex={tabIndex} onSelect={tabIndex => setTabIndex(tabIndex)}>
              <TabList>
                <Tab onMouseEnter={() => setTabIndex(0)}>
                  <GiCakeSlice />
                  <p>Birthday</p>
                </Tab>
                <Tab onMouseEnter={() => setTabIndex(1)}>
                  <GiCakeSlice />
                  <p>Special Gift</p>
                </Tab>
                <Tab onMouseEnter={() => setTabIndex(2)}>
                  <GiCakeSlice />
                  <p>Flowers</p>
                </Tab>
                <Tab onMouseEnter={() => setTabIndex(3)}>
                  <GiCakeSlice />
                  <p>Cakes</p>
                </Tab>
                <Tab onMouseEnter={() => setTabIndex(4)}>
                  <GiCakeSlice />
                  <p>Personlized</p>
                </Tab>
                <Tab onMouseEnter={() => setTabIndex(5)}>
                  <GiCakeSlice />
                  <p>For Her</p>
                </Tab>
                <Tab onMouseEnter={() => setTabIndex(6)}>
                  <GiCakeSlice />
                  <p>Occasions</p>
                </Tab>
                <Tab onMouseEnter={() => setTabIndex(7)}>
                  <GiCakeSlice />
                  <p>State Wise</p>
                </Tab>
                <Tab onMouseEnter={() => setTabIndex(8)}>
                  <GiCakeSlice />
                  <p>Last One</p>
                </Tab>
              </TabList>

              <TabPanel>
                <Container fluid>
                  <Row>
                    {
                      arrCount.map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={3} xl={2}><CardComponentForMenu menuCards={true} title="Birthday" value="200" /></Col>)
                    }
                  </Row>
                </Container>
              </TabPanel>
              <TabPanel>
                <Container fluid>
                  <Row>
                    {
                      arrCount.map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={3} xl={2}><CardComponentForMenu menuCards={true} title="Special Gift" value="200" /></Col>)
                    }
                  </Row>
                </Container>
              </TabPanel>
              <TabPanel>
                <Container fluid>
                  <Row>
                    {
                      arrCount.map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={3} xl={2}><CardComponentForMenu menuCards={true} title="Flowers" value="200" /></Col>)
                    }
                  </Row>
                </Container>
              </TabPanel>
              <TabPanel>
                <Container fluid>
                  <Row>
                    {
                      arrCount.map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={3} xl={2}><CardComponentForMenu menuCards={true} title="Cakes" value="200" /></Col>)
                    }
                  </Row>
                </Container>
              </TabPanel>
              <TabPanel>
                <Container fluid>
                  <Row>
                    {
                      arrCount.map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={3} xl={2}><CardComponentForMenu menuCards={true} title="Personlized" value="200" /></Col>)
                    }
                  </Row>
                </Container>
              </TabPanel>
              <TabPanel>
                <Container fluid>
                  <Row>
                    {
                      arrCount.map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={3} xl={2}><CardComponentForMenu menuCards={true} title="For Her" value="200" /></Col>)
                    }
                  </Row>
                </Container>
              </TabPanel>
              <TabPanel>
                <Container fluid>
                  <Row>
                    {
                      arrCount.map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={3} xl={2}><CardComponentForMenu menuCards={true} title="Occassions" value="200" /></Col>)
                    }
                  </Row>
                </Container>
              </TabPanel>
              <TabPanel>
                <Container fluid>
                  <Row>
                    {
                      arrCount.map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={3} xl={2}><CardComponentForMenu menuCards={true} title="State Wise" value="200" /></Col>)
                    }
                  </Row>
                </Container>
              </TabPanel>
              <TabPanel>
                <Container fluid>
                  <Row>
                    {
                      arrCount.map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={3} xl={2}><CardComponentForMenu menuCards={true} title="Last One" value="200" /></Col>)
                    }
                  </Row>
                </Container>
              </TabPanel>

            </Tabs>
          </div>
          :
          ''
      }
    </>
  );
}
export default MainNavbar