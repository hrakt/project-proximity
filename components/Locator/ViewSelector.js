import styles from "./Locator.module.scss";

const ViewSelector = ({ setViewSelector }) => {
  return (
    <div className={styles.selectorWrapper}>
      {/* <a className={styles.selector} onClick={() => setViewSelector("list")}>
        List
      </a>
      <a className={styles.selector} onClick={() => setViewSelector("map")}>
        Map
      </a> */}
      <span>Find our products near you</span>
    </div>
  );
};

export default ViewSelector;
