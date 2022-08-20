import React, { useState } from 'react'
import CardComponent from '../component/Card/CardComponent';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import HomeMenuCard from '../component/HomeMenuCard/HomeMenuCard';
import Jumbotron from '../component/Jumbotron/Jumbotron';
import Divider from '../component/Divider/Divider';
import CategoriesBox from '../component/Categories/Categories';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Sub_Footer from '../layout/Sub_Footer';
import Footer from '../layout/Footer';
import BestSelling from '../component/Card/BestSelling';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import TrendingCards from '../component/Card/TrendingCards';

const arrCount = [1, 2, 3, 4, 5, 6];
const CardFirst = [
    { 'image': "official/9_Categories/1.jpg", "title": "Flowers & Cakes" },
    { 'image': "official/9_Categories/2.png", "title": "Personlized Gift" },
    { 'image': "official/9_Categories/3.png", "title": "Find the Perfect Gift" },
    { 'image': "official/9_Categories/4.png", "title": "Birthday Gift" },
    { 'image': "official/9_Categories/5.png", "title": "Annivesary Gift" },
    { 'image': "official/9_Categories/6.png", "title": "Home and Living" },
    { 'image': "official/9_Categories/7.png", "title": "Gifts for Men" },
    { 'image': "official/9_Categories/8.png", "title": "Gifts for Women" },
    { 'image': "official/9_Categories/9.png", "title": "Gifts for Kids" }
];
const menuTitle = [
    { 'icon': "official/Icons/Birthday_Gifts.png", "title": "Birthday Gift" },
    { 'icon': "official/Icons/Anniversary_Gift.png", "title": "Annivesary Gift" },
    { 'icon': "official/Icons/Flower_Gift.jpeg", "title": "Flowers Gift" },
    { 'icon': "official/Icons/Cake_Gifts.jpeg", "title": "Cakes Gift" },
    { 'icon': "official/Icons/Personalized_Gifts.png", "title": "Personlized Gift" },
    { 'icon': "official/Icons/Pant_Gifts.webp", "title": "Plants Gift" },
    { 'icon': "official/Icons/International_Gifts.jpeg", "title": "International" }
];
const bestSelling = [
    { 'icon': "official/Best_Selling_Gifts/1.png", "title": "Birthday Gift" },
    { 'icon': "official/Best_Selling_Gifts/2.png", "title": "Annivesary Gift" },
    { 'icon': "official/Best_Selling_Gifts/3.png", "title": "Flowers Gift" },
    { 'icon': "official/Best_Selling_Gifts/4.png", "title": "Cakes Gift" },
];

const Personalized_Gifts = [
    { 'icon': "official/Personalized_Gifts/1.png", "title": "Birthday Gift" },
    { 'icon': "official/Personalized_Gifts/2.png", "title": "Annivesary Gift" },
    { 'icon': "official/Personalized_Gifts/3.png", "title": "Flowers Gift" },
];


