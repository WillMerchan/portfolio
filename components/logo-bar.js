import Link from "next/link";
import Logo from "./logo";
import styles from "../styles/logobar.module.css";
import TwitterIcon from "./icon-twitter";
import LinkedInIcon from "./icon-linkedin";
import EmailIcon from "./icon-mail";

export default function LogoBar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>
            <Logo />
          </a>
        </Link>
      </div>
      <div className={styles.iconGroup}>
        <div className={styles.icon}>
          <TwitterIcon />
        </div>
        <div className={styles.icon}>
          <LinkedInIcon />
        </div>
        <div className={styles.icon}>
          <EmailIcon />
        </div>
      </div>
    </div>
  );
}
