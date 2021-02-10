import React from "react";
import { Link } from "react-router-dom";

import { useStateValue } from "../../state";

const Navbar = () => {
  const [{ auth }, dispatch] = useStateValue();

  const logout = async () => {
    try {
      dispatch({
        type: "logout",
        authenticated: false,
        resToken: "",
        setUsername: "",
        setId: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

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
        {auth.isAuthenticated ? (
          <>
            <li>
              <Link to={`/user/:${auth.id}`}>{auth.username}</Link>
            </li>
            <li>
              <Link to="/" onClick={logout}>
                Log out
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/register">Registrace</Link>
            </li>
            <li>
              <Link to="/login">Přihlášení</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
