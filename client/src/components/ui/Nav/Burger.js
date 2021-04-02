import React, { useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { useStateValue } from "../../../state";
import { Link } from "react-router-dom";
import Logo from "../../../images/ejede-logo.png";
import HamburgerMenuClosed from "../../../images/hamburger-menu-closed.png";
import HamburgerMenuOpened from "../../../images/hamburger-menu-opened.png";

const Burger = () => {
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
      <img className="logo-burger" src={Logo} alt="ejede logo" />

      <h2>Ejede</h2>

      <img
        className={visible ? "burger-button-hidden" : "burger-button"}
        onClick={() => setVisible(true)}
        alt="closed menu button"
        src={HamburgerMenuClosed}
      />

      <div className={visible ? "visible-style" : "hidden-style"}>
        <img
          className="visible-burger-button"
          onClick={() => setVisible(false)}
          alt="opened menu button"
          src={HamburgerMenuOpened}
        />
        <div>
          <p>
            Stavíme bezpečnost na první místo, vozidla důkladně čistíme a
            dezinfikujeme přípravky SANYTOL.
          </p>

          <ul>
            <li>
              <Link onClick={() => setVisible(false)} to="/">
                Home
              </Link>
            </li>
            <div className="nav-hide">
              <li>
                <Link onClick={() => setVisible(false)} to="/host">
                  O nás
                </Link>
              </li>
              <li>
                <Link to="/help" onClick={() => setVisible(false)}>
                  Časté otázky
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
                    Log out
                  </Link>
                </li>
              </>
            ) : (
              // for not logged users
              <>
                <li>
                  <Link onClick={() => setVisible(false)} to="/register">
                    Registrace
                  </Link>
                </li>
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
