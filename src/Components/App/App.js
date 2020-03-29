import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import styles from "Theme/theme.css"; // Import css modules stylesheet as styles
import LandingPage from "Components/Landing/LandingPage";
import ReduxTest from "Components/Test/ReduxTest";
import NoMatch from "Components/NoMatch/NoMatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/ReduxTest">
          <ReduxTest />
        </Route>
        <Route exact path="/signin">
          <LandingPage />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
