import Button from "../Button/index";
import React, { useEffect, useState } from "react";
import styles from "./NewsPreview.module.scss";
import Link from "next/link";
import Image from "next/image";

const News = ({ articles }) => {
  return (
    <div className={styles.container}>
      <div className={styles.hader}>
        <h2>Latest News</h2>
      </div>
      <div className={styles.articles}>
        {articles.map((article, key) => {
          return (
            <Link href={"/articles/" + article.fields.slug}>
              <div className={styles.article} key={key}>
                <img
                  src={article.fields.image.fields.file.url}
                  className={styles.image}
                />
                <div className={styles.articleText}>
                  <h3>{article.fields.title}</h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default News;
