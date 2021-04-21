import { useState } from "react";
import EmptyForm from "./EmptyForm";
import MessageAfterSendingForm from "./MessageAfterSendingForm";
const axios = require("axios").default;

const CarForm = () => {
  const [messageAfterSendingForm, setMessageAfterSendingForm] = useState("");

  const sendForm = async (completeData) => {
    try {
      const resp = await axios.post("api/booking", completeData);

      setMessageAfterSendingForm(resp.data.message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="car-form">
      <h2>Rezervace</h2>

      {messageAfterSendingForm == "" ? (
        <EmptyForm sendForm={sendForm} />
      ) : (
        <MessageAfterSendingForm
          messageAfterSendingForm={messageAfterSendingForm}
        />
      )}
    </div>
  );
};

export default CarForm;
