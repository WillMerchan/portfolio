import Link from "next/link";
import styles from "../styles/nav.module.css";

export default function Nav({ activePage }) {
  return (
    <div className={styles.container}>
      <Link href='/'>
        <a
          className={`${styles.link} ${activePage == "home" && styles.active}`}
        >
          Blog
        </a>
      </Link>
      <Link href='/portfolio'>
        <a
          className={`${styles.link} ${
            activePage == "portfolio" && styles.active
          }`}
        >
          Work
        </a>
      </Link>
      <Link href='/about'>
        <a
          className={`${styles.link} ${activePage == "about" && styles.active}`}
        >
          About
        </a>
      </Link>
    </div>
  );
}
