import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from "./NewsArticle.module.scss";
import Button from "../Button/index.js";
import Banner from "../Banner";

const NewsArticle = ({ article }) => {
  console.log(article);
  return (
    <div className={styles.article}>
      <div className={styles.content}>
        {documentToReactComponents(article.fields.content)}
      </div>
      <Button link="/news" className={styles.button} theme="grey">
        Back to News
      </Button>
    </div>
  );
};

export default NewsArticle;
