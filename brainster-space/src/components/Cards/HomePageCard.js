import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'

const HomePageCard = ({title, content, a, img, link, onClick}) => {
    return (
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex">
                    {a === true ? (<a href={link} target="_blank" className="card-link">
                        <Card className="mb-4 card-lift">
                            <Card.Img variant="top" src={require(`../../assets/images/${img}.jpg`).default} style={{height: '350px'}} />
                            <Card.Body>
                                 <Card.Title className="text-bold">{title}</Card.Title>
                                 <Card.Text>{content}</Card.Text>
                                 <IoArrowForwardCircleOutline className="arrow-btn" />
                            </Card.Body>
                        </Card>
                    </a>) : link === '#coworking' ? (
                        <LinkScroll to={link} spy={true} smooth={true}>
                            <Card className="mb-4 card-lift">
                            <Card.Img variant="top" src={require(`../../assets/images/${img}.jpg`).default} style={{height: '350px'}} />
                            <Card.Body>
                                 <Card.Title className="text-bold">{title}</Card.Title>
                                 <Card.Text>{content}</Card.Text>
                                 <IoArrowForwardCircleOutline className="arrow-btn" />
                            </Card.Body>
                        </Card>
                        </LinkScroll>
                    ) : (<Link to={link} className="card-link" onClick={onClick}>
                        <Card className="mb-4 card-lift">
                            <Card.Img variant="top" src={require(`../../assets/images/${img}.jpg`).default} style={{height: '350px'}} />
                            <Card.Body>
                                 <Card.Title className="text-bold">{title}</Card.Title>
                                 <Card.Text>{content}</Card.Text>
                                 <IoArrowForwardCircleOutline className="arrow-btn" />
                            </Card.Body>
                        </Card>
                    </Link>)}
                </div>
          
    )
}

export default Card;