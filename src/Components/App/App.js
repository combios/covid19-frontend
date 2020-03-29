import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LandingPage from 'Components/Landing/LandingPage';
import ReduxTest from 'Components/Test/ReduxTest';
import NoMatch from 'Components/NoMatch/NoMatch';
import PrivateRoute from './PrivateRoute';
import SurveyJS from 'Components/SurveyJS/SurveyJS';

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
        <Route path="/survey">
          <SurveyJS />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
