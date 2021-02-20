import React, { createFactory } from 'react';
import { Card } from 'react-bootstrap';
import {BsPerson} from 'react-icons/bs';
import {FaRegCalendarAlt} from 'react-icons/fa';
import {FiClock} from 'react-icons/fi';
import {FaHandshake} from 'react-icons/fa';

const AcademiesCard = ({title, img, color, link, content}) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <a href={link} target="_blank" rel="noreferrer">
                <Card className="text-white d-flex mb-4 card-lift scale">
                    <Card.Img style={{height: '500px'}} src={require(`../../assets/img/${img}.jpg`).default}/>
                    <Card.ImgOverlay className={`img-overlay ${color}`}>
                        <Card.Title className="title margin-b" style={{fontSize: '3rem'}}>{title}</Card.Title>
                        <Card.Text>
                        <ul className="text-bold  " style={{fontSize:'1rem',fontWeight:'lighter'}}>
                            <li > <BsPerson className="mb-1 mr-1 iconSize"/>Слободни места: 4</li>
                            <li> <FaRegCalendarAlt className="mb-1 mr-1 iconSize"/> Уписи до: 26.08.2019</li>
                            <li> <FiClock className="mb-1 mr-1 iconSize"/>Стани дизајнер за 7 месеци</li>
                            <li><FaHandshake className="mb-1 mr-1 iconSize"/>Партнери за вработување: 5</li>
                        </ul>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </a>
            
        </div>
    );
};

export default AcademiesCard;