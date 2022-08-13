
import './App.css';
import MainNavbar from './layout/MainNavbar';
import Footer from './layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import ProductDeatils from './pages/product_details';
import CheckoutDeatils from './pages/checkout_details';
import Container from 'react-bootstrap/Container';
import Sidebar from './layout/Sidebar/Sidebar';
import {
  Route, Routes
} from "react-router-dom";
import Sub_Footer from './layout/Sub_Footer';
import { useState } from 'react';
import Backdrop from './layout/Backdrop/Backdrop';
import Category from './pages/category';
function App() {
  const [toggle, setToggle] = useState(false);

  const drawerToggleClickHandler = () => {
    console.log("CLicked " + toggle);
    setToggle(!toggle)
  }

  const backdropClickHandler = () => {
    console.log(toggle)
    setToggle(false)
  }

  let backdrop;
  if (toggle) {
    backdrop = <Backdrop closeCart={backdropClickHandler} />;
  }
  return (
    <>
      <MainNavbar cartOpen={drawerToggleClickHandler} />
      <Sidebar show={toggle} />
      {backdrop}
      <Container fluid direction="horizontal" gap={3}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/categories" element={<Category />}></Route>
          <Route path="/product_details" element={<ProductDeatils />}></Route>
          <Route path="/checkout_details" element={<CheckoutDeatils />}></Route>
        </Routes>
      </Container>
      <Sub_Footer />
      <Footer />
    </>
  );
}

export default App;
