import React from "react";
import { images } from "../../../assets/images";
import styles from "./styles.module.css";

function AuthLayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <img className={styles.logo} src={images.logo} alt="logo" />
        <div className={styles.contentWrapper}>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
      <div className={styles.side}>
        <div
          className={styles.notepad}
          style={{
            backgroundImage: `radial-gradient(rgba(0,0,0,0), rgba(0,0,0,1)),url(${images.notepad})`,
          }}
        >
          <div>
            <h3>Pen & Paper get lost,</h3>
            <h3>
              <img
                src={images.logoWhite}
                className={styles.logoWhite}
                alt="logo"
              />{" "}
              won't
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
