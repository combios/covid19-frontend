import React, { useState } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import styles from './Questionnaires.module.css'; // Import css modules stylesheet as styles
import house from 'Assets/PNG/rent.png';
import hospital from 'Assets/PNG/health-care.png';
import record from 'Assets/PNG/record.png';
import commonStyles from 'Theme/Common.module.css';

export default function Questionnaires() {
  let { path, url } = useRouteMatch();

  return (
    <div className={styles.questionnairesPageContent}>
      <div className={styles.questionnairesTitle}>
        Selecciona un cuestionario
      </div>
      <div className={styles.questionnairesMenu}>
        <div
          className={`${styles.questionnairesMenuItem} ${styles.questionnaireCard}`}
        >
          <div className={styles.questionnairesSubtitle}>Triage en casa</div>
          <div className={styles.questionnairesDescription}>
            Ingrese sus síntomas y el sistema le ayudará a tomar la decisión de
            remitirse al servicio de salud solo cuando es estrictamente
            necesario
          </div>
          <img src={house} alt="house"></img>
          <Link to={`${url}/triage_en_casa`}>
            <button className={commonStyles.button}>Ir al cuestionario</button>
          </Link>
        </div>

        <div
          className={`${styles.questionnairesMenuItem} ${styles.questionnaireCard}`}
        >
          <div className={styles.questionnairesSubtitle}>
            Triage en el servicio médico
          </div>
          <div className={styles.questionnairesDescription}>
            Establezca una valoración del riesgo a partir de los sintomas de un
            paciente. Triage en el servicio médico (COVID vs No COVID) que use
            basado en Rayos X.
          </div>
          <img src={hospital} alt="hospital"></img>
          <Link to={`${url}/triage_medicos`}>
            <button className={commonStyles.button}>Ir al cuestionario</button>
          </Link>
        </div>
        <div
          className={`${styles.questionnairesMenuItem} ${styles.questionnaireCard}`}
        >
          <div className={styles.questionnairesSubtitle}>Survey Test</div>
          <div className={styles.questionnairesDescription}>
            Encuesta probada por Juan Sebastián a partir de Mock data
          </div>
          <img src={record} alt="record"></img>

          <Link to={`${url}/survey`}>
            <button className={commonStyles.button}>Ir al cuestionario</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
