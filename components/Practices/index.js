import SvgIcon from "../SvgIcon";
import styles from "./Practices.module.scss";

const Practices = ({}) => {
  const practicesHeader =
    "Our Pactices. Understanding how important the practices in growin cannabis are, we value our methods used to achieve the best quality cannabis products in market. Every step of the way is carefully measured and planned to deliver a concisous product to our costumers.";

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
      title: "Enviornmental Friendly Packaging",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className={styles.container}>
      <h2>{practicesHeader}</h2>
      {practicesArr.map((practice, key) => {
        return (
          <div className={styles.practice}>
            <SvgIcon iconType={practice.icon} />
            <h4>{practice.title}</h4>
            <span>{practice.content}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Practices;
