import { useState } from "react";
import DeleteConfirmation from "./DeleteConfirmation";

const DeleteBookingButtons = (props) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  return (
    <div className="delete-booking-buttons">
      <button
        onClick={() => setShowDeleteConfirmation(true)}
        className="delete"
      >
        Smazat objednávku
      </button>
      {showDeleteConfirmation ? (
        <DeleteConfirmation
          setShowDeleteConfirmation={setShowDeleteConfirmation}
          bookingId={props.bookingId}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default DeleteBookingButtons;
