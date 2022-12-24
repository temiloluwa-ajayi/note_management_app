import { Icon } from "@iconify/react";
import React from "react";
import Button from "../../components/common/Button";
import styles from "./styles.module.css";

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
      <Button text="Start new note" width="auto" />
    </div>
  );
}

export default EmptyPage;
