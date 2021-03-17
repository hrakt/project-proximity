import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import styles from "./Carousel.module.scss";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <Carousel autoPlay swipeable showStatus={false} showThumbs={false}>
        <div>
          <img src="/hero1.jpg" className={styles.img} />
        </div>
        <div>
          <img src="/hero2.jpg" className={styles.img} />
        </div>
        <div>
          <img src="hero3.jpg" className={styles.img} />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
