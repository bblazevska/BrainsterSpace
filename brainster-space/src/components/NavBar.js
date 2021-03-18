
import React, { Component } from 'react';
import JoinForm from './Forms/JoinForm';
import {NavLink} from 'react-router-dom';
import Logo from './Logo';
import ModalClass from './ModalClass';
import { Link } from 'react-scroll'

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            fromOutside: false,
            checked: false
        };
    }
    openModal = () => this.setState({ isOpen: true })
    closeModal = () => this.setState({ isOpen: false });
    handleSubmit = (e) => {
        e.preventDefault();
    }

    fromOutsite = () => {
        this.setState({ fromOutside: true })
    }
    fromHome = () => {
        this.setState({ fromOutside: false })
    }

    unCheck = () =>  {
        this.setState({
            checked:false
        })
    }
    check = () => {
        this.setState({
            checked:!this.state.checked
        })
    }


    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <div className="row mx-5 mt-3 mt-lg-3 mt-md-3 mt-sm-0 mt-0">
                        <div className="col-md d-flex m-3 align-items-center ">
                            <NavLink className="mr-auto ml-3 logoIcon navlink" to="/" onClick={ () => {this.fromHome(); this.unCheck()}} >
                                <Logo width="70" height="70"/>
                            </NavLink>
                            
                            <label for="hamburger" className="mt-2 mb-2" id="label" onClick={this.check} >&#9776;</label>
                            <input type="checkbox" id="hamburger"  checked={this.state.checked} />

                            <div className=" mt-2 navitems d-flex">

                                <NavLink  className="c-black m-3 font-s-1 card-line navlink" to="/events" onClick={()=> {this.fromOutsite(); this.unCheck()}}>Настани</NavLink>

                                {this.state.fromOutside
                                ? (<NavLink className="c-black font-s-1 m-4 card-line navlink" to="/#coworking" onClick={() => {this.fromHome()}}>Co-Working</NavLink>)
                                : (<Link to="#coworking" smooth={true} spy={true} className="c-black font-s-1 m-3 card-line navlink" style={{ cursor: 'pointer' }} onClick={this.unCheck} >Co-Working </Link>)}
                                
                                <NavLink  className="c-black m-3 font-s-1 card-line navlink" to="/academies" onClick={()=> {this.fromOutsite(); this.unCheck()}}>Академии</NavLink>

                                <NavLink  className="c-black m-3 font-s-1 card-line navlink" to="/events_space" onClick={()=> {this.fromOutsite(); this.unCheck()}}>Простор за настани</NavLink>

                                <NavLink  className="c-black m-3 font-s-1 card-line navlink" to="/partners" onClick={() => {this.openModal()}}>Партнерства</NavLink>

                                    {this.state.isOpen ? <ModalClass handleClose={this.closeModal} isOpen={this.state.isOpen} handleSubmit={this.handleSubmit}>
                                        <JoinForm/>
                                    </ModalClass> : null}

                                <button className="ml-auto pb-2 button-yellow nav-button p-3" onClick={this.openModal}>+ ПРИКЛУЧИ СЕ</button>
                                    {this.state.isOpen ? <ModalClass handleClose={this.closeModal} isOpen={this.state.isOpen} handleSubmit={this.handleSubmit}>
                                        <JoinForm/>
                                    </ModalClass> : null}
                           </div>
                           <button className="ml-auto pb-2 button-black main-button p-3" onClick={this.openModal}>+ ПРИКЛУЧИ СЕ</button>
                                    {this.state.isOpen ? <ModalClass handleClose={this.closeModal} isOpen={this.state.isOpen} handleSubmit={this.handleSubmit}>
                                        <JoinForm/>
                                    </ModalClass> : null}
                        </div>
                    </div>   
                </div>
            </div>
        );
    }
};

export default Navbar;