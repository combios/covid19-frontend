import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import styles from "Theme/theme.css"; // Import css modules stylesheet as styles
import LandingPage from "Components/Landing/LandingPage";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Router>
      <div className={styles.themelight}></div>
      <Switch>
        <Route path="/">
          <LandingPage />
        </Route>
        <Route path="/signin">
          <LandingPage />
        </Route>
        {/* <PrivateRoute path="/protected">
            <LandingView />
          </PrivateRoute> */}
      </Switch>
    </Router>
  );
}

export default App;
