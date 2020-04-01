import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './App.module.css';
import LandingPage from 'Components/Landing/LandingPage';
import ReduxTest from 'Components/Test/ReduxTest';
import NoMatch from 'Components/NoMatch/NoMatch';
import SurveyJS from 'Components/SurveyJS/SurveyJS';
import Questionnaires from 'Components/Questionnaires/QuestionnairesContainer';

import { Footer } from 'Components/Common';
function App() {
  return (
    <div className={styles.page}>
      <ToastContainer autoClose={5000} position="top-right" />
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
    </div>
  );
}

export default App;
