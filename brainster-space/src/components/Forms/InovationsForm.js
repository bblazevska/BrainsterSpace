import React from "react";
import { IoArrowForward } from "react-icons/io5";

const InovationsForm = ({ handleSubmit, handleClose }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2 class="title">Приклучи се</h2>
      <div className="form-group">
        <label htmlFor="name"> Име и Презиме(задолжително)</label> <br/>
        <input
          type="text"
          id="name"
          size="30"
          class="form-controll"
          placeholder="Внесете Име и Презиме"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Телефонски Број(задолжително)</label> <br/>
        <input
          type="text"
          id="phone"
          size="30"
          class="form-controll"
          placeholder="Внесете Телефонски број"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Адреса(задолжително)</label> <br/>
        <input
          type="email"
          id="email"
          size="30"
          class="form-controll"
          placeholder="Внесете email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="company-name">Име на Компанија(незадолжително)</label> <br/>
        <input
          type="text"
          id="company-name"
          size="30"
          class="form-controll"
          placeholder="Внесете име на вашата компанија"
        />
      </div>
      <div className="form-group">
        <label htmlFor="company-needs">
          Потреби на компанијата(незадолжително)
        </label>
        <br/>
        <textarea
          id="company-needs"
          cols="45"
          rows="5"
          placeholder="Во 300 карактери, опишете зошто сакате да соработувме"
        />
      </div>
      <div className="form-group d-flex">
      <button className="ml-4 button-black" type="submit">
        <IoArrowForward /> ИСПРАТИ
      </button>
      </div>
      
    </form>
  );
};

export default InovationsForm;
