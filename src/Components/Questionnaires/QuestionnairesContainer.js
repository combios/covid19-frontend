import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import actions from 'Redux/actions';
import Questionnaires from './Questionnaires';
import Questionnaire from 'Components/Common/Questionnaire/Questionnaire';

export default function QuestionnairesContainer() {
  const dispatch = useDispatch();
  let { path } = useRouteMatch();
  const history = useHistory();

  const getQuestionnaire = (id) => {
    dispatch(actions.questionnairesActions.getQuestionnaire(id, history));
  };
  return (
    <Switch>
      <Route exact path={path}>
        <Questionnaires getQuestionnaire={getQuestionnaire} />
      </Route>
      <Route path={`${path}/:questionnaireId`}>
        <Questionnaire />
      </Route>
    </Switch>
  );
}
