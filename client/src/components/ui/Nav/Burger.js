import React, { useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { useStateValue } from "../../../state";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Burger = () => {
  let history = useHistory();
  const [visible, setVisible] = useState(false);
  const [{ auth }, dispatch] = useStateValue();
  const {
    user,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout,
  } = useAuth0();
  return (
    <div className="burger">
      <img
        className="logo-burger"
        src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1621356775/ejede/ejede-logo_qbnjns.png"
        alt="ejede logo"
        onClick={() => history.push("/")}
      />

      <h2>
        <a href="/">Ejede</a>
      </h2>

      <img
        className={visible ? "burger-button-hidden" : "burger-button"}
        onClick={() => setVisible(true)}
        alt="closed menu button"
        src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1621356776/ejede/hamburger-menu-closed_svsywc.png"
      />

      <div className={visible ? "visible-style" : "hidden-style"}>
        <img
          className="visible-burger-button"
          onClick={() => setVisible(false)}
          alt="opened menu button"
          src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1621356776/ejede/hamburger-menu-opened_iq6hio.png"
        />
        <div>
          <p>
            Stavíme bezpečnost na první místo, vozidla důkladně čistíme a
            dezinfikujeme přípravky SANYTOL.
          </p>

          <ul>
            <li>
              <Link onClick={() => setVisible(false)} to="/">
                Domů
              </Link>
            </li>
            <div className="nav-hide">
              <li>
                <Link onClick={() => setVisible(false)} to="/pobocka">
                  O nás
                </Link>
              </li>
              <li>
                <Link to="/podminky" onClick={() => setVisible(false)}>
                  Podmínky
                </Link>
              </li>
              <li>
                <Link to="/sluzby" onClick={() => setVisible(false)}>
                  Služby
                </Link>
              </li>
            </div>
            {/* user is logged? */}
            {isAuthenticated ? (
              <>
                <li>
                  <Link onClick={() => setVisible(false)} to={`/user`}>
                    Moje objednávky
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Odhlášení
                  </Link>
                </li>
              </>
            ) : (
              // for not logged users
              <>
                <li>
                  <Link to="/" onClick={() => loginWithRedirect()}>
                    Přihlášení
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Burger;
