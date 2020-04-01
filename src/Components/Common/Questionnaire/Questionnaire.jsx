import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import actions from 'Redux/actions';

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams, useRouteMatch } from 'react-router-dom';
import * as Survey from 'survey-react';
import 'survey-react/modern.css';
import { mockQuestionnaire } from '__mocks__/mockQuestionnaire';

// apply theme modern
Survey.StylesManager.applyTheme('modern');

export default function Questionnaire(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const getQuestionnaire = (id) => {
    dispatch(actions.questionnairesActions.getQuestionnaire(id, history));
  };

  const { questionnaireId } = useParams();
  console.log(questionnaireId);
  const questionnaire = useSelector(
    (state) => state.questionnaires[questionnaireId]
  );

  /**
   * is fire when the user finish the survey
   * @param {*} survey all model with data
   * @param {*} options function to show different messages
   */
  const onComplete = (survey, options) => {
    console.log('Survey results:', { survey, options, data: survey.data });
  };

  //The most model properties are reactive, on their change the component will change UI when needed.
  const model = new Survey.Model(questionnaire);

  useEffect(() => {
    if (!questionnaire === undefined) {
      console.log('GET QUESTIONNAIRE', questionnaire);
      getQuestionnaire(questionnaireId);
    }
    return () => {};
  });

  return <Survey.Survey model={model} onComplete={onComplete} locale="es" />;
}
