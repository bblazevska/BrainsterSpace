import React from 'react';
import { Card } from 'react-bootstrap';

const EventSpaceCard = ({img, title}) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex mb-4 jastify-content-sm-center">
            <Card>
                <Card.Img className="event-space-card-img" src={require(`../../assets/images/${img}.jpg`)}/>
                <Card.Title className="text-bold"> {title}</Card.Title>
            </Card>
        </div>
    );
};

export default EventSpaceCard;