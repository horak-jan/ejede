import React from "react";
import App from "./src/components/App";
import { render } from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";

render(
  <Auth0Provider
    domain="dev-janh.eu.auth0.com"
    clientId="GNjKb4mgEuzwcRlryHh3hhzb4BhLaIm8"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
