import React from 'react';
import Card from 'react-bootstrap/Card';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import './CardComponent.css';
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
export default function BestSelling({ cardClass, source, showContent, value, cardContent, custContentImg, custContent, checker }) {
    return (
        <Card id={cardClass}>
            <Link to="/product_details">

                <>
                    <Card.Img variant="top" src={source} />
                    {custContentImg && checker == 0 ? <div className="customCenterContent"><h2>{custContent}</h2></div> : ''}
                    <span className="wishList">
                        <AiOutlineHeart />
                    </span>
                    <div className="ribbon">Customizable</div>
                </>
                {
                    showContent ?
                        <>
                            {checker != 0 ? <Card.Body>
                                <Card.Title>{cardContent}</Card.Title>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiOutlineStar />
                                <small>4 star (437)</small>
                                <Card.Text>{value} Rs</Card.Text>
                                <Card.Text>Earliest Delivery: Today</Card.Text>
                            </Card.Body> : ''}
                        </>
                        :
                        <>
                            {checker != 0 ? <div className='cardContent'>
                                {cardContent}
                            </div> : ''}
                        </>
                }
            </Link>
            {/* <button className='btn btn-danger' onClick={addCart}>+</button> */}
        </Card>
    )
}
