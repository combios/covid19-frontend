import React, { useState } from "react";
import { ReactComponent as Landing } from "Assets/SVG/landing.svg";
import styles from "./OrLoginCard.module.css"; // Import css modules stylesheet as styles

export default function OrgLoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.loginCard}>
      <div className={styles.cardTitle}> Login </div>
      <input
        placeholder="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      ></input>
      <input
        placeholder="constraseña"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      ></input>
      <button className={styles.button}>Log in</button>
    </div>
  );
}
