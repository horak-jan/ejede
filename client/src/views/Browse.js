import React, { useEffect, useState } from "react";
import Axios from "axios";

import SingleCar from "../components/ui/SingleCar";

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
  }, [page]);

  return (
    <div className="browse">
      <h2>hello</h2>
      <SingleCar />
    </div>
  );
};

export default Browse;
