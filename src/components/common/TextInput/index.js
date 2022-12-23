import React from "react";
import styles from "./styles.module.css";

function TextInput({ className, ...props }) {
  return (
    <div className={className}>
      <input className={styles.input} {...props} />
    </div>
  );
}

export default TextInput;
