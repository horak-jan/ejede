import React from "react";

import HomeFirst from "../components/ui/HomePage/HomeFirst";
import HomeFirstInfo from "../components/ui/HomePage/HomeFirstInfo";
import HomeSecondInfo from "../components/ui/HomePage/HomeSecondInfo";

const Home = () => {
  return (
    <div className="home">
      <div className="covid">
        <h2>Půjčovna aut v provozu</h2>

        <p>
          Stavíme bezpečnost na první místo, proto vozidla důkladně čistíme a
          dezinfikujeme přípravky SANYTOL.
        </p>
      </div>
      <HomeFirst />
      <HomeFirstInfo />

      <HomeSecondInfo />
    </div>
  );
};

export default Home;
