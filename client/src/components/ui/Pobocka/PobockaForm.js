import React from "react";
import { useForm } from "react-hook-form";

const PobockaForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="form-wrapper">
      <h2>Napište nám</h2>
      <p>Máte nějaké dotazy? Neváhejte se zeptat!</p>

      <form onSubmit={handleSubmit(onSubmit)}>
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

        <label htmlFor="notes">Poznámky</label>
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

export default PobockaForm;
