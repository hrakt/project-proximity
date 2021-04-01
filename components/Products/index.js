import React from "react";
import styles from "./Products.module.scss";
import Masonry from "react-masonry-css";
import Link from "next/link";

const Products = ({ products }) => {
  console.log(products);
  const productArr = [
    { name: "Oil", img: "/product.jpg" },
    { name: "Vape", img: "/product.jpg" },
    { name: "Flower", img: "/product.jpg" },
  ];

  return (
    <div className={styles.wrapper}>
      <Masonry
        breakpointCols={{
          default: 3,
          1500: 2,
          1100: 1,
        }}
        className={styles.masonryGrid}
        columnClassName={styles.masonryGrid__column}
      >
        {products.map((product, key) => {
          return (
            <Link href={"/product/" + product.fields.slug} key={key}>
              <div className={styles.product}>
                <div className={styles.imageWrapper}>
                  <img
                    src={product.fields.image.fields.file.url}
                    className={styles.image}
                  />
                </div>

                <div className={styles.productText}>
                  <h3>{product.fields.name}</h3>
                </div>
              </div>
            </Link>
          );
        })}
      </Masonry>
    </div>
  );
};

export default Products;
