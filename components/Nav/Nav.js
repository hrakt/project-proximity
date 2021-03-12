import styles from "./Nav.module.scss";
import Link from "next/link";
import React from "react";
import SvgIcon from "../SvgIcon/index";

const Nav = () => {
  const menuOptions = [
    { title: "About", href: "/about" },
    { title: "Products", href: "/products" },
    { title: "News", href: "/news" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.socialIcons}>
          <SvgIcon icon="Facebook" className={styles.icon} />
          <SvgIcon icon="Instagram" className={styles.icon} />
        </div>
        <ul className={styles.navItems}>
          {menuOptions.map((item, key) => {
            return (
              <React.Fragment>
                {key === 2 ? (
                  <SvgIcon icon="Logo" className={styles.logo} />
                ) : null}
                <li key={key} className={styles.navItem}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
        <div className={styles.socialIcons}>
          <SvgIcon icon="Facebook" className={styles.icon} />
          <SvgIcon icon="Instagram" className={styles.icon} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
