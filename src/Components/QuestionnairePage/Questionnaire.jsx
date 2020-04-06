import React from 'react';
import * as Survey from 'survey-react';
import 'survey-react/modern.css';
import './questionnaireCustomStyles.css';
import styles from './Questionnaire.module.css';
// apply theme modern
Survey.StylesManager.applyTheme('modern');

export default function Questionnaire(props) {
  console.log('questionnaire', props.questionnaire);
  return (
    <div className={styles.questionnairePage}>
      <div className={styles.questionnaireTitle}>
        {props.questionnaire.title || 'Cuestionario'}
        <div className={styles.questionnairesubTitle}>
          {props.questionnaire.description || null}
        </div>
      </div>
      <div className={styles.questionnairePageContent}>
        <Survey.Survey
          model={props.model}
          onComplete={props.onComplete}
          locale="es"
        />
      </div>
    </div>
  );
}
