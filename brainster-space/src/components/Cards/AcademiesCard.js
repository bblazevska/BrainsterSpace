import React, { createFactory } from 'react';
import { Card } from 'react-bootstrap';
import {BsPerson} from 'react-icons/bs';
import {FaRegCalendarAlt} from 'react-icons/fa';
import {FiClock} from 'react-icons/fi';
import {FaHandshake} from 'react-icons/fa';

const AcademiesCard = ({title, img, color, link}) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 academy-card ">
            <a href={link} target="_blank" rel="noreferrer">
                <Card className="text-white d-flex mb-4 p-3  card-lift scale">
                    <Card.Img style={{height: '500px'}} src={require(`../../assets/images/${img}.jpg`)}/>
                    <Card.ImgOverlay className={`img-overlay ${color}`}>
                        <Card.Title className="title margin-b" style={{fontSize: '3rem'}}>{title}</Card.Title>
                        <Card.Text className="card-transition">
                        <div className="text-bold  absolute-bottom" style={{fontSize:'1rem',fontWeight:'lighter'}}>
                            <div className="c-white"> <BsPerson className="mb-1 mr-1 iconSize c-white"/>Слободни места: 4</div>
                            <div className="c-white"> <FaRegCalendarAlt className="mb-1 mr-1 iconSize c-white"/> Уписи до: 26.08.2019</div>
                            <div className="c-white"> <FiClock className="mb-1 mr-1 iconSize c-white"/>Стани дизајнер за 7 месеци</div>
                            <div className="c-white"><FaHandshake className="mb-1 mr-1 iconSize c-white"/>Партнери за вработување: 5</div>
                        </div>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </a>
            
        </div>
    );
};

export default AcademiesCard;