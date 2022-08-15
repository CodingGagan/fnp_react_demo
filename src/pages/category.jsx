import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CardComponent from '../component/Card/CardComponent';
import Category_filter from '../component/Categories/Category_filter';
import Divider from '../component/Divider/Divider';
import Footer from '../layout/Footer';
import Sub_Footer from '../layout/Sub_Footer';
const arrCount = [1, 2, 3, 4, 5, 6];

function category() {
    return (
        <>
            <Category_filter />
            <Divider content="Cakes By Flavours" />
            <Row>
                {
                    arrCount.map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={4} xl={3}><CardComponent source={"https://www.fnp.com/images/pr/l/v20200901213741/pink-unicorn-chocolate-cake_1.jpg"} cardContent={"Money Plant In Square Glass Vase"} showContent={false} value="200" /></Col>)
                }
            </Row>
            <Divider content="Cakes By Types" />
            <Row>
                {
                    arrCount.map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={4} xl={3}><CardComponent source={"https://www.fnp.com/images/pr/l/v20211026183515/adorable-monkey-chocolate-truffle-cake_1.jpg"} cardContent={"Money Plant In Square Glass Vase"} showContent={false} value="200" /></Col>)
                }
            </Row>
            <Divider content="Delicious Cakes" />
            <Row>
                {
                    arrCount.map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={4} xl={3}><CardComponent source={"https://www.fnp.com/images/pr/l/v20200828161920/fruit-overload-cake_1.jpg"} cardContent={"Money Plant In Square Glass Vase"} showContent={false} value="200" /></Col>)
                }
            </Row>
            <Sub_Footer />
            <Footer />
        </>
    )
}

export default category