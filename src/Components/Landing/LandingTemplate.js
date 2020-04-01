import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css'; // Import css modules stylesheet as styles
import commonStyles from 'Theme/Common.module.css';
import OrgLoginCard from './LoginCard/OrgLoginCard';

export default function LoginPage() {
  return (
    <div className={`${styles.landing} ${styles.landingContent}`}>
      <div className={`${styles.landingSide} ${styles.landingLeft}`}>
        <div className={styles.landingCard}>
          <div className={styles.landingTitle}>COMBIOS</div>
          <div className={styles.landingSubtitle}>Covid19 Crisis Colombia</div>
          <div className={styles.landingDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            modi dignissimos itaque assumenda ratione dolor? Quis ut quasi
            beatae libero nulla perferendis. Distinctio harum, est
            exercitationem obcaecati id non voluptates?
          </div>
          <Link to="/cuestionarios">
            <button className={commonStyles.button}>Ir a cuestionarios</button>
          </Link>
        </div>
      </div>
      <div className={styles.landingSide}>LOGIN HERE</div>
    </div>
  );
}
