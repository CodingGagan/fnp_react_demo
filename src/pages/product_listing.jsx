import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CardComponent from '../component/Card/CardComponent';
import SingleHeading from '../component/Card/SingleHeading';
import Category_filter from '../component/Categories/Category_filter';
import Divider from '../component/Divider/Divider';
const arrCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function product_listing() {
    return (
        <>
            <Category_filter circle={false} />
            <Divider content="Cakes By Flavours" />
            <Row>

                {
                    arrCount.slice(0, 9).map((el, key) => <SingleHeading />)
                }

            </Row>
            <Row>
                {
                    arrCount.map((el, key) => <Col key={key} className='home-card-layout' xs={12} sm={6} lg={4} xl={3}><CardComponent source={"https://www.fnp.com/images/pr/l/v20200901213741/pink-unicorn-chocolate-cake_1.jpg"} cardContent={"Money Plant In Square Glass Vase"} showContent={false} value="200" /></Col>)
                }
            </Row>
        </>
    )
}

export default product_listing