import React from "react";
import { Link } from "react-router-dom";

import { useStateValue } from "../../../state";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
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
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <div className="nav-hide">
          <li>
            <Link to="/host">O nás</Link>
          </li>
          <li>
            <Link to="/help">FAQ</Link>
          </li>
        </div>
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

export default Navbar;
