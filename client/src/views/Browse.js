import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useStateValue } from "../state";

import BrowseTop from "../components/ui/Browse/BrowseTop";
import CarsOnActualPage from "../components/ui/Browse/CarsOnActualPage";
import PaginationButtons from "../components/ui/Browse/Pagination/PaginationButtons";
import Pagination from "../components/ui/Browse/Pagination/Pagination";

import Dataset from "../components/ui/Browse/Dataset.json";
import ShowErrorMessage from "../components/ui/utils/ShowErrorMessage";
import Loading from "../components/ui/utils/Loading";
import SortAndOrder from "../components/ui/Browse/SortAndOrder/SortAndOrder";

const Browse = () => {
  const [cars, setCars] = useState(Dataset.car);
  // const [isLoading, setIsLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [sortType, setSortType] = useState("");
  const [sortedCars, setSortedCars] = useState([]);
  const [showLowToHigh, setShowLowToHigh] = useState(false);

  const [firstCar, lastCar, totalPages, setActualPage] = Pagination(
    cars.length
  );

  const carsOnActualPage = cars.slice(firstCar, lastCar);
  const sortedCarsOnActualPage = sortedCars.slice(firstCar, lastCar);
  const sortedCarsOnActualPageLowToHigh = sortedCars
    .reverse()
    .slice(firstCar, lastCar);

  // useEffect(() => {
  //   const getAllCars = () => {
  //     Axios.get(`/api/car`)
  //       .then((response) => {
  //         setCars(response.data.car);
  //       })
  //       .catch((error) => {
  //         setIsError(true);
  //         console.log(error);
  //       });
  //     setIsLoading(false);
  //   };
  //   getAllCars();
  // }, []);

  // SORT
  useEffect(() => {
    const sortCars = (type) => {
      const types = {
        rating: "rating",
        range: "range",
        price: "dayPrice",
      };
      const sortProperty = types[type];

      const sorted = [...cars].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setSortedCars(sorted);
    };
    sortCars(sortType);
  }, [sortType]);

  return (
    <div className="browse">
      <div className="browse-container">
        <h2>Nabídka vozů</h2>

        <BrowseTop />

        <SortAndOrder
          setSortType={setSortType}
          setShowLowToHigh={setShowLowToHigh}
          showLowToHigh={showLowToHigh}
        />

        {isError && <ShowErrorMessage />}

        {isLoading ? (
          <Loading />
        ) : // first time sorting?
        sortedCars.length === 0 ? (
          // cars.map((car) => <SingleCar key={car._id} car={car} />)
          <CarsOnActualPage carsOnActualPage={carsOnActualPage} />
        ) : showLowToHigh ? (
          //sorted cars low to high
          <CarsOnActualPage
            carsOnActualPage={sortedCarsOnActualPageLowToHigh}
          />
        ) : (
          //sorted cars high to low
          // data.map((car) => <SingleCar key={car._id} car={car} />)
          <CarsOnActualPage carsOnActualPage={sortedCarsOnActualPage} />
        )}
        <PaginationButtons
          setActualPage={setActualPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default Browse;
