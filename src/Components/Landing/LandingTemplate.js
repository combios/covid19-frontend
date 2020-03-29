import React from "react";
import styles from "./Landing.module.css"; // Import css modules stylesheet as styles
import OrgLoginCard from "./LoginCard/OrgLoginCard";

export default function LoginPage() {
  return (
    <div className={styles.landing}>
      <div className={styles.landingContent}>
        <div className={`${styles.landingSide} ${styles.landingLeft}`}>
          <div className={styles.landingTitle}>COMBIOS</div>
          <div className={styles.landingSubtitle}>Covid19 Crisis Colombia</div>
          <OrgLoginCard></OrgLoginCard>
        </div>
        <div className={styles.landingSide}>
          <div className={styles.landingDescription}>
            Description or content
          </div>
        </div>
      </div>
    </div>
  );
}
