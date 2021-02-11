import React, { useState } from "react";

const ToggleBox = () => {
  const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
  }

  return (
    <div className="home-third-faq">
      <div className="home-third-faq-title" onClick={toggle}>
        <h4>Otazka 1</h4>
      </div>
      {isOpened && (
        <div className="home-third-faq-text">
          <p>
            Thank you for purchasing the Free Auth0 plan. You have 20 days left
            in your trial to experiment with features that are not in the Free
            plan. Like what you‘re seeing? Please enter your billing information
            here.
          </p>
        </div>
      )}
    </div>
  );
};

export default ToggleBox;
