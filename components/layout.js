import Meta from "../components/meta";
import LogoBar from "./logo-bar";
import Nav from "./nav";
import { motion } from "framer-motion";
import styles from "../styles/layout.module.css";

export default function Layout({ activePage, children, wide }) {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 50 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -50 },
  };
  return (
    <>
      <Meta />
      <Nav activePage={activePage} />

      <motion.main
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
        transition={{ type: "anticipate" }}
        className={`${styles.container} ${wide && styles.wide}`}
      >
        {children}
      </motion.main>
    </>
  );
}
