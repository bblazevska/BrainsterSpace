import React from 'react';
import { IoArrowForward } from "react-icons/io5";

const InovationsForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
        <h1>Приклучи се</h1>
        <div className="form-group">
            <label htmlFor="name"> Име и Презиме(задолжително)</label>
            <input type="text" id="name" class="form-controll" placeholder="Внесете Име и Презиме" required/>
        </div>
        <div className="form-group">
            <label htmlFor="phone">Телефонски Број(задолжително)</label>
            <input type="text" id="phone" class="form-controll" placeholder="Внесете Телефонски број" required/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email Адреса(задолжително)</label>
            <input type="email" id="email" class="form-controll" placeholder="Внесете email" required/>
        </div>
        <div className="form-group">
            <label htmlFor="company-name">Име на Компанија(незадолжително)</label>
            <input type="text" id="company-name" class="form-controll" placeholder="Внесете име на вашата компанија"/>
        </div>
        <div className="form-group">
            <label htmlFor="company-needs">Потреби на компанијата(незадолжително)</label>
            <textarea id="company-needs" cols="30" rows="8"
            placeholder="Во 300 карактери, опишете зошто сакате да соработувме" />
        </div>
        <button className="ml-4 black-button float-left" type="submit">
            <IoArrowForward/> Испрати
        </button>
        
    </form>
    );
};

export default InovationsForm;