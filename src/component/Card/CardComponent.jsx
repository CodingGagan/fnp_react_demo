import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './CardComponent.css';
export default function CardComponent({ source, showContent, value, cardContent, custContentImg, custContent, checker }) {
    return (
        <Card >
           <>
                <Card.Img variant="top" src={source} />
                {custContentImg && checker == 0 ? <div className="customCenterContent"><h2>{custContent}</h2></div> : ''}
            </>
            {
                showContent ?
                    <>
                       {checker != 0 ? <Card.Body>
                            <Card.Title>{cardContent}</Card.Title>
                            <Card.Text>Rs {value}</Card.Text>
                        </Card.Body> : ''}
                    </>
                    :
                    <>
                     {checker != 0 ?   <div className='cardContent'>
                            {cardContent}
                        </div> : ''}
                    </>
            }
        </Card>
    )
}
