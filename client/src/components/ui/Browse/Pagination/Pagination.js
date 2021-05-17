import { useState } from "react";

const Pagination = (props) => {
  const [actualPage, setActualPage] = useState(1);
  const perPage = 2;
  const lastCar = actualPage * perPage;
  const firstCar = lastCar - perPage;
  const totalPages = Math.ceil(props / perPage);

  return [firstCar, lastCar, totalPages, setActualPage];
};

export default Pagination;
