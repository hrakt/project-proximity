import React from "react";

import styles from "./Nav.module.scss";
import Link from "next/link";
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
          <a href="//www.facebook.com">
            <SvgIcon icon="Facebook" className={styles.icon} />
          </a>
          <a href={"//www.instagram.com"}>
            <SvgIcon icon="Instagram" className={styles.icon} />
          </a>
        </div>
        <ul className={styles.navItems}>
          {menuOptions.map((item, key) => {
            return (
              <React.Fragment>
                {key === 2 ? (
                  <a href={"/"}>
                    <SvgIcon icon="Logo" className={styles.logo} />
                  </a>
                ) : null}
                <li key={key} className={styles.navItem}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
        <div className={styles.socialIcons}>
          <a href="/delivery">
            <SvgIcon icon="Delivery" className={styles.icon} />
          </a>
          <a href="/locator">
            <SvgIcon icon="Location" className={styles.icon} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
