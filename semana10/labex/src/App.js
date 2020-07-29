import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { CssBaseline } from "@material-ui/core";
import { AppContainer } from "./styles";

import HomePage from "./assets/pages/HomePage";
import ApplicationFormPage from "./assets/pages/ApplicationFormPage";
import LoginPage from "./assets/pages/LoginPage";
import ListTripsPage from "./assets/pages/ListTripsPage";
import CreateTripPage from "./assets/pages/CreateTripPage";
import TripDetailsPage from "./assets/pages/TripDetailsPage";

const App = () => {
  return (
    <Router>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <CssBaseline />

        <AppContainer>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>

            <Route path="/trip/details">
              <TripDetailsPage />
            </Route>

            <Route path="/create/trip">
              <CreateTripPage />
            </Route>

            <Route path="/list/trips">
              <ListTripsPage />
            </Route>

            <Route path="/application/form">
              <ApplicationFormPage />
            </Route>

            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </AppContainer>
      </MuiPickersUtilsProvider>
    </Router>
  );
};

export default App;
