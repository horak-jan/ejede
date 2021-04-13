import React, { useState } from "react";
import { useForm } from "react-hook-form";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import cs from "date-fns/locale/cs";
registerLocale("cs", cs);

const axios = require("axios").default;

import { useStateValue } from "../../../state";

const CarForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [message, setMessage] = useState("");
  const [{ selectedCar }, dispatch] = useStateValue();
  let { _id, make, model } = selectedCar.car;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onSubmit = async (data) => {
    let completeData = {
      carId: _id,
      startDate: startDate,
      endDate: endDate,
      ...data,
    };
    try {
      console.log(completeData);
      const resp = await axios.post("api/booking", completeData);

      setMessage(resp.data.message);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  return (
    <div className="car-form">
      <h2>Rezervace</h2>
      <h3>{message}</h3>
      <p>Zapůjčení</p>
      <DatePicker
        selected={startDate}
        locale="cs"
        onChange={(date) => setStartDate(date)}
      />
      <p>Vrácení</p>
      <DatePicker
        selected={endDate}
        locale="cs"
        onChange={(date) => setEndDate(date)}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        {/*  name */}
        <label htmlFor="firstName">Jméno</label>
        <input
          name="firstName"
          ref={register({
            required: "Toto pole je nutné vyplnit.",
            minLength: { value: 3, message: "Jméno musí být delší." },
            pattern: {
              value: /^[A-Za-zěščřžýáíéů]+$/i,
              message: "Speciální znaky a čísla nejsou povoleny.",
            },
          })}
        />
        {errors.firstName && (
          <p className="form-error">{errors.firstName.message}</p>
        )}
        {/* lastname */}
        <label htmlFor="lastName">Příjmení </label>
        <input
          name="lastName"
          ref={register({
            required: "Toto pole je nutné vyplnit.",
            minLength: { value: 3, message: "Jméno musí být delší." },
            pattern: {
              value: /^[A-Za-zěščřžýáíéů]+$/i,
              message: "Speciální znaky a čísla nejsou povoleny.",
            },
          })}
        />
        {errors.lastName && (
          <p className="form-error">{errors.lastName.message}</p>
        )}
        {/* phone contact */}
        <label htmlFor="mobil">Telefon</label>
        <input
          name="mobil"
          ref={register({
            required: "Toto pole je nutné vyplnit.",
            minLength: { value: 9, message: "Telefoní číslo je moc krátké" },

            maxLength: { value: 9, message: "Telefoní číslo je moc dlouhé." },
          })}
        />
        {errors.mobil && <p className="form-error">{errors.mobil.message}</p>}
        {/* email contact */}
        <label htmlFor="email">Emailová adresa</label>
        <input
          name="email"
          ref={register({
            required: "Toto pole je nutné vyplnit.",
            minLength: { value: 8, message: "Email je moc krátký" },
          })}
        />
        {errors.email && <p className="form-error">{errors.email.message}</p>}

        <p className="predmet">
          Předmět: Rezervace {make} {model}
        </p>

        <label htmlFor="notes">Zpráva</label>
        <input
          className="notes"
          name="notes"
          ref={register({
            required: "Toto pole je nutné vyplnit.",
          })}
        />

        <p>
          Odesláním formuláře souhlasíte se zpracováním{" "}
          <a href="/osobniudaje">osobních údajů</a>.
        </p>
        <div className="buttonWrapper">
          <button type="submit">Odeslat</button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
