import React from "react";
import styles from "./Products.module.scss";
import Masonry from "react-masonry-css";
import Link from "next/link";

const Products = () => {
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
        {productArr.map((product, key) => {
          return (
            <Link href={"/"} key={key}>
              <div className={styles.product}>
                <div className={styles.imageWrapper}>
                  <img src={product.img} className={styles.image} />
                </div>

                <div className={styles.productText}>
                  <h3>{product.name}</h3>
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
