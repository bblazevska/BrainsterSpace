import React from 'react';
import ImageRight from './ImageRight';
import { AiOutlinePlus } from 'react-icons/ai'
import CardsContainer from './CardsContainer';
import EventSpaceCard from './Cards/EventSpaceCard';
import { IoMdPlanet } from "react-icons/io";
import { IoGlobeOutline, IoRestaurant, IoVolumeLow } from "react-icons/io5";
import { GiMicrophone } from "react-icons/gi";
import { FaRegLightbulb, FaNetworkWired, FaFacebook } from "react-icons/fa";
import { MdCamera } from "react-icons/md";

const EventSpacePage = () => {
    return (
        <div className="m-5">
            <ImageRight title="Простор за настани" img="prostor_za_nastani" 
             content="Нашиот простор се прилагодува според потребите на вашиот настан. Седум различни простори и Space Kitchen. Наменски создадени да се прилагодуваат и менуваат во согласност со типот на настан кој го организирате. Организираме конференции до 150 учесници и обуки и предавања за групо до 20 учесници. Контактирајте не за да ви хостираме одличен настан.">
               <a href="#host"><button className="button-black p-2 pr-2 ml-5"><AiOutlinePlus/> БУКИРАЈ НЕ  </button> </a>
            </ImageRight>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12 mt-5">
                        <h1 className="title text-bold">Нашите простории</h1>
                        <div className="">
                            Комплетно адаптабилни. Една сака за 150 учесници или три помали сали за групи од по 50 учесника. 
                            Училници за од 25 до 40 учесника. Избор од две локации.
                        </div><br/>
                        <div className=""> Пулт за прием. И најважно место за networking-Brainster Kitchen.</div> <br/>
                        <div className=""> Како го замислувате вашиот следен настан?</div>
                    </div>
                    <div className="col-lg-9 col-md-12 col-sm-12 col-12 ">
                        <CardsContainer>
                            <div className="row">
                                <EventSpaceCard title="Brainster" img="2" />
                                <EventSpaceCard title="Конференциска сала" img="EXIBITION_1" />
                                <EventSpaceCard title="Сала со бина" img="C3-2" />
                                <EventSpaceCard title="Адаптибилна училница" img="C3-1" />
                                <EventSpaceCard title="Училница" img="C2-1" />
                                <EventSpaceCard title="Училница" img="C1-1" />
                                <EventSpaceCard title="Хол" img="HOL-KON-SEDENJE" />
                                <EventSpaceCard title="Канцелариски простор" img="C1-4" />
                                <EventSpaceCard title="Space Kitchen" img="KITCHEN_03" />
                            </div>
                        </CardsContainer>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12 col-12">
                        <div className="row">
                             <div className="col-6">
                                <div className="row">
                                     <div className="col">
                                        <img src={require("../assets/images/kitchen5.jpg")} width="100%" height="50%"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <img src={require("../assets/images/kitchen3.jpg")} width="90%"/>
                                    </div>
                                    <div className="col">
                                        <img src={require("../assets/images/kitchen1.jpg")} width="90%"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <img src={require("../assets/images/kitchen2.jpg")} height="100%" width="80%"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <h1 className="title text-bold mb-0">Space Kitchen</h1>
                        <p className="par">
                            Местото каде сите настани започнуваат и завршуваат.
                            Местото каде нашиот тим готви и експериментира.
                            Нашата кујна има само едно правило.
                        </p>
                        <p className="par">
                        Храната мора да биде вегетаријанска. Пијалок, кафе или мезе. Вие одберете вид на кетеринг ние ќе го обезбедиме.
                        </p>
                    </div>
                </div>

                <div className="row mt-5 mb-5">
                    <div className="col-lg-12 col-md-12 col-sm-12 ">
                        <h1 className="text-bold ml-3 mb-4">Нудиме</h1>
                        <div>
                            <div className="div-offers"><IoMdPlanet className="icon-yellow mr-3"/> Простор </div>
                            <div className="div-offers"><IoRestaurant className="icon-yellow mr-3"/> Space Kitchen </div>
                            <div className="div-offers"><IoGlobeOutline className="icon-yellow mr-3"/> Логистика </div>
                            <div className="div-offers"><GiMicrophone className="icon-yellow mr-3"/> Техничка Поддршка </div>
                            <div className="div-offers"><IoVolumeLow className="icon-yellow mr-3"/> Звук </div>
                            <div className="div-offers"><FaRegLightbulb className="icon-yellow mr-3"/> Светло </div>
                            <div className="div-offers"><FaNetworkWired className="icon-yellow mr-3"/> Помош при Организација </div>
                            <div className="div-offers"><MdCamera className="icon-yellow mr-3"/> Видео и фотографија </div>
                            <div className="div-offers"><FaFacebook className="icon-yellow mr-3"/> Промоција на социјални Мрежи </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5" id="host">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12 justify-content-center align-items-center">
                        <h1 className="text-bold ml-5 mb-5 mt-5">Event Host</h1>
                        <div className="ml-5">
                            <div className="font-s-1">Ања Макеска</div>
                            <div className="font-s-1">anja@brainster.co</div>
                            <div className="font-s-1">+389 (0)70 233 414</div>
                        </div>
                        
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <img src={require("../assets/images/anja.jpg" )} width="100%" height="100%"/>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default EventSpacePage;