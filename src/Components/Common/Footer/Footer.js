import React from 'react';
import styles from './Footer.module.css'; // Import css modules stylesheet as styles

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTitle}>COMBIOS</div>
      <div className={styles.footerDescription}>
        Puedes obtener mas información de este proyecto{' '}
        <a href="https://sites.google.com/unal.edu.co/covid19crisiscolombia/4-desarrollo-de-aplicaciones-ml-im%C3%A1genes-telemedicina">
          aquí
        </a>
      </div>
      <div className={styles.footerDescription}>
        <strong>Iconos:</strong> Freepik
      </div>
    </div>
  );
}
