import React from "react";
import SvgIcon from "../SvgIcon";
import styles from "./Practices.module.scss";

const Practices = ({}) => {
  const practicesHeader =
    "Our Pactices. What makes us stand out is the concious growing and development of our products.";

  const practicesArr = [
    {
      icon: "Organic",
      title: "100% Organic",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "Grown",
      title: "Responsibly Grown",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
      icon: "Enviornment",
      title: "Enviornmental Friendly",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.haederContainer}>
        <h2 className={styles.header}>{practicesHeader}</h2>
      </div>
      <div className={styles.practices}>
        {practicesArr.map((practice, key) => {
          return (
            <React.Fragment key={key}>
              <div className={styles.practice}>
                <SvgIcon className={styles.icon} icon={practice.icon} />
                <div className={styles.practiceText}>
                  <h3>{practice.title}</h3>
                  <p>{practice.content}</p>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Practices;
