import React from "react";
import { Link } from "react-router-dom";

import { useStateValue } from "../../../state";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../../../images/ejede-logo.png";

const Nav = () => {
  const [{ auth }, dispatch] = useStateValue();
  const {
    user,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout,
  } = useAuth0();

  return (
    <nav className="nav">
      <img className="logo-burger" src={Logo} alt="ejede logo" />

      <ul>
        <li>
          <Link to="/">EJEDE</Link>
        </li>
        <li>
          <Link to="/pobocka">O nás</Link>
        </li>
        <li>
          <Link to="/help">Podmínky</Link>
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
                Log out
              </Link>
            </li>
          </>
        ) : (
          // for not logged users
          <>
            <li>
              <Link to="/register">Registrace</Link>
            </li>
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
