import React from 'react';

const ImageRight = ({title, content, img, children}) => {
    return (
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12 align-self-center">
                    <h1 className="text-bold">{title}</h1>
                    <p className="par ">{content}</p>
                    {children}
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                    <img /*src={require(`../assets/images/${img}.jpg`).default}*/ src={img} alt="" className="img-right"/>
                </div>
            </div>
        </div>
    );
};

export default ImageRight;