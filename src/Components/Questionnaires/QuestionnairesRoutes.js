import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Questionnaires from './Questionnaires';
import Questionnaire from 'Components/Common/Questionnaire/Questionnaire';

export default function QuestionnairesRoutes() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <Questionnaires />
      </Route>
      <Route path={`${path}/:questionnaireId`}>
        <Questionnaire />
      </Route>
    </Switch>
  );
}
