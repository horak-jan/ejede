import React, { useState } from "react";

const Burger = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="burger">
      <button className="burger-button" onClick={() => setVisible(true)}>
        Show
      </button>
      <div className={visible ? "visible-style" : "hidden-style"}>
        <button className="burger-button" onClick={() => setVisible(false)}>
          Hide
        </button>
        <div>
          <ul>
            <li>Dom;</li>
            <li>Registrace</li>
            <li>P5ihlaseni</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Burger;
