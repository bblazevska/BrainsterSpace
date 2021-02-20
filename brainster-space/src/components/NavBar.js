import React, { Component } from 'react';
import { NavLink } from 'react-bootstrap';
import Logo from './Logo';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <div className="row mt-lg-3 mt-md-3 mt-sm-0 mt-0">
                        <div className="col d-flex m-3 align-items-center">
                            <NavLink className="mr-auto ml-3 logoIcon" to="/" >
                                <Logo width="50" height="50"/>
                            </NavLink>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Navbar;