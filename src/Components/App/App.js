import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import './App.css';
import LandingPage from 'Components/Landing/LandingPage';
import ReduxTest from 'Components/Test/ReduxTest';
import NoMatch from 'Components/NoMatch/NoMatch';
import SurveyJS from 'Components/SurveyJS/SurveyJS';
import Questionnaires from 'Components/Questionnaires/QuestionnairesRoutes';
import Questionnaire from 'Components/Common/Questionnaire/Questionnaire';

import { Footer } from 'Components/Common';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/ReduxTest">
          <ReduxTest />
        </Route>
        <Route path="/signin">
          <LandingPage />
        </Route>
        <Route path="/survey">
          <SurveyJS />
        </Route>
        <Route path="/cuestionarios">
          <Questionnaires />
        </Route>

        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
