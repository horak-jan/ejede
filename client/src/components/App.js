import React, { lazy, Suspense } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../styles/styles.css";
import { StateProvider } from "../state";
import Navbar from "./ui/Nav/Navbar";
import Footer from "../views/Footer";

const Car = lazy(() => import("../views/Car"));
const Browse = lazy(() => import("../views/Browse"));
const User = lazy(() => import("../views/User"));
const Terms = lazy(() => import("../views/Terms"));
const About = lazy(() => import("../views/About"));
const FinishOrder = lazy(() => import("../views/FinishOrder"));
const Pobocka = lazy(() => import("../views/Pobocka"));
const Home = lazy(() => import("../views/Home"));

import FourOhFour from "../views/FourOhFour";
import OsobniUdaje from "../views/OsobniUdaje";

const App = () => {
  const initialState = {
    bookingDate: {
      startDate: Date,
      endDate: Date,
      pickupPlace: "",
    },
    selectedCar: {
      singleCar: {},
    },
    selectedPlace: {
      place: {
        link: "ostrava",
        name: "Ostrava",
        lat: 49.830359,
        lng: 18.164156,
      },
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
      case "bookDate":
        return {
          ...state,
          bookingDate: {
            startDate: action.setStartDate,
            endDate: action.setEndDate,
            pickupPlace: action.setPickupPlace,
          },
        };
      case "pickCar":
        return {
          ...state,
          selectedCar: action.setCar,
        };
      case "pickPlace":
        return {
          ...state,
          selectedPlace: action.setPlace,
        };
      default:
        return state;
    }
  };
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Navbar />
        <Suspense fallback={<div>Načítám...</div>}>
          <Switch>
            <Route exact path="/podminky" component={Terms} />
            <Route exact path="/user" component={User} />
            <Route exact path="/osobniudaje" component={OsobniUdaje} />
            <Route exact path="/browse" component={Browse} />
            <Route exact path="/finishOrder" component={FinishOrder} />
            <Route exact path="/car" component={Car} />
            <Route exact path="/sluzby" component={About} />
            <Route path="/pobocka" component={Pobocka} />
            <Route exact path="/" component={Home} />
            <Route exact path="/*" component={FourOhFour} />
          </Switch>
        </Suspense>

        <Footer />
      </Router>
    </StateProvider>
  );
};

export default App;
