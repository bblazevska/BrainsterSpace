import React from "react";
import { IoArrowForward } from "react-icons/io5";

const JoinForm = ({ handleSubmit, handleClose }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="title text-bold">Приклучи се</h2>
      <div className="form-group">
        <label htmlFor="name"> Име и Презиме(задолжително) </label>
        <br/>
        <input
          type="text"
          id="name"
          class="form-controll"
          size="30"
          placeholder="Внесете Име и Презиме"
          required

        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Телефонски Број(задолжително) </label>
        <br/>
        <input
          type="text"
          id="phone"
          class="form-controll"
          size="30"
          placeholder="Внесете Телефонски број"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Адреса </label>
        <br/>
        <input
          type="email"
          id="email"
          class="form-controll"
          size="30"
          placeholder="Внесете email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="company-name">Име на Компанија </label>
        <br/>
        <input
          type="text"
          id="company-name"
          class="form-controll"
          size="30"
          placeholder="Внесете име на вашата компанија"
        />
      </div>
      <div className="form-group">
        <div className="d-flex">
          <label htmlFor="proposal">Предлог за соработка </label>
          <small className="ml-auto">300</small>
        </div>
        <textarea
          name="proposal"
          id="proposal"
          cols="48"
          rows="5"
          placeholder="Во 300 карактери, опишете зошто сакате да соработувме"
        />
      </div>
      <div className="form-group d-flex">
      <button className="ml-4 button-black" type="submit">
        <IoArrowForward /> Испрати
      </button>
      </div>
    </form>
  );
};

export default JoinForm;
