import React from 'react';

const CardsContainer = ({title, children}) => {
    return (
        <div>
            <h1 className="title text-bold">{title}</h1>
            <div className="container-fluid mb-5">
                {children}
            </div>
        </div>
    );
};

export default CardsContainer;