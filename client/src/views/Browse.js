import React, { useEffect, useMemo, useState } from "react";
import Axios from "axios";
import { useStateValue } from "../state";

import SingleCar from "../components/ui/Browse/SingleCar";
import BrowseTop from "../components/ui/Browse/BrowseTop";

import Dataset from "../components/ui/Browse/Dataset.json";

const Browse = () => {
  const [cars, setCars] = useState(Dataset.car);
  const [page, setPage] = useState(1);
  // const [isLoading, setIsLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [sortType, setSortType] = useState("");
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   //get all from
  //   async function getData() {
  //     setIsError(false);

  //     try {
  //       const res = await Axios.get(`/api/car?page=${page}`);

  //       setCars(res.data.car);
  //     } catch (error) {
  //       setIsError(true);
  //     }
  //     setIsLoading(false);
  //   }
  //   getData();
  // }, [page]);

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
      setData(sorted);
    };
    sortCars(sortType);
  }, [sortType]);

  return (
    <div className="browse">
      <div className="browse-container">
        <h2>Nabídka vozů</h2>

        <BrowseTop />
        <div className="sort">
          {/* sort picker */}
          <select onChange={(e) => setSortType(e.target.value)}>
            <option value="rating">Hodnocení</option>
            <option value="range">Dojezd</option>
            <option value="price">Cena</option>
          </select>
          <p>Řadit dle:</p>
        </div>
        {/* show errors */}
        {isError && <div>Někde se stala chyba ...</div>}
        {/* show loader */}
        {isLoading ? (
          <div>'Načítám...'</div>
        ) : data.length === 0 ? (
          // if sorted
          cars.map((car) => <SingleCar key={car._id} car={car} />)
        ) : (
          data.map((car) => <SingleCar key={car._id} car={car} />)
        )}
      </div>
    </div>
  );
};

export default Browse;
