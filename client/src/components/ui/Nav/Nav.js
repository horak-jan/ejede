import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../../state";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {
  const [auth, setAuth] = useStateValue();
  let history = useHistory();

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav className="nav">
      <div>
        <img
          className="logo-burger"
          src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1621356775/ejede/ejede-logo_qbnjns.png"
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
            <Link to="/sluzby">Služby</Link>
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
      </div>
    </nav>
  );
};

export default Nav;
