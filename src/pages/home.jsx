import React from 'react'
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

const arrCount = [1, 2, 3, 4, 5, 6];
const menuTitle = [
    { 'icon': "FcBusinesswoman", "title": "Birthday Gift" },
    { 'icon': "", "title": "Annivesary Gift" },
    { 'icon': "FcBusinesswoman", "title": "Birthday Gift" },
    { 'icon': "", "title": "Annivesary Gift" },
    { 'icon': "", "title": "Annivesary Gift" }
];


function home() {
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
                    arrCount.map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={4} xl={3}><CardComponent source={"https://www.fnp.com/images/pr/l/v20191227124147/lilies-roses-elegant-vase_1.jpg"} cardContent={"Money Plant In Square Glass Vase"} showContent={false} value="200" /></Col>)
                }
            </Row>
            <Divider content="Best Selling Gift" />
            <Row>
                {
                    arrCount.map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={4} xl={3}><CardComponent source={"https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-money-plant-in-square-glass-vase-139335-m.jpg"} cardContent={"Money Plant In Square Glass Vase"} showContent={true} value="200" /></Col>)
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

        </>
    )
}

export default home