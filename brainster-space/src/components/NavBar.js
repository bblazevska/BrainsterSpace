
import React, { Component } from 'react';
import JoinForm from './Forms/JoinForm';
import {NavLink} from 'react-router-dom';
import Logo from './Logo';
import Modal from './Modal';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
    }
    openModal = () => this.setState({ isOpen: true })
    closeModal = () => this.setState({ isOpen: false });
    handleSubmit = (e) => {
        e.preventDefault();
    }


    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <div className="row mx-5 mt-3">
                        <div className="col-md d-flex m-3 align-items-center justify-content-center">
                            <NavLink className="mr-auto ml-3 logoIcon navlink" to="/" >
                                <Logo width="70" height="70"/>
                            </NavLink>
                            
                       
                        <NavLink  className="c-black m-3 font-s-1 card-line navlink" to="/events">Настани</NavLink>
                        <NavLink  className="c-black m-3 font-s-1 card-line navlink" to="/">Co-working</NavLink>
                        <NavLink  className="c-black m-3 font-s-1 card-line navlink" to="/academies">Академии</NavLink>
                        <NavLink  className="c-black m-3 font-s-1 card-line navlink" to="/events_space">Простор за настани</NavLink>
                        <NavLink  className="c-black m-3 font-s-1 card-line navlink" to="/partners" onClick={() => {this.openModal()}}>Партнерства</NavLink>
                        {this.state.isOpen ? <Modal handleClose={this.closeModal} isOpen={this.state.isOpen} handleSubmit={this.handleSubmit}>
                           <JoinForm/>
                        </Modal> : null}
                        <button className="ml-auto pb-2 button-black p-3" onClick={this.openModal}>+ ПРИКЛУЧИ СЕ</button>
                        {this.state.isOpen ? <Modal handleClose={this.closeModal} isOpen={this.state.isOpen} handleSubmit={this.handleSubmit}>
                            <JoinForm/>
                        </Modal> : null}
                         </div> 
                        
                    </div>
                </div>
            </div>
        );
    }
};

export default Navbar;