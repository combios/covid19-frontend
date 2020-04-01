import React, { useState } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import styles from './Questionnaires.module.css'; // Import css modules stylesheet as styles
import TriageQuestionnaire from './TriageQuestionnaire/TriageQuestionnaire';

export default function Questionnaires() {
  let { path, url } = useRouteMatch();

  return (
    <div className={styles.questionnairesPageContent}>
      <div className={styles.questionnairesTitle}>
        Selecciona un cuestionario
      </div>
      <div className={styles.questionnairesMenu}>
        <div className={styles.questionnairesMenuItem}>
          Triage en casa
          <Link to={`${url}/triage_en_casa`}>Triage en casa</Link>
        </div>
        <div className={styles.questionnairesMenuItem}>
          Triage en el servicio médico
          <Link to={`${url}/triage_medicos`}>Triage en el servicio médico</Link>
        </div>
        <div className={styles.questionnairesMenuItem}>
          Otroo
          <Link to={`${url}/screening`}>Otroo</Link>
        </div>
      </div>
      <Switch>
        <Route exact path={`${path}/:topicId`}>
          <TriageQuestionnaire />
        </Route>
      </Switch>
    </div>
  );
}
