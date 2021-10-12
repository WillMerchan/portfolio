import { AnimatePresence } from "framer-motion";
import LogoBar from "../components/logo-bar";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className='app-wrapper'>
      <LogoBar />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