const Home = ({ cartCount, addCart }) => {
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true
    };

    return (
        <>
            <Row>
                <HomeMenuCard menus={menuTitle} />
            </Row>
            <Jumbotron back_img={"official/Slider.png"} />
            <Row>
                {
                    CardFirst.map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={4} xl={4}><CardComponent addCart={addCart} source={el.image} cardContent={el.title} showContent={false} value="200" /></Col>)
                }
            </Row>
            <Divider content="Best Selling Gift" />
            <Row>
                {
                    bestSelling.map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={4} xl={3}><BestSelling source={el.icon} cardContent={"Product details here........"} cardClass="auto-height-cust" showContent={true} value="200" /></Col>)
                }
            </Row>
            <Divider content="Trending Now" />
            <Row>
                {
                    bestSelling.map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={4} xl={3}><TrendingCards source={el.icon} cardContent={"Timeless Love Red Roses Bouquet"} cardClass="auto-height-cust" showContent={true} value="200" /></Col>)
                }
            </Row>
            <div className='borderDesign'>
                <Row>
                    {
                        Personalized_Gifts.slice(0, 4).map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={4} xl={3}><CardComponent checker={key} custContentImg={true} custContent={"Personaized Gift"} source={el.icon} cardContent={"Money Plant In Square Glass Vase"} showContent={false} value="200" /></Col>)
                    }
                </Row>
            </div>
            <div className='borderDesign'>
                <Row>
                    {
                        arrCount.slice(0, 4).map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={4} xl={3}><CardComponent checker={key} custContentImg={true} custContent={"Cake Gift"} source={"https://www.fnp.com/assets/images/custom/new-desk-home/shop-by-cat/idols-1aug.jpg"} cardContent={"Money Plant In Square Glass Vase"} showContent={true} value="200" /></Col>)
                    }
                </Row>
            </div>
            <div className='borderDesign'>
                <Row>
                    {
                        arrCount.slice(0, 4).map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={4} xl={3}><CardComponent checker={key} custContentImg={true} custContent={"Flowers Gift"} source={"https://www.fnp.com/assets/images/custom/new-desk-home/shop-by-cat/idols-1aug.jpg"} cardContent={"Money Plant In Square Glass Vase"} showContent={true} value="200" /></Col>)
                    }
                </Row>
            </div>
            <div className='borderDesign'>
                <Row>
                    {
                        arrCount.slice(0, 4).map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={4} xl={3}><CardComponent checker={key} custContentImg={true} custContent={"Plants Gift"} source={"https://www.fnp.com/assets/images/custom/new-desk-home/shop-by-cat/idols-1aug.jpg"} cardContent={"Money Plant In Square Glass Vase"} showContent={true} value="200" /></Col>)
                    }
                </Row>
            </div>
            <div className='borderDesign'>
                <Row>
                    {
                        arrCount.slice(0, 4).map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={4} xl={3}><CardComponent checker={key} custContentImg={true} custContent={"Combo With Flower"} source={"https://www.fnp.com/assets/images/custom/new-desk-home/shop-by-cat/idols-1aug.jpg"} cardContent={"Money Plant In Square Glass Vase"} showContent={true} value="200" /></Col>)
                    }
                </Row>
            </div>
            <Divider content="Best Categories" />
            <div className="category-div">
                <Row>
                    <CategoriesBox />
                    <CategoriesBox />
                    <CategoriesBox />
                    <CategoriesBox />
                    <CategoriesBox />
                    <CategoriesBox />
                    <CategoriesBox />
                    <CategoriesBox />
                    <CategoriesBox />
                    <CategoriesBox />
                    <CategoriesBox />
                    <CategoriesBox />
                </Row>
            </div>

            <Divider content="Browse By Categories" />
            <div className="container">
                <div className="homeSmallCard">
                    <div className="smallCardHeader">
                        <h5>Occasions</h5>
                        <p>Celebrate each occasion with a gift that has a lasting impression</p>
                    </div>
                    <div className="row occasionCard align-items-center justify-content-center my-3">
                        <div className="col-md-10">
                            <div className="row check">
                                <div className='col-4 d-flex flex-column one'>
                                    <div className='custom-design border-secondary justify-content-center my-2 align-content-end flex-wrap'>
                                        <button className='btn bg-white outline-0 btn-outline-success border-0 w-100' >Birthday</button>
                                    </div>
                                    <div className='custom-design border-secondary justify-content-center my-2 align-content-end flex-wrap'>
                                        <button className='btn bg-white outline-0 btn-outline-success border-0 w-100' >Baby Shower</button>
                                    </div>
                                </div>
                                <div className='col-4 d-flex flex-column two'>
                                    <div className='custom-design border-secondary justify-content-center my-2 align-content-end flex-wrap order-2'>
                                        <button className='btn bg-white outline-0 btn-outline-success border-0 w-100' >Wedding</button>
                                    </div>
                                    <div className='custom-design border-secondary justify-content-center my-2 align-content-end flex-wrap order-1'>
                                        <button className='btn bg-white outline-0 btn-outline-success border-0 w-100' >House Warming</button>
                                    </div>
                                </div>
                                <div className='col-4 d-flex flex-column three'>
                                    <div className='custom-design border-secondary justify-content-center my-2 align-content-end flex-wrap'>
                                        <button className='btn bg-white outline-0 btn-outline-success border-0 w-100' >Anniversary</button>
                                    </div>
                                    <div className='custom-design border-secondary justify-content-center my-2 align-content-end flex-wrap'>
                                        <button className='btn bg-white outline-0 btn-outline-success border-0 w-100' >Best Wishes</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-2">
                            <button className='btn btn-lg bg-secondary-light border border-secondary border-top-0'>Explore More</button>
                        </div>
                    </div>
                </div>
            </div>

            <Divider content="Customer Stories and Reviews" />
            <div className="row customer-cards">
                <Slider {...settings}>
                    <div className="col-sm-4">
                        <div className="customer-card-section">
                            <div className='left-card'>
                                <div className="card-star">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiOutlineStar />
                                </div>
                                <div className="left-card-img">
                                    <img src="official/Combos/1.png" alt="" />
                                </div>
                            </div>
                            <div className='right-card'>
                                <div className="">
                                    <p className='red-mark-statement'>Please Update your tracking system, otherwise happy with the service.</p>
                                    <p className="personName">
                                        Priya a
                                    </p>
                                </div>
                                <div className="productInfo">
                                    <p>Date: 24-08-2022</p>
                                    <p>Location: Chennai</p>
                                    <p>Occasion: General Gifting</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">Hello Moto</div>
                    <div className="col-sm-4">Hello Moto</div>
                </Slider>
            </div>

            <Divider content="Recently Viewed Products" />

            <Container>
                <Slider {...settings}>
                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Delicious Chocolate Cake</h6>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Special Festive Combo</h6>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Delicious Chocolate Cake</h6>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Memorable Love Combo</h6>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Delicious Chocolate Cake</h6>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Memorable Love Combo</h6>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Delicious Chocolate Cake</h6>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                        <h6>Memorable Love Combo</h6>
                    </div>

                </Slider>

            </Container>

            <div className="container">
                <div className="homeSmallCard">
                    <div className="smallCardHeader">
                        <h5>Send Gifts World Wide</h5>
                        <p>A gift to every part of the world</p>
                    </div>
                    <div className="smallCardBody">
                        <div className="cardBody">
                            <div className="img-body">
                                <img src="https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg" className='img-thumbnail' alt="" />
                            </div>
                            <div className="img-content">
                                Demo Content
                            </div>
                        </div>

                        <div className="cardBody">
                            <div className="img-body">
                                <img src="https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg" className='img-thumbnail' alt="" />
                            </div>
                            <div className="img-content">
                                Demo Content
                            </div>
                        </div>

                        <div className="cardBody">
                            <div className="img-body">
                                <img src="https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg" className='img-thumbnail' alt="" />
                            </div>
                            <div className="img-content">
                                Demo Content
                            </div>
                        </div>

                        <div className="cardBody">
                            <div className="img-body">
                                <img src="https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg" className='img-thumbnail' alt="" />
                            </div>
                            <div className="img-content">
                                Demo Content
                            </div>
                        </div>

                        <div className="cardBody">
                            <div className="img-body">
                                <img src="https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg" className='img-thumbnail' alt="" />
                            </div>
                            <div className="img-content">
                                Demo Content
                            </div>
                        </div>
                        <div className="cardBody">
                            <div className="img-body">
                                <img src="https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg" className='img-thumbnail' alt="" />
                            </div>
                            <div className="img-content">
                                Demo Content
                            </div>
                        </div>

                        <div className="cardBody">
                            <div className="img-body">
                                <img src="https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg" className='img-thumbnail' alt="" />
                            </div>
                            <div className="img-content">
                                Demo Content
                            </div>
                        </div>

                        <div className="cardBody">
                            <div className="img-body">
                                <img src="https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg" className='img-thumbnail' alt="" />
                            </div>
                            <div className="img-content">
                                Demo Content
                            </div>
                        </div>

                        <div className="cardBody">
                            <div className="img-body">
                                <img src="https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg" className='img-thumbnail' alt="" />
                            </div>
                            <div className="img-content">
                                Demo Content
                            </div>
                        </div>

                        <div className="cardBody">
                            <div className="img-body">
                                <img src="https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg" className='img-thumbnail' alt="" />
                            </div>
                            <div className="img-content">
                                Demo Content
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Sub_Footer />
            <Footer />
        </>
    )
}

export default Home