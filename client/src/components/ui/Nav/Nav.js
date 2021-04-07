import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { useStateValue } from "../../../state";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../../../images/ejede-logo.png";

const Nav = () => {
  const [{ auth }, dispatch] = useStateValue();
  let history = useHistory();

  const {
    user,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout,
  } = useAuth0();

  return (
    <nav className="nav">
      <img
        className="logo-burger"
        src={Logo}
        alt="ejede logo"
        onClick={() => history.push("/")}
      />

      <ul>
        <li>
          <Link to="/">EJEDE</Link>
        </li>
        <li>
          <Link to="/pobocka">O nás</Link>
        </li>
        <li>
          <Link to="/podminky">Podmínky</Link>
        </li>
        <li>
          <Link to="/sluzby" onClick={() => setVisible(false)}>
            Služby
          </Link>
        </li>
        {/* user is logged? */}
        {isAuthenticated ? (
          <>
            <li>
              <Link to={`/user`}>Moje objednávky</Link>
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
    </nav>
  );
};

export default Nav;
