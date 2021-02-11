import React, { lazy, Suspense } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../styles/styles.css";
import { StateProvider } from "../state";
import Navbar from "./ui/Navbar";
import Footer from "../views/Footer";

const House = lazy(() => import("../views/House"));
const Browse = lazy(() => import("../views/Browse"));
const User = lazy(() => import("../views/User"));
const Help = lazy(() => import("../views/Help"));
const Host = lazy(() => import("../views/Host"));
const Register = lazy(() => import("../views/Register"));
const Login = lazy(() => import("../views/Login"));
const Home = lazy(() => import("../views/Home"));

import FourOhFour from "../views/FourOhFour";

const App = () => {
  const initialState = {
    auth: {
      isAuthenticated: false,
      token: "",
      username: "",
      id: "",
    },
    bookingDate: {
      startDate: Date,
      endDate: Date,
      adults: 0,
      kids: 0,
    },
    selectedHouse: {
      singleHouse: {},
    },
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "authSuccess":
        return {
          ...state,
          auth: {
            isAuthenticated: action.authenticated,
            token: action.resToken,
            username: action.setUsername,
            id: action.setId,
          },
        };
      case "logout":
        return {
          ...state,
          auth: {
            isAuthenticated: action.authenticated,
            token: action.resToken,
            username: action.setUsername,
            id: action.setId,
          },
        };
      case "bookDate":
        return {
          ...state,
          bookingDate: {
            startDate: action.setStartDate,
            endDate: action.setEndDate,
            adults: action.setAdults,
            kids: action.setKids,
          },
        };
      case "pickHouse":
        return {
          ...state,
          selectedHouse: action.setHouse,
        };
      default:
        return state;
    }
  };
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        {/* <div className="app"> */}
        <Navbar />
        <Suspense fallback={<div>Načítám...</div>}>
          <Switch>
            <Route exact path="/help" component={Help} />
            <Route exact path="/host" component={Host} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/user" component={User} />
            <Route exact path="/browse" component={Browse} />
            <Route exact path="/house" component={House} />
            <Route exact path="/" component={Home} />
            <Route exact path="/*" component={FourOhFour} />
          </Switch>
        </Suspense>

        <Footer />
        {/* </div> */}
      </Router>
    </StateProvider>
  );
};

export default App;
