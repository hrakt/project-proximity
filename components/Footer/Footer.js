import SvgIcon from "../SvgIcon/index";
import styles from "./Footer.module.scss";

const Footer = () => {
  const footerArr = [
    { title: "About", link: "/about" },
    { title: "Products", link: "/products" },
    { title: "Locator", link: "/locator" },
    { title: "Delivery", link: "/delivery" },
    { title: "News", link: "/news" },
  ];

  return (
    <footer className={styles.footer}>
      <a href={"/"}>
        <SvgIcon icon="Logo" className={styles.logo} />
      </a>
      <ul className={styles.links}>
        {footerArr.map((link, key) => {
          return (
            <li className={styles.link} key={key}>
              <a href={link.link}>{link.title}</a>
            </li>
          );
        })}
      </ul>
      <div className={styles.socialIcons}>
        <a href="//www.facebook.com">
          <SvgIcon icon="Facebook" className={styles.icon} />
        </a>
        <a href={"//www.instagram.com"}>
          <SvgIcon icon="Instagram" className={styles.icon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
