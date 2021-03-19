import Button from "../Button/index";

import styles from "./Newsletter.module.scss";

const Newsletter = ({}) => {
  const newsletterHeader = "Stay up to date with us";
  const disclaimer =
    "By providing your contact information, you agree to recieve promotion offers and to our Terms & Services.";

  return (
    <div className={styles.container}>
      <span className={styles.header}>{newsletterHeader}</span>
      <div className={styles.wrapper}>
        <div className={styles.inputWrapper}>
          <input
            className={styles.emailInput}
            placeholder="Yor email address"
          ></input>
        </div>
        <Button theme="grey" className={styles.button}>
          Subscribe
        </Button>
      </div>
      <span className={styles.disclaimer}>{disclaimer}</span>
    </div>
  );
};

export default Newsletter;
