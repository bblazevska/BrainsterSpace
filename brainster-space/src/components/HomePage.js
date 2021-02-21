import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import HomePageCard from './Cards/HomePageCard';
import CardsContainer from './CardsContainer';
import InovationsForm from './Forms/InovationsForm';
import JoinForm from './Forms/JoinForm';
import ImageRight from './ImageRight';
import { BiCalendar } from 'react-icons/bi'

import Modal from "./Modal";
import { Element } from 'react-scroll';

import ImageLeft from './ImageLeft';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import PartnersSection from './PartnersSection';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            title: 'Компании',
            img: 'banner-background-img',
            content: 'Компаниите имаат можност да ги надоградат своите тимови, а со тоа да го подобрат перформансот на својата компанија.'+

            'Дигиталната трансформација се случува, а вашите компании треба да бидат подготвени за да се адаптираат соодветно. Обуки, семинари, курсеви или team building?'+
            
            'Во Brainster Space имаме специјално обучен тим кој е подготвен да ја насочи, адаптира и сподели својата експертиза со денешните потреби на компаниите.'
        };
    }

    openModal = () => this.setState({ isOpen: true})
    closeModal = () => this.setState({ isOpen: false });
    handleSubmit = (e) => {
        e.preventDefault();
    }

    setAcademiesProps = () => {
        this.setState({
            title:"Едукација",
            img:"edukacija1"
        })
    }
    setCompaniesProps = () => {
        this.setState({
            title:"Компании",
            img:"banner-background-img"
        })
    }

    render() {
        const popover = (
            <Popover>
                <Popover.Content>
                    <strong>
                        Местата се распродадени
                        </strong>
                </Popover.Content>
            </Popover>);
        return (
            <div className="HomePage">
                <div className="Banner">
                    <h1>Центар за Учење, Кариера и Иновација</h1>
                </div>
                
                <div className="main-page">

                <CardsContainer title=" За Нас ">
                    <div className="row">
                        <HomePageCard img="edukacija1" title="Едукација" link="https://brainster.co/" a={true}
                        content="Научи практични вештини за трансформација во кариерата. Нашата специјалност е да ти помогнеме да го најдеш правилниот skill set кој ќе одговори на реалните потреби на пазарот на трудот. Организираме курсеви, академии, персонализирани обуки кои одговараат на реалните портеби на денешницата." />
                        <HomePageCard img="nastani" title="Настани" link="/nastani" content="Специјално курирани и организирани настани кои ги поврзуваат правите таленти со иновативните компании. Идејата е да нашата tech заедница расте, се инспирира и креира преку овие настани"/>
                        <HomePageCard img="coworking" title="Coworking"  link="#coworking" content="Биди дел од tech заедницата на иноватори, креативци и претприемачи. Резервирај стол во нашата shered office. Пичирај го твојот бизнис и нашиот тим заедно ќе одлучи секој месец со кого да ги дели своите канцеларии."/>
                        <HomePageCard img="prostor_za_nastani" title="Простор за настани"  link="prostor_za_nastani" content="Имаш идеја за обука или настан од tech областа? Ние имаме простор за реализација. Нашиот тим внимателно ги одбира и курира сите настани." />
                        <HomePageCard img="partnerstva-so-tech-komp" title="Партнерства со Tech компании " onClick={this.openModal} content="Целта и идејата е креирање на tech заедница која ќе се негува,расте и креира подобро утро за сите нас. Преку директно и индиректно поврзување на tech талентите со компаниите." />
                            {this.state.isOpen ? <Modal isOpen={this.state.isOpen} handleSubmit={this.state.handleSubmit}> <JoinForm /></Modal> : null}
                        <HomePageCard img="edukacija2" title="Иновации за компании" onClick={this.openModal} content="Нов концепт кој ќе им помогне на компаниите од стариот во новиот начин на работење. Подгответе ја вашата компанија за дигитална трансформација." />
                        {this.state.isOpen ? <Modal isOpen={this.state.isOpen} handleSubmit={this.state.handleSubmit}> <InovationsForm/> </Modal> : null}
                    </div>
                </CardsContainer>

                <ImageRight title={this.state.title} img={this.state.img} content={this.state.content}>
                    <button className="button-black mr-3 mb-md-3 mb-sm-3 mb-2 p-2" onClick={this.setAcademiesProps}>АКАДЕМИИ</button>
                    <button className="button-yellow mr-3 mb-md-3 mb-sm-3 mb-2 p-2" onClick={this.setCompaniesProps}>КОМПАНИИ</button>
                </ImageRight>

                <CardsContainer title="Настани">
                    <div className="row">
                    <HomePageCard title="Codeworks" img="IMG_7397" link="https://brainster.co" a={true} content="Вистинскиот настан за сите tech таленти кои сакаат да кодираат и да научат што е ново во tech заедницата. Настан кој ги поврзува mid програмерите со IT компаниите.
                    Deep Dive Intensive Seminar
                    Ексклузивни семинати кои комбинираат различни техники на учење" />
                    <HomePageCard title="Deep Dive into Marketing" img="instruktori-nastani" link="https://blog.brainster.co/deep-dive-marketing-davor-bruketa/" a={true} content="Deep Dive into Marketing се серија од интензивни семинари кои се наменски подготвени да ти помогнат да ги совладаш и предвидиш современите промени, предизвици и идните трендови во областа на маркетингот."/>
                    <HomePageCard title="Deep dive into Data Science" img="data-science" link="" a={true} content="Deep Dive into Data Science се серија од интензивни семинари кои се наменски подготвени да ти помогнат да ги совладаш и предвидиш современите промени, предизвици и идните трендови во обласнта на Data Science."/>
                    </div>
                    
                    <div className="d-flex justify-content-end">
                        <NavLink to="/events" className="nav-link">
                            <button className="button-black p-3 mb-md-2 mb-sm-2 d-flex">
                                <BiCalendar className="mr-3 align-self-center"/> КАЛЕНДАР ЗА НАСТАНИ
                            </button>
                        </NavLink>
                    </div>
                </CardsContainer>

                <Element id="#coworking" name="#coworking">
                    <ImageLeft title="Coworking" img="coworking" content="Биди дел од tech заедницата на иноватори, креативци и претприемачи. Резервирај стол во нашата shered office. Пичирај го твојот бизнис и нашиот тим заедно ќе одлучи секој месец со кого да ги дели своите канцеларии.">
                        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                            <button className="button-black text-linetrough btn-linetrough">РЕЗЕРВИРАЈ МЕСТО</button>
                        </OverlayTrigger>
                    </ImageLeft>
                </Element>

                <ImageRight title="Простор за настани" img="prostor_za_nastani" content="Можности за презентации, обуки, конференции, networking настани. Одбери ја просторијата која најмногу ќе одговара на твојата идеја. Го задржуваме правото да одбереме кој настан ќе се организира во нашиот Brainster Space.">
                    <NavLink to="/events_space" className="nav-link">
                        <button className="button-black p-3 ">ВИДИ ГО ПРОСТОРОТ</button>
                    </NavLink>
                </ImageRight>

                <PartnersSection title="Партнери" content="Имаш идеја? Отворени сме за соработка.">
                    <NavLink to="/events_space" className="nav-link">
                        <button className="button-black mt-3 p-3">ВИДИ ГО ПРОСТОРОТ</button>
                    </NavLink>
                </PartnersSection>
                <br/>


                </div>
            </div>
        )
    }
}

export default HomePage;