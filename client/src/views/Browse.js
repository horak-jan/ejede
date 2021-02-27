import React, { useEffect, useMemo, useState } from "react";
import Axios from "axios";

import SingleCar from "../components/ui/SingleCar";
import BrowseTop from "../components/ui/BrowseTop";
import BrowseFilter from "../components/ui/BrowseFilter";

const Browse = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [sortType, setSortType] = useState("color");
  const [data, setData] = useState([]);

  useEffect(() => {
//nacti vse z db
    async function getData() {
      setIsError(false);

      try {
        const res = await Axios.get(`/api/car?page=${page}`);

        setCars(res.data.car);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    getData();
  }, [page]);

  //filters
  // make: "make",
  //       color: "color",
  //       model: "model",
  
  // SORT
  useEffect(() => {
    const sortCars = (type) => {
      const types = {
        rating: "rating",
        range: "range",
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
        <BrowseTop />
        <h2>hello lorem ipsum and so on an so forth</h2>
        <BrowseFilter />

        {/* sort picker */}
        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="rating">Rating</option>
          <option value="range">dojezd</option>
        </select>

//vypis erroru
        {isError && <div>Někde se stala chyba ...</div>}

        {isLoading ? (
          <div>'Načítám...'</div>
        ) : data.length === 0 ? (
          cars.map((car) => <SingleCar key={car._id} car={car} />)
        ) : (
          data.map((car) => <SingleCar key={car._id} car={car} />)
        )}
      </div>
    </div>
  );
};

export default Browse;
