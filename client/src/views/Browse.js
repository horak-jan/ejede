import React, { useEffect, useState } from "react";
import Axios from "axios";

import SingleCar from "../components/ui/SingleCar";
import BrowseTop from "../components/ui/BrowseTop";
import BrowseFilter from "../components/ui/BrowseFilter";

const Browse = () => {
  const [cars, setCars] = useState({});
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsError(false);

      try {
        const res = await Axios.get(`/api/car?page=${page}`);
        setCars(res.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    getData();
  }, [page]);

  return (
    <div className="browse">
      <div className="browse-container">
        <BrowseTop />
        <h2>hello lorem ipsum and so on an so forth</h2>
        <BrowseFilter />

        {isError && <div>Někde se stala chyba ...</div>}

        {isLoading ? (
          <div>'Načítám...'</div>
        ) : (
          cars.car.map((car) => <SingleCar key={car._id} car={car} />)
        )}
      </div>
    </div>
  );
};

export default Browse;
