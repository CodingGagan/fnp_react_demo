
import './App.css';
import MainNavbar from './layout/MainNavbar';
// import Footer from './layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import ProductDeatils from './pages/product_details';
import CheckoutDeatils from './pages/checkout_details';
import MainCategory from './pages/Admin/Categories/main_category';
import SubCategory from './pages/Admin/Categories/sub_category';
import AdminSidebar from './pages/Admin/Layout/admin_sidebar';

import Login from './pages/Login';
import Sidebar from './layout/Sidebar/Sidebar';
import {
  Route, Routes
} from "react-router-dom";
// import Sub_Footer from './layout/Sub_Footer';
import { useState } from 'react';
import Backdrop from './layout/Backdrop/Backdrop';
import Category from './pages/category';
import ProductListing from './pages/product_listing';
import Cart from './component/Cart/Cart';
import AdminHeader from './pages/Admin/Layout/admin_header';
// import SweetAlert from 'react-bootstrap-sweetalert';

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
  const [cartCount, setCartCount] = useState([1]);

  function addCart() {
    setCartCount(current => [...current, 1]);
    console.log(cartCount);
  }

  // function checkpath() {
  //   if (window.location.pathname == '/login') {
  //     check = false;
  //     alert(check);

  //   } else {
  //     check = true;
  //     alert(check);

  //   }
  // }
  // checkpath();

  // function removeCart(e) {
  //   setCartCount((see) => (people.filter(function (item) {
  //     return item !== e.target.value
  //   }))
  //   )
  // }
  return (
    <>
      {/* <MainNavbar cartOpen={drawerToggleClickHandler} /> */}
      <Sidebar cartCount={cartCount} show={toggle} />
      {backdrop}
      {/* <Container fluid direction="horizontal" gap={3}> */}
      <Routes>
        <Route path="/" element={<Home cartCount={cartCount} addCart={addCart} />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/categories" element={<Category />}></Route>
        <Route path="/cart" element={<Cart cartCount={cartCount} />}></Route>
        <Route path="/product_listing" element={<ProductListing />}></Route>
        <Route path="/checkout_details" element={<CheckoutDeatils />}></Route>
        <Route path="/product_details" element={<ProductDeatils />}></Route>
        <Route path="/checkout_details" element={<CheckoutDeatils />}></Route>
        <Route path="/Admin/Layout/admin_header" element={<AdminHeader />}></Route>
        <Route path="/Admin/Layout/admin_sidebar" element={<AdminSidebar />}></Route>
        <Route path="/Admin/Categories/main_category" element={<MainCategory />}></Route>
        <Route path="/Admin/Categories/sub_category" element={<SubCategory />}></Route>
      </Routes>
    </>
  );
}

export default App;
