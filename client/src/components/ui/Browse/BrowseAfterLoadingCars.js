import { useEffect, useState } from "react";
import Loading from "../utils/Loading";
import ShowErrorMessage from "../utils/ShowErrorMessage";
import CarsOnActualPage from "./CarsOnActualPage";
import Pagination from "./Pagination/Pagination";
import PaginationButtons from "./Pagination/PaginationButtons";
import SortAndOrder from "./SortAndOrder/SortAndOrder";

const BrowseAfterLoadingCars = (props) => {
  const { cars, isLoading, hasError } = props;
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
  console.log(carsOnActualPage);

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
    <>
      <SortAndOrder
        setSortType={setSortType}
        setShowLowToHigh={setShowLowToHigh}
        showLowToHigh={showLowToHigh}
      />

      {hasError && <ShowErrorMessage />}

      {isLoading ? (
        <Loading />
      ) : // first time sorting?
      sortedCars.length === 0 ? (
        <CarsOnActualPage carsOnActualPage={carsOnActualPage} />
      ) : showLowToHigh ? (
        //sorted cars low to high
        <CarsOnActualPage carsOnActualPage={sortedCarsOnActualPageLowToHigh} />
      ) : (
        //sorted cars high to low
        <CarsOnActualPage carsOnActualPage={sortedCarsOnActualPage} />
      )}

      <PaginationButtons
        setActualPage={setActualPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default BrowseAfterLoadingCars;
