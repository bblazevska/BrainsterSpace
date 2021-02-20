import React from 'react';

const PartnersSection = ({title, content, children}) => {
    return (
        <div className="PartnersSection text-center">
            <h1 className="text-bold mb-5">{title}</h1>
            <p>{content}</p>
            {children}
        </div>
    );
};

export default PartnersSection;