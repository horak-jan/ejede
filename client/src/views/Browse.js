import React from "react";

import BrowseTop from "../components/ui/Browse/BrowseTop";
import GetDataFromDb from "../components/ui/utils/GetDataFromDb";
import BrowseAfterLoadingCars from "../components/ui/Browse/BrowseAfterLoadingCars";

const Browse = () => {
  const [loadedData, isLoading, hasError] = GetDataFromDb("car");
  let { car } = loadedData;

  return (
    <div className="browse">
      <div className="browse-container">
        <h2>Nabídka vozů</h2>

        <BrowseTop />

        {car && (
          <BrowseAfterLoadingCars
            isLoading={isLoading}
            hasError={hasError}
            cars={car}
          />
        )}
      </div>
    </div>
  );
};

export default Browse;
