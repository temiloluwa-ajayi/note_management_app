import { Icon } from "@iconify/react";
import React from "react";
import Button from "../../components/common/Button";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function EmptyPage() {
  return (
    <div className={styles.emptyContainer}>
      <Icon
        width={100}
        height={100}
        color="var(--primary-color)"
        icon="majesticons:note-text-plus"
      />
      <h1>You have nothing here</h1>
      <Link to="/blankPage">
        <Button text="Start new note" width="auto" />
      </Link>
    </div>
  );
}

export default EmptyPage;
