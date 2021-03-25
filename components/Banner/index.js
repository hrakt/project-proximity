import styles from "./Banner.module.scss";

const Banner = ({ header }) => {
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `url("/bannerBG.jpg")`,
        backgroundPosition: `50% 50%`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
      }}
    >
      <h1 className={styles.header}>{header}</h1>
    </div>
  );
};

export default Banner;
