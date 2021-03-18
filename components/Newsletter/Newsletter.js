import styles from "./Newsletter.module.scss";

const Newsletter = ({}) => {
  const newsletterHeader = "Stay up to date with us";
  const disclaimer =
    "By providing your contact information, you agree to recieve promotion offers and to our Terms & Services.";

  return (
    <div className={styles.container}>
      <span className={styles.header}>{newsletterHeader}</span>

      <div className={styles.inputWrapper}>
        <input
          className={styles.emailInput}
          placeholder="Yor email address"
        ></input>
      </div>
      <span className={styles.disclaimer}>{disclaimer}</span>
    </div>
  );
};

export default Newsletter;
