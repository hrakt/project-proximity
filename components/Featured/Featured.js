import styles from "../Featured/Featured.module.scss";
import cx from "classnames";

const Feautred = ({}) => {
  const featuredItems = [
    {
      img: { link: "/product.jpg" },
      header: "Lorem ipsum dolor sit amet",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
    },
    {
      img: { link: "/product.jpg" },
      header: "Lorem ipsum dolor sit amet",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
    },
    {
      img: { link: "/product.jpg" },
      header: "Lorem ipsum dolor sit amet",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
    },
  ];

  return (
    <div className={styles.contiainer}>
      {featuredItems.map((item, key) => {
        let align;
        key % 2 === 0 ? (align = "left") : (align = "right");
        return (
          <div className={cx(styles.item, styles[`item__${align}`])} key={key}>
            <div className={styles.item__textBox}>
              <div>{item.header}</div>
              <dibv>{item.body}</dibv>
            </div>
            <div className={styles.item__imageBox}>
              <img src={item.img.link} className={styles.item__image} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feautred;
