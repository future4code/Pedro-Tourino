import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { CssBaseline } from "@material-ui/core";
import styled from "styled-components";

import HomePage from "./assets/pages/HomePage";
import ApplicationFormPage from "./assets/pages/ApplicationFormPage";
import LoginPage from "./assets/pages/LoginPage";
import ListTripsPage from "./assets/pages/ListTripsPage";
import CreateTripPage from "./assets/pages/CreateTripPage";
import TripDetailsPage from "./assets/pages/TripDetailsPage";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <AppContainer>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/application/form">
            <ApplicationFormPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/list/trips">
            <ListTripsPage />
          </Route>
          <Route path="/create/trip">
            <CreateTripPage />
          </Route>
          <Route path="/trip/details">
            <TripDetailsPage />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
};

export default App;
