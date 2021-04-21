import { useForm } from "react-hook-form";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { useStateValue } from "../../../state";
import "react-datepicker/dist/react-datepicker.css";
import cs from "date-fns/locale/cs";
registerLocale("cs", cs);

const EmptyForm = (props) => {
  const { sendForm } = props;
  const { register, handleSubmit, errors } = useForm();
  const [selectedCar] = useStateValue({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onSubmit = (data) => {
    let completeData = {
      carId: selectedCar.selectedCar.car._id,
      startDate: startDate,
      endDate: endDate,
      carImage: selectedCar.selectedCar.car.image[0],
      ...data,
    };
    sendForm(completeData);
  };

  return (
    <>
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
        <label htmlFor="email">Emailová adresa</label>
        <input
          name="email"
          ref={register({
            required: "Toto pole je nutné vyplnit.",
            minLength: { value: 8, message: "Email je moc krátký" },
          })}
        />
        {errors.email && <p className="form-error">{errors.email.message}</p>}
        <p className="predmet">Předmět:</p>
        <p className="grey">
          {" "}
          Rezervace {selectedCar.selectedCar.car.make}{" "}
          {selectedCar.selectedCar.car.model}
        </p>

        <label htmlFor="notes">Zpráva</label>
        <input
          className="notes"
          name="notes"
          ref={register({
            required: "Toto pole je nutné vyplnit.",
          })}
        />
        <p className="grey">
          Odesláním formuláře souhlasíte se zpracováním{" "}
          <a href="/osobniudaje">osobních údajů</a>.
        </p>
        <div className="buttonWrapper">
          <button type="submit">Odeslat</button>
        </div>
      </form>
    </>
  );
};

export default EmptyForm;
