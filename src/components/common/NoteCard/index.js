import React from "react";
import styles from "./styles.module.css";

function NoteCard() {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <div className={styles.circle}></div>
        <h3>Note Topic One</h3>
      </div>
      <p className="mt-10">
        Lorem ipsum dolor sit amet. Quo animi sunt aut odio nesciunt ex omni
      </p>
      <p className="mt-10">
        <span className={styles.date}> 15/10/2022</span>{" "}
        <span className={styles.reminderDate}>10/01/2022</span>
      </p>
    </div>
  );
}

export default NoteCard;
