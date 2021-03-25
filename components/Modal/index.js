import React, { useEffect } from "react";
import Button from "../Button";
import styles from "./Modal.module.scss";
import cx from "classnames";

import { useCookies } from "react-cookie";

const Modal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [cookies, setCookie] = useCookies(["name"]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setCookie("over21", true, { path: "/" });
    setIsOpen(false);
  }

  useEffect(() => {
    if (!cookies.over21) openModal();
  }, []);

  useEffect(() => {
    if (modalIsOpen) document.body.style.overflow = "hidden";
    if (!modalIsOpen) document.body.style.overflow = "unset";
  }, [modalIsOpen]);

  return modalIsOpen ? (
    <div className={cx(styles.modal)}>
      <div className={styles.messageBox}>
        <p>Are you over 21?</p>
        <div className={styles.buttonContainer}>
          <div onClick={closeModal}>
            <Button className={styles.button} theme="grey">
              Yes
            </Button>
          </div>
          <a href="//www.google.com">
            <Button theme="grey">No</Button>
          </a>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
