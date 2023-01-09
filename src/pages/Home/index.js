import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Button from "../../components/common/Button";
import NoteCard from "../../components/common/NoteCard";
import Modal from "../../components/Modal";
import EmptyPage from "./EmptyPage";
import styles from "./styles.module.css";
import img from "../../assets/images/logoHome.jpg";
import { Link } from "react-router-dom";

function HomePage() {
  const isEmpty = false;
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div style={{ minHeight: "100%" }}>
        {isEmpty ? (
          <EmptyPage />
        ) : (
          <div className={styles.container}>
            <div className={styles.left}>
              <NoteCard />
              <NoteCard />
              <NoteCard />
              <NoteCard />
              <Button text="Open Modal" onClick={() => setOpen(true)} />
            </div>
            <div className={styles.right}>
              <div>
                <img src={img} alt="" className={styles.logoHo} />
                <h2>Note Topic</h2>
                <p>
                  Lorem ipsum dolor sit amet. Quo animi sunt aut odio nesciunt
                  ex omnis quibusdam aut ratione enim aut facere accusantium! 33
                  inventore architecto 33 quia harum et quisquam dolorem ad quae
                  culpa eos quis modi. In autem officia non voluptas optio aut
                  velit voluptatum eum autem facilis. Lorem ipsum dolor sit
                  amet. Quo animi sunt aut odio nesciunt ex omnis quibusdam aut
                  ratione enim aut facere accusantium! 33 inventore architecto
                  33 quia harum et quisquam dolorem ad quae culpa eos quis modi.
                  In autem officia non voluptas optio aut velit voluptatum eum
                  autem facilis. Lorem ipsum dolor sit amet. Quo animi sunt aut
                  odio nesciunt ex omnis quibusdam aut ratione enim aut facere
                  accusantium! 33 inventore architecto 33 quia harum et quisquam
                  dolorem ad quae culpa eos quis modi. In autem officia non
                  voluptas optio aut velit voluptatum eum autem facilis.
                </p>
              </div>
            </div>
          </div>
        )}
        <Modal isOpen={isOpen} closeModal={() => setOpen(false)}>
          <div style={{ width: 500, textAlign: "center" }}>
            <h1 className={styles.saved}>Saved</h1>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  textAlign: "center",
                  padding: "10px 30px",
                  width: "48%",
                }}
              >
                Go Home
              </div>
              <button
                style={{
                  textAlign: "center",
                  padding: "10px 30px",
                  width: "48%",
                  backgroundColor: "#4A4AFA",
                  borderRadius: "30px",
                  border: "none",
                }}
              >
                {" "}
                <Link to="/tasks"> TaskPage</Link>
                Write new note
              </button>
            </div>
          </div>
          Home{" "}
        </Modal>
      </div>
    </>
  );
}

export default HomePage;
