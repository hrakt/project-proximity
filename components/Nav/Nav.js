import styles from "../../styles/Nav.module.scss";
import Link from "next/link";

const Nav = () => {
  const menuOptions = [
    { title: "About", href: "//about" },
    { title: "Products", href: "//products" },
    { title: "News", href: "//news" },
    { title: "Contact", href: "//contact" },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <ul className={styles.navItems}>
          {menuOptions.map((item, key) => {
            return (
              <li key={key} className={styles.navItem}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
