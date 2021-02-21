import { Popover } from 'bootstrap';
import React from 'react';
import {NavLink} from 'react-router-dom';
import { OverlayTrigger } from 'react-bootstrap';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { ImLinkedin } from 'react-icons/im';
import Logo from './Logo'

const Footer = () => {
    const popup = (<Popover>
        <Popover.Content>
            <span>
                Емаил: <br/>
                anja@brainster.co <br/>
                <br/>
                Телефон: <br/>
                070 233 414
            </span>
        </Popover.Content>
    </Popover>)
    return (
        <div className="Footer footer apsolute-bottom">
            <div className="row m-3">
                <div className="col-lg-3 col-md-4 col-sm-12  col-xs-12 order-lg-1 order-md-1 order-sm-2 order-2 mb-5 mt-3">
                    <h3 className="mb-3">Корисни линкови</h3>
                    <ul>
                        <OverlayTrigger trigger="hover" placement="top" overlay={popup}>
                            <li className="col-black">Контакт</li>
                        </OverlayTrigger>
                        <a className="col-black" href="https://warelaika.com" target="_blank" >
                            <li>Отворени позиции</li>
                        </a>
                        <a className="col-black" href="https://medium.com//brainster-space-the-" target="_blank">
                            <li>Галерија</li>
                        </a>
                        <NavLink className="col-black" to="/events" >
                            <li>Календар</li>
                        </NavLink>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 order-lg-2 order-md-2 order-sm-3 order-3 mb-5 mt-3  ">
                    <h3>Социјални Мрежи</h3>
                    <div className="d-flex mt-4 ml-2">
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/brainster.co"><FaFacebook className="icon facebook mr-5" /></a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/school/brainster-co/"><ImLinkedin className="icon linkedin mr-5" /></a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/brainsterco/"><FiInstagram className="icon instagram" /></a>
                        
                    </div>
                </div>

                <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12 order-lg-3 order-md-3 order-sm-1 order-1 d-flex justify-content-lg-end justify-content-md-end
                justify-content-sm-start
                justify-content-xs-start
                align-items-center mb-5">
                    <Logo className="logo mb-5" width="100" height="100"/>
                </div>
            </div>
            <div className="bottom-section">
                <p>COPYRIGHT&copy;BrainsterSpace. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;