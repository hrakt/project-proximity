import Button from "../Button/index";

import styles from "./News.module.scss";

const News = ({}) => {
  const articleArr = [
    {
      image: "/product.jpg",
      title: "Lorem ipsum dolor sit amet.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "/product.jpg",
      title: "Lorem ipsum dolor sit amet.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "/product.jpg",
      title: "Lorem ipsum dolor sit amet.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.hader}>
        <h2>Latest News</h2>
      </div>
      <div className={styles.articles}>
        {articleArr.map((article, key) => {
          return (
            <div className={styles.article} key={key}>
              <img src={article.image} className={styles.image} />
              <div className={styles.articleText}>
                <h3>{article.title}</h3>
                <span>{article.content}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
