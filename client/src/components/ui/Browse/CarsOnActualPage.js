import SingleCar from "./SingleCar";

const CarsOnActualPage = (props) => {
  return (
    <>
      {props.carsOnActualPage.map((car) => (
        <SingleCar key={car._id} car={car} />
      ))}
    </>
  );
};

export default CarsOnActualPage;
