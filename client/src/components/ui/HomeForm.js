import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { useStateValue } from "../../state";

const HomeForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [startTime, setStartTime] = useState("12:00");
  const [endTime, setEndTime] = useState("12:00");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setendDate] = useState(
    new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate() + 2
    )
  );

  const [{ bookingDate }, dispatch] = useStateValue();
  let history = useHistory();

  const onSubmit = async (data) => {
    try {
      dispatch({
        type: "bookDate",
        setStartDate: startDate,
        setEndDate: endDate,
        setAdults: data.adults,
        setKids: data.kids,
      });

      //redirect
      history.push("/browse");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="home-picker">
        <div className="picker">
          PŘÍJEZD
          <br />
          <DatePicker
            calendarIcon={null}
            onChange={setStartDate}
            value={startDate}
            format={"dd-MM-y"}
            locale={"cs"}
            minDate={new Date()}
          />
        </div>
        <div className="picker-second">
          ODJEZD
          <br />
          <DatePicker
            calendarIcon={null}
            onChange={setendDate}
            value={endDate}
            format={"dd-MM-y"}
            locale={"cs"}
            minDate={new Date()}
            required={true}
          />
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="home-form-selects">
          <div className="form-select">
            <label>
              Sedadel
              <br />
              <select name="adults" ref={register}>
                <option value={1}>1 DOSPĚLÝ</option>
                <option value={2}>2 DOSPĚLÍ</option>
                <option value={3}>3 DOSPĚLÍ</option>
                <option value={4}>4 DOSPĚLÍ</option>
              </select>
            </label>
          </div>
          <div className="form-select">
            <label>
              DĚTI
              <br />
              <select name="kids" ref={register}>
                <option value={0}>BEZ DĚTÍ</option>
                <option value={1}>1 DÍTĚ</option>
                <option value={2}>2 DĚTI</option>
                <option value={3}>3 DĚTI</option>
                <option value={4}>4 DĚTI</option>
              </select>
            </label>
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default HomeForm;
