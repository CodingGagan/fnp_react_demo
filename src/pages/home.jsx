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



const Home = ({ cartCount, addCart }) => {
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true
    };

    return (
        <>
            <Row>
                <HomeMenuCard menus={menuTitle} />
            </Row>
            <Jumbotron back_img={"https://images.pexels.com/photos/6102145/pexels-photo-6102145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
            <Row>
                {
                    CardFirst.map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={4} xl={4}><CardComponent addCart={addCart} source={el.image} cardContent={el.title} showContent={false} value="200" /></Col>)
                }
            </Row>
            <Divider content="Best Selling Gift" />
            <Row>
                {
                    arrCount.map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={4} xl={3}><CardComponent source={"official/9_Categories/2.png"} cardContent={"Money Plant In Square Glass Vase"} showContent={true} value="200" /></Col>)
                }
            </Row>
            <div className='borderDesign'>
                <Row>
                    {
                        arrCount.slice(0, 4).map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={4} xl={3}><CardComponent checker={key} custContentImg={true} custContent={"Personaized Gift"} source={"https://www.fnp.com/assets/images/custom/new-desk-home/shop-by-cat/idols-1aug.jpg"} cardContent={"Money Plant In Square Glass Vase"} showContent={true} value="200" /></Col>)
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
                    <div className="row occasionCard">
                        
                    </div>
                </div>
            </div>

            <Divider content="Customer Stories and Reviews" />

            <Divider content="Recently Viewed Products" />

            <Container>
                <Slider {...settings}>
                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
                    </div>

                    <div className='slideReviews'>
                        <Link to="/product_details">
                            <img src="https://www.fnp.com/images/pr/l/v20220520190338/beautiful-mixed-roses-moon-basket_1.jpg" alt="" />
                        </Link>
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