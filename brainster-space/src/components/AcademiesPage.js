import React from 'react';
import CardsContainer from './CardsContainer';
import ImageRight from './ImageRight';
import AcademiesCard from './Cards/AcademiesCard'


const AcademiesPage = () => {
    return (
        <div className="m-5">
            <ImageRight title="Академии" img="akademii" 
            content="Нашите академии ќе ти помогнат да ги совладаш најбараните вештини на денешницата преку интерактивна настава и практична работа на реални проекти. Инструктори кои се докажани експерти во својата област. Преку нив имаш можност да ги научиш и предвидиш предизвиците на иднината на работење и да се поврзеш со сегашните и идните врвни професионалци и компании. Академиите ќе ти го отворат патот кон кариера каква што посакуваш."/>

            <CardsContainer >
                <div className="row">
                    <AcademiesCard title="Академија за графички дизајн" img="akademii" color="purple" link="https://design.brainster.co/"/>
                    <AcademiesCard title="Академија за дигитален маркетинг" img="edukacija1" color="red" link="https://marketpreneurs.brainster.co/"/>
                    <AcademiesCard title="Академија за Front-end програмирање" img="edukacija" color="green" link="https://codepreneurs.brainster.co/front-end/"/>
                    <AcademiesCard title="Академија за Full-stack програмирање" img="akademii" color="green" link="https://codepreneurs.brainster.co/full-stack/"/>
                    <AcademiesCard title="Академија за Data science " img="edukacija2" color="blue" link="https://datascience.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=data_science"/>
                    <AcademiesCard title="Академија за software testing" img="edukacija" color="green" link="https://qa.brainster.co/"/>
                </div>
            </CardsContainer>
            
        </div>
    );
};

export default AcademiesPage;