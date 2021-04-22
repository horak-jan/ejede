import { useAuth0 } from "@auth0/auth0-react";
import Axios from "axios";
import { useEffect, useState } from "react";
import ShowAllBookingsToUser from "../components/ui/User/ShowAllBookingsToUser";

const User = () => {
  const { user, isAuthenticated } = useAuth0();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [allBookings, setAllBookings] = useState([]);

  const { email, name, picture } = user;

  useEffect(() => {
    const getBookingsFromUser = () => {
      Axios.get(`/api/booking/${email}`)
        .then((response) => {
          setAllBookings(res.data.booking);
        })
        .catch((error) => {
          setIsError(true);
          console.log(error);
        });
      setIsLoading(false);
    };
    getBookingsFromUser();
  }, []);

  return (
    <div className="user">
      {isAuthenticated ? (
        <div className="user-info">
          <img src={picture} />
          <h2>{name}</h2>
          {allBookings.length >= 1 ? (
            <ShowAllBookingsToUser allBookings={allBookings} />
          ) : (
            <h2>Nemáte žádné vytvořené objednávky</h2>
          )}
        </div>
      ) : (
        <h2>Nemáte žádné vytvořené objednávky</h2>
      )}
    </div>
  );
};

export default User;
