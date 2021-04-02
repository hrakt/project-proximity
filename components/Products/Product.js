import styles from "./Product.module.scss";
import Image from "next/image";
import Button from "../Button";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Product = ({ product }) => {
  console.log(product);
  return (
    <div className={styles.product}>
      <div className={styles.imageWrapper}>
        <Image
          src={"https:" + product.fields.image.fields.file.url}
          alt="Picture of the author"
          width={"500"}
          height={"300"}
        />
      </div>
      <div className={styles.summary}>
        <h1 className={styles.header}>{product.fields.name}</h1>
        <p className={styles.description}>
          {" "}
          {documentToReactComponents(product.fields.description)}
        </p>
        <div className={styles.buttons}>
          <Button theme="grey">Find Product</Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
