import React, { useEffect } from "react";
import cx from "classnames";
import styles from "./Contact.module.scss";
import Button from "../Button";

const Contact = ({ contactOpen, setContactOpen }) => {
  useEffect(() => {
    console.log(contactOpen);
  }, [contactOpen]);
  return (
    <div
      className={cx(styles.contact, { [styles.contactOpen]: contactOpen })}
      onMouseOver={() => setContactOpen(true)}
      onMouseLeave={() => setContactOpen(false)}
    >
      <div className={styles.info}>
        <h2 className={styles.header}>
          We're looking to forward to hearing from you!
        </h2>
        <div className={styles.hours}>
          <div>
            <strong>Monday - Friday</strong>
          </div>
          <div>
            <strong>9am - 5pm PST</strong>
          </div>
        </div>
        <div className={styles.emailPhone}>
          <div>
            <a href="mailto:support@lotus.com">support@lotus.com</a>
          </div>
          <div>
            <a href="tel:123-456-7890">123-456-7890</a>
          </div>
        </div>
        <div className={styles.address}>
          <address>1234 Lotus St, Los Angeles, CA, 90000</address>
        </div>
      </div>
      <div className={styles.form}>
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Message" />
        <Button className={styles.button} theme="grey">
          Send
        </Button>
      </div>
    </div>
  );
};

export default Contact;
