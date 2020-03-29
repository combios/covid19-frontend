import React, { Component } from 'react';

import * as Survey from 'survey-react';
import 'survey-react/modern.css';

import { mockQuestionnaire } from '__mocks__/mockQuestionnaire';

// apply theme modern
Survey.StylesManager.applyTheme('modern');

class SurveyJS extends Component {
  //The most model properties are reactive, on their change the component will change UI when needed.
  model = new Survey.Model(mockQuestionnaire);
  /**
   * is fire when the user finish the survey
   * @param {*} survey all model with data
   * @param {*} options function to show different messages
   */
  onComplete(survey, options) {
    console.log('Survey results:', { survey, options, data: survey.data });
  }
  render() {
    return (
      <Survey.Survey
        model={this.model}
        onComplete={this.onComplete}
        locale="es"
      />
    );
  }
}

export default SurveyJS;
