import React from "react";
import styles from "./styles.module.css";

function Button({ className, text, width = "100%", ...props }) {
  return (
    <button style={{ width: width }} className={styles.button} {...props}>
      {text}
    </button>
  );
}

export default Button;
