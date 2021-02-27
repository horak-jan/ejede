import React from "react";
import App from "./src/components/App";
import { render } from "react-dom";
require("dotenv").config({ path: __dirname + "/src/.env" });
import { Auth0Provider } from "@auth0/auth0-react";

render(
  <Auth0Provider
    domain="dev-hj.eu.auth0.com"
    clientId="oNflkAhC2u0lRicCxGKRb48d3FINO8u1"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
