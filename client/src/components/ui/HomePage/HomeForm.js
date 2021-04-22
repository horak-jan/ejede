import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { useStateValue } from "../../../state";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { registerLocale } from "react-datepicker";
import cs from "date-fns/locale/cs";
registerLocale("cs", cs);

const HomeForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { register, handleSubmit, watch, errors } = useForm();
  const [{ bookingDate }, dispatch] = useStateValue({});
  const [pickup, setPickup] = useState("Centrum");
  let history = useHistory();

  //set booking dates and pickup place
  const setBookingAndRedirect = (pickup, startDate, endDate) => {
    try {
      dispatch({
        type: "bookDate",
        setPickupPlace: pickup,
        setStartDate: startDate,
        setEndDate: endDate,
      });
      // redirect to browse car
      history.push("/browse");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        {/* start picker */}
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          locale="cs"
          showTimeSelect
          dateFormat="Pp"
          minDate={new Date()}
          minTime={new Date().setHours(8, 0)}
          maxTime={new Date().setHours(18, 0)}
        />
        {/* end picker */}
        <DatePicker
          selected={startDate}
          onChange={(date) => setEndDate(date)}
          showTimeSelect
          locale="cs"
          selected={endDate}
          showTimeSelect
          dateFormat="Pp"
          minDate={startDate}
          minTime={new Date().setHours(8, 0)}
          maxTime={new Date().setHours(18, 0)}
        />
      </div>
      {/* locations */}
      <form>
        <select
          onChange={(e) => setPickup(e.target.value)}
          name="pickupPlace"
          defaultValue="Centrum"
          ref={register}
        >
          <option value="Centrum">Centrum</option>
          <option value="Poruba">Poruba</option>
          <option value="Dubina">Dubina</option>
        </select>
      </form>
      <button onClick={() => setBookingAndRedirect(pickup, startDate, endDate)}>
        Vybrat
      </button>
    </div>
  );
};
export default HomeForm;
