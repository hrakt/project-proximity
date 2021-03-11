import cx from "classnames";
import styles from "./SvgIcon.module.scss";
import icons from "./icons";

const SvgIcon = ({ className, icon }) => {
  return (
    <div
      className={cx(className, styles.wrapper)}
      dangerouslySetInnerHTML={{ __html: icons[icon] }}
    />
  );
};

export default SvgIcon;
