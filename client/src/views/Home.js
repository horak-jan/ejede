import React from "react";
import Burger from "../components/ui/Burger";
import HomeForm from "../components/ui/HomeForm";
import HomeSecond from "../components/ui/HomeSecond";
import HomeThird from "../components/ui/HomeThird";

const Home = () => {
  return (
    <div className="home">
      <div className="home-form-wrapper">
        <Burger />
        <h3>Vítejte!</h3>

        <p>Objevte krásu a sílu elektrickych aut na vlastní kůži</p>
        <HomeForm />
      </div>

      <HomeSecond />
      <HomeThird />
    </div>
  );
};

export default Home;
