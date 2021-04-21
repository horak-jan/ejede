import Axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const DeleteConfirmation = (props) => {
  const [messageAfterDelete, setMessageAfterDelete] = useState("");
  let history = useHistory();
  const deleteBooking = (id) => {
    const deleteBooking = async () => {
      try {
        const res = await Axios.delete(`api/booking/${id}`);
        setMessageAfterDelete(res.data.message);
      } catch (error) {
        console.log(error);
      }
    };

    deleteBooking();
    history.go(0);
  };
  return (
    <div className="delete-confirmation">
      <h3>Určitě chcete smazat tuto objednávku?</h3>
      <div className="delete-confirmation-buttons">
        <button onClick={() => deleteBooking(props.bookingId)}>Ano</button>
        <button onClick={() => props.setShowDeleteConfirmation(false)}>
          Ne
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
