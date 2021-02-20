import React from 'react';

const ImageRight = ({title, content, img, children}) => {
    return (
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12 align-self-center">
                    <h1>{title}</h1>
                    <p className="par mb-5">{content}</p>
                    <br/>
                    {children}
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                    <img src={require(`../assets/images/${img}.jpg`).default} alt="" className="img-right"/>
                </div>
            </div>
        </div>
    );
};

export default ImageRight;