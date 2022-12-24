import React from "react";
import ReactModal from "react-modal";
import styles from "./styles.module.css";

function Modal({ isOpen, closeModal, children }) {
  return (
    <ReactModal
      isOpen={isOpen}
      className={styles.body}
      overlayClassName={styles.overlay}
      htmlOpenClassName="uk-modal-page"
      onRequestClose={closeModal}
    >
      {children}
    </ReactModal>
  );
}

export default Modal;
