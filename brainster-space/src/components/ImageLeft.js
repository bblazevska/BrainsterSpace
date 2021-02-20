import React from 'react';

const ImageLeft = ({title, img, content, children, id }) => {
    return (
        <div className="container-fluid my-5" id={id}>
            <div className="row">
                <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                    <img src={require(`../assets/images/${img}.jpg`).default} alt="" className="img-left"/>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 col-12 text-linetrough align-self-center">
                    <span className="pill text-bold mt-2">SOLD OUT</span>
                    <h1 className="text-bold">{title}</h1>
                    <p className=" par mb-5">{content}</p>
                    <br/>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ImageLeft;