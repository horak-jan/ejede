import { useEffect, useState } from "react";

const GetDataFromDb = (whatToLoad) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [loadedData, setLoadedData] = useState({});

  useEffect(() => {
    fetch(`/api/${whatToLoad}`)
      .then((response) => response.json())
      .then((data) => {
        setLoadedData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setHasError(true);
        setIsLoading(false);
      });
  }, []);

  return [loadedData, isLoading, hasError];
};

export default GetDataFromDb;
