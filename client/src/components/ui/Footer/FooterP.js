import React from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../../state";

const FooterP = (props) => {
  let { link, name } = props.place;
  const [{ selectedPlace }, dispatch] = useStateValue();
  let history = useHistory();

  const pickThisPlace = (data) => {
    try {
      dispatch({
        type: "pickPlace",
        setPlace: data,
      });

      //redirect to picked place
      history.push("/pobocka");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <p style={{ cursor: "pointer" }} onClick={() => pickThisPlace(props)}>
      Půjčovna {name}
    </p>
  );
};

export default FooterP;
