import React, { useEffect, useState } from "react";
import cx from "classnames";
import styles from "./Nav.module.scss";
import Link from "next/link";
import SvgIcon from "../SvgIcon/index";
import Contact from "../Contact/Contact";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(true);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleContact = (e) => {
    console.log(e.target);
  };

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    if (!menuOpen) document.body.style.overflow = "unset";
  }, [menuOpen]);

  const menuOptions = [
    { title: "About", href: "/about" },
    { title: "Products", href: "/products" },
    { title: "News", href: "/news" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <React.Fragment>
      <div
        className={cx(styles.menu, {
          [styles.menuClosed]: !menuOpen,
        })}
      >
        <a href={"/"}>
          <SvgIcon icon="Logo" className={styles.logo} />
        </a>
        <ul className={styles.hamburgerNav}>
          {menuOptions.map((item, key) => {
            return (
              <li key={key} className={styles.hamburgerNavItem}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.hamburgerIcons}>
          <a href="//www.facebook.com">
            <SvgIcon icon="Facebook" className={styles.icon} />
          </a>
          <a href={"//www.instagram.com"}>
            <SvgIcon icon="Instagram" className={styles.icon} />
          </a>
        </div>
      </div>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.left}>
            <div className={styles.hamburgerWrapper} onClick={handleClick}>
              <div
                className={cx(styles.center, {
                  [styles.hamburgerOpen]: menuOpen,
                })}
              >
                <div></div>
              </div>
            </div>
            <div className={styles.socialIcons}>
              <a href="//www.facebook.com">
                <SvgIcon icon="Facebook" className={styles.icon} />
              </a>
              <a href="//www.instagram.com">
                <SvgIcon icon="Instagram" className={styles.icon} />
              </a>
            </div>
          </div>
          <div className={styles.middle}>
            <ul className={styles.navItems}>
              {menuOptions.map((item, key) => {
                return (
                  <React.Fragment key={key}>
                    {key === 2 ? (
                      <a href={"/"}>
                        <SvgIcon icon="Logo" className={styles.logo} />
                      </a>
                    ) : null}
                    {item.title === "Contact" ? (
                      <li
                        onClick={handleContact}
                        onMouseEnter={() => setContactOpen(true)}
                        onMouseLeave={() => setContactOpen(false)}
                        className={styles.navItem}
                      >
                        {item.title}
                      </li>
                    ) : (
                      <li className={styles.navItem}>
                        <Link href={item.href}>{item.title}</Link>
                      </li>
                    )}
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
          <div className={styles.right}>
            <div className={styles.socialIcons}>
              <a href="/delivery">
                <SvgIcon icon="Delivery" className={styles.icon} />
              </a>
              <a href="/locator">
                <SvgIcon icon="Location" className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Contact contactOpen={contactOpen} setContactOpen={setContactOpen} />
    </React.Fragment>
  );
};

export default Nav;
