import React from "react";
import styles from "./Products.module.scss";

const Products = () => {
  const productArr = [
    { name: "Oil", img: "/product.jpg" },
    { name: "Vape", img: "/product.jpg" },
    { name: "Flower", img: "/product.jpg" },
  ];

  return (
    <div className={styles.products}>
      {productArr.map((product, key) => {
        return (
          <React.Fragment key={key}>
            <div className={styles.product}>
              <div className={styles.imageWrapper}>
                <img src={product.img} className={styles.image} />
              </div>

              <div className={styles.productText}>
                <h3>{product.name}</h3>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Products;
