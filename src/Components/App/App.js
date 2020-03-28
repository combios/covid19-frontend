import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import styles from "Theme/theme.css"; // Import css modules stylesheet as styles
import LandingPage from "Components/Landing/LandingPage";
import PrivateRoute from "./PrivateRoute";
import Questionnaire from "Components/Questionnaire";

function App() {
    return (
        <Router>
            <div className={styles.themelight}></div>
            <Switch>
                <Route path="/signin">
                    <LandingPage />
                </Route>
                <Route path="/questionnaire">
                    <Questionnaire />
                </Route>
                <Route path="/">
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
