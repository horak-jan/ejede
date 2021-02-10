import React from "react";
import Faq from "./Faq";

const HomeThird = () => {
  return (
    <div className="home-third">
      <Faq />

      <h3>FAQ k pronájmu elektrických vozidel</h3>
      <div className="home-third-">
        <p>
          Thank you for purchasing the Free Auth0 plan. You have 20 days left in
          your trial to experiment with features that are not in the Free plan.
          Like what you‘re seeing? Please enter your billing information here.
        </p>
      </div>
    </div>
  );
};

export default HomeThird;
