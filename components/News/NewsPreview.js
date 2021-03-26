import Button from "../Button/index";
import React, { useEffect, useState } from "react";
import styles from "./NewsPreview.module.scss";
import Image from "next/image";

const News = ({ articles }) => {
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
        {articles.map((article, key) => {
          return (
            <div className={styles.article} key={key}>
              <img
                src={article.fields.image.fields.file.url}
                className={styles.image}
              />
              <div className={styles.articleText}>
                <h3>{article.fields.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
