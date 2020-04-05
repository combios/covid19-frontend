import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styles from './Menu.module.css'; // Import css modules stylesheet as styles
import house from 'Assets/PNG/rent.png';
import hospital from 'Assets/PNG/health-care.png';
import record from 'Assets/PNG/record.png';
import commonStyles from 'Theme/Common.module.css';

export default function MenuPage(props) {
  let { path, url } = useRouteMatch();
  const { getQuestionnaire } = props;

  return (
    <div className={styles.menuPageContent}>
      <div className={styles.menuTitle}>Selecciona un cuestionario</div>
      <div className={styles.menuMenu}>
        <div className={`${styles.menuMenuItem} ${styles.questionnaireCard}`}>
          <div className={styles.menuSubtitle}>Triage en casa</div>
          <div className={styles.menuDescription}>
            Ingrese sus síntomas y el sistema le ayudará a tomar la decisión de
            remitirse al servicio de salud solo cuando es estrictamente
            necesario
          </div>
          <img src={house} alt="house"></img>

          <button
            className={commonStyles.button}
            onClick={() => getQuestionnaire('TRIAGE1')}
          >
            Ir al cuestionario
          </button>
        </div>

        <div className={`${styles.menuMenuItem} ${styles.questionnaireCard}`}>
          <div className={styles.menuSubtitle}>
            Triage en el servicio médico
          </div>
          <div className={styles.menuDescription}>
            Establezca una valoración del riesgo a partir de los sintomas de un
            paciente. Triage en el servicio médico (COVID vs No COVID) que use
            basado en Rayos X.
          </div>
          <img src={hospital} alt="hospital"></img>
          <button
            className={commonStyles.button}
            onClick={() => getQuestionnaire('TRIAGE2')}
          >
            Ir al cuestionario
          </button>
        </div>
        <div className={`${styles.menuMenuItem} ${styles.questionnaireCard}`}>
          <div className={styles.menuSubtitle}>Survey Test</div>
          <div className={styles.menuDescription}>
            Encuesta probada por Juan Sebastián a partir de Mock data
            proporcionado por Santiago Silva
          </div>
          <img src={record} alt="record"></img>
          <Link to={`${url}/3`}>
            <button
              className={commonStyles.button}
              onClick={() => getQuestionnaire(3)}
            >
              Ir al cuestionario
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
